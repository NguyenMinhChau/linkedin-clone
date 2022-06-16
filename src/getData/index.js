import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { auth, db } from '../firebase';
import { setUser } from '../reducers/userReducer';

// Lấy thông tin người dùng đăng nhập bằng Google
export function useUserHook() {
    const dispatch = useDispatch();
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                db.collection('users')
                    .get()
                    .then((docs) => {
                        docs.forEach((doc) => {
                            if (doc.data().email === user.email) {
                                dispatch(setUser(doc.data()));
                            }
                        });
                    });
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const user = useSelector((state) => state.user);
    return user.user;
}
// Lấy thông tin bài viết
export function usePostHook() {
    const post = useSelector((state) => state.post);
    return post;
}
// Lấy thông tin xử lý cho PhotoModal Share
export function usePhotoContentHook() {
    const photoContent = useSelector((state) => state.photoContent);
    return photoContent;
}
// Lấy thông tin xử lý cho VideoModal Share
export function useVideoContentHook() {
    const videoContent = useSelector((state) => state.videoContent);
    return videoContent;
}
// Lấy thông tin xử lý cho Comment Post
export function useCommentToogleHook() {
    const commentContent = useSelector((state) => state.commentContent);
    return commentContent;
}
// Lấy thông tin xử lý cho ImageViewer
export function useImageViewerHook() {
    const imageViewer = useSelector((state) => state.imageViewer);
    return imageViewer;
}
// Lấy thông tin xử lý cho menuItemPost
export function useMenuItemPostHook() {
    const menuItemPost = useSelector((state) => state.menuItemPost);
    return menuItemPost;
}
// Lấy thông tin xử lý cho ArticleContent
export function useArticleContentHook() {
    const articleContent = useSelector((state) => state.articleContent);
    return articleContent;
}
// Lấy thông tin xử lý cho Share Content
export function useShareContentHook() {
    const shareContent = useSelector((state) => state.shareContent);
    return shareContent;
}
// Lấy thông tin xử lý cho Embed Content
export function useEmbedContentHook() {
    const embedContent = useSelector((state) => state.embedContent);
    return embedContent;
}
// Lấy thông tin xử lý cho JoinNow
export function useJoinNowHook() {
    const joinNow = useSelector((state) => state.Joinnow);
    return joinNow;
}
