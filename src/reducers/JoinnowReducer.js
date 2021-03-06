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
                setError('Vui l??ng nh???p t??n hi???n th???');
                refDisplayNameJoinnow.current.focus();
            } else if (email === '') {
                setError('Vui l??ng nh???p email');
                refEmailJoinnow.current.focus();
            } else if (!regexEmail.test(email)) {
                setError('Email kh??ng h???p l???');
                refEmailJoinnow.current.focus();
            } else if (password === '') {
                setError('Vui l??ng nh???p m???t kh???u');
                refPasswordJoinnow.current.focus();
            } else if (!regexPassword.test(password)) {
                setError(
                    'M???t kh???u kh??ng h???p l??? - M???t kh???u bao g???m: k?? t??? in hoa, k?? t??? ?????c bi???t, k?? t??? vi???t th?????ng, s??? v?? ????? d??i t??? 6 ?????n 16 k?? t???'
                );
                refPasswordJoinnow.current.focus();
            } else if (photoURL === '') {
                setError('Vui l??ng ch???n ???nh ?????i di???n');
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
                                                `Email ${email} n??y ???? t???n t???i`
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
                            setError(`Email ${email} ???? t???n t???i`);
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
                setError('Vui l??ng nh???p email');
                refEmailSignin.current.focus();
            } else if (!regexEmail.test(email)) {
                setError('Email kh??ng h???p l???');
                refEmailSignin.current.focus();
            } else if (password === '') {
                setError('Vui l??ng nh???p m???t kh???u');
                refPasswordSignin.current.focus();
            } else if (!regexPassword.test(password)) {
                setError(
                    'M???t kh???u kh??ng h???p l??? - M???t kh???u bao g???m: k?? t??? in hoa, k?? t??? ?????c bi???t, k?? t??? vi???t th?????ng, s??? v?? ????? d??i t??? 6 ?????n 16 k?? t???'
                );
                refPasswordSignin.current.focus();
            } else {
                // ki???m tra trong db username v?? password n???u c?? trong db th?? ????ng nh???p
                db.collection('users')
                    .where('email', '==', email)
                    .where('password', '==', password)
                    .get()
                    .then((snapshot) => {
                        if (snapshot.empty) {
                            setError(
                                'Email ho???c m???t kh???u kh??ng ????ng. Vui l??ng th??? l???i!'
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
                                        setError('T??i kho???n n??y kh??ng t???n t???i')
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
