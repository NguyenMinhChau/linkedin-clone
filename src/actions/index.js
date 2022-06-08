import moment from 'moment';
import { auth, provider, db } from '../firebase';
import { posts, users } from '../reducers';

// Xử lý đăng nhập với Google
export function signinAPI(dispatch, history) {
    auth.signInWithPopup(provider)
        .then((result) => {
            if (result) {
                dispatch(users.setUser(result.user));
                // Lưu user vào database nếu có user đó thì không thêm vào nữa dựa vào uid user
                db.collection('users')
                    .get()
                    .then((doc) => {
                        // kiem tra xem user co trong database hay chua
                        let check = false;
                        doc.forEach((doc) => {
                            if (doc.data().uid === result.user.uid) {
                                check = true;
                            }
                        });
                        if (!check) {
                            db.collection('users').add({
                                displayName: result.user.displayName,
                                email: result.user.email,
                                photoURL: result.user.photoURL,
                                uid: result.user.uid,
                                createdAt: moment(new Date()).format(
                                    'DD/MM/YYYY - HH:mm:ss A'
                                ),
                            });
                        }
                    });
                history('/home');
            }
        })
        .catch((error) => {
            alert(error.message);
        });
}

// Xử lý đăng xuất người dùng
export function signoutAPI(dispatch, history) {
    auth.signOut()
        .then(() => {
            dispatch(users.setUser(null));
            history('/');
        })
        .catch((error) => {
            alert(error.message);
        });
}

// Xử lý đăng bài viết
export function postArticleAPI(payload, dispatch) {
    dispatch(posts.createPost(payload));
}
