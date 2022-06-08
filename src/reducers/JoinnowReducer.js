import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    email: '',
    password: '',
    displayName: '',
    photoURL: '',
    toogleJoinnow: true,
    toogleEmailSignin: false,
    showPassword: false,
};
const JoinnowReducer = createSlice({
    name: 'Joinnow',
    initialState: INITIAL_STATE,
    reducers: {
        // JOIN NOW
        handleOpenEmailSignin: (state, action) => {
            state.toogleJoinnow = false;
            state.toogleEmailSignin = true;
            state.email = '';
            state.password = '';
            state.displayName = '';
            state.photoURL = '';
        },
        handleOpenJoinnow: (state, action) => {
            state.toogleJoinnow = true;
            state.toogleEmailSignin = false;
            state.email = '';
            state.password = '';
            state.displayName = '';
            state.photoURL = '';
        },
        handleChangeEmail: (state, action) => {
            state.email = action.payload;
        },
        handleChangePassword: (state, action) => {
            state.password = action.payload;
        },
        handleChangeDisplayName: (state, action) => {
            state.displayName = action.payload;
        },
        handleChangePhotoURL: (state, action) => {
            state.photoURL = action.payload;
        },
        handleJoinNow: (state, action) => {
            const {
                e,
                setError,
                refDisplayNameJoinnow,
                refEmailJoinnow,
                refPasswordJoinnow,
                refphotoURLJoinnow,
                db,
                storage,
                dispatch,
                joinnows,
                setProgress,
                auth,
                history,
            } = action.payload;
            const { displayName, email, password, photoURL } = state;
            e.preventDefault();
            const regexEmail =
                // eslint-disable-next-line no-useless-escape
                /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/;
            const regexPassword =
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
            if (displayName === '') {
                setError('Vui lòng nhập tên hiển thị');
                refDisplayNameJoinnow.current.focus();
            } else if (email === '') {
                setError('Vui lòng nhập email');
                refEmailJoinnow.current.focus();
            } else if (!regexEmail.test(email)) {
                setError('Email không hợp lệ');
                refEmailJoinnow.current.focus();
            } else if (password === '') {
                setError('Vui lòng nhập mật khẩu');
                refPasswordJoinnow.current.focus();
            } else if (!regexPassword.test(password)) {
                setError(
                    'Mật khẩu không hợp lệ - Mật khẩu bao gồm: ký tự in hoa, ký tự đặc biệt, ký tự viết thường, số và độ dài từ 6 đến 16 ký tự'
                );
                refPasswordJoinnow.current.focus();
            } else if (photoURL === '') {
                setError('Vui lòng chọn ảnh đại diện');
                refphotoURLJoinnow.current.focus();
            } else {
                const idRamdom = () => {
                    const id1 = Math.random().toString(36).substr(2, 6);
                    const id2 = Math.random().toString(36).substr(2, 6);
                    const id3 = Math.random().toString(36).substr(2, 6);
                    const id4 = new Date().toISOString();
                    const id5 = new Date().getTime();
                    return `${id1}_${id2}_${id3}_${id4}_${id5}`;
                };
                const id = idRamdom();
                db.collection('users')
                    .get()
                    .then((doc) => {
                        let check = false;
                        doc.forEach((doc) => {
                            if (doc.data().email === email) {
                                check = true;
                            }
                        });
                        if (!check) {
                            const uploadTask = storage
                                .ref(`users/images/${photoURL.name}/${id}`)
                                .put(photoURL);
                            uploadTask.on(
                                'state_changed',
                                (snapshot) => {
                                    const progressLoad =
                                        (snapshot.bytesTransferred /
                                            snapshot.totalBytes) *
                                        100;
                                    setProgress(progressLoad);
                                },
                                (error) => {
                                    console.log(error);
                                },
                                async () => {
                                    const url =
                                        await uploadTask.snapshot.ref.getDownloadURL();
                                    const user = {
                                        createdAt: new Date().toISOString(),
                                        displayName: displayName,
                                        email: email,
                                        password: password,
                                        photoURL: url,
                                        uid: id,
                                    };
                                    await db.collection('users').add(user);
                                    await auth
                                        .createUserWithEmailAndPassword(
                                            user.email,
                                            user.password
                                        )
                                        .then((auth) => {
                                            history('/home');
                                        })
                                        .catch(() =>
                                            setError(
                                                `Email ${email} này đã tồn tại`
                                            )
                                        );
                                    dispatch(
                                        joinnows.handleChangeDisplayName('')
                                    );
                                    dispatch(joinnows.handleChangeEmail(''));
                                    dispatch(joinnows.handleChangePassword(''));
                                    dispatch(joinnows.handleChangePhotoURL(''));
                                    dispatch(joinnows.handleOpenEmailSignin());
                                    setError('');
                                }
                            );
                        } else {
                            setError(`Email ${email} đã tồn tại`);
                            dispatch(joinnows.handleChangeEmail(''));
                            refEmailJoinnow.current.focus();
                        }
                    });
            }
        },
        handleSignin: (state, action) => {
            const {
                e,
                db,
                dispatch,
                history,
                users,
                setError,
                refEmailSignin,
                refPasswordSignin,
                auth,
            } = action.payload;
            const { email, password } = state;
            e.preventDefault();
            const regexEmail =
                // eslint-disable-next-line no-useless-escape
                /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/;
            const regexPassword =
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
            if (email === '') {
                setError('Vui lòng nhập email');
                refEmailSignin.current.focus();
            } else if (!regexEmail.test(email)) {
                setError('Email không hợp lệ');
                refEmailSignin.current.focus();
            } else if (password === '') {
                setError('Vui lòng nhập mật khẩu');
                refPasswordSignin.current.focus();
            } else if (!regexPassword.test(password)) {
                setError(
                    'Mật khẩu không hợp lệ - Mật khẩu bao gồm: ký tự in hoa, ký tự đặc biệt, ký tự viết thường, số và độ dài từ 6 đến 16 ký tự'
                );
                refPasswordSignin.current.focus();
            } else {
                // kiểm tra trong db username và password nếu có trong db thì đăng nhập
                db.collection('users')
                    .where('email', '==', email)
                    .where('password', '==', password)
                    .get()
                    .then((snapshot) => {
                        if (snapshot.empty) {
                            setError(
                                'Email hoặc mật khẩu không đúng. Vui lòng thử lại!'
                            );
                        } else {
                            snapshot.forEach((doc) => {
                                dispatch(users.setUser(doc.data()));
                                auth.signInWithEmailAndPassword(
                                    doc.data().email,
                                    doc.data().password
                                )
                                    .then((auth) => {
                                        if (auth) {
                                            history('/home');
                                        }
                                    })
                                    .catch(() =>
                                        setError('Tài khoản này không tồn tại')
                                    );
                                history('/home');
                                dispatch(handleChangeEmail(''));
                                dispatch(handleChangePassword(''));
                                setError('');
                            });
                        }
                    });
                setError('');
            }
        },
        handleShowPassword: (state, action) => {
            state.showPassword = !state.showPassword;
        },
    },
});
export const {
    handleOpenEmailSignin,
    handleOpenJoinnow,
    handleChangeEmail,
    handleChangePassword,
    handleChangeDisplayName,
    handleChangePhotoURL,
    handleJoinNow,
    handleSignin,
    handleShowPassword,
} = JoinnowReducer.actions;
export default JoinnowReducer;
