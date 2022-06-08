/* eslint-disable array-callback-return */
import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    toggleArticle: false,
    toggleDiscardArticle: false,
    content: '',
    images: [],
    videoLinks: [],
    videoLink: '',
    toogleVideoLink: false,
    chosenEmoji: null,
    toggleEmoji: false,
};
const articleContentReducer = createSlice({
    name: 'articleContent',
    initialState: INITIAL_STATE,
    reducers: {
        // ARTICLE
        handleToogleArticle: (state) => {
            state.toggleArticle = !state.toggleArticle;
        },
        handleContainersArticleClick: (state) => {
            state.toggleArticle = false;
            state.images = [];
            state.videoLinks = [];
            state.videoLink = '';
            state.toogleVideoLink = false;
        },
        handleContentsArticleClick: (state) => {
            state.toggleArticle = true;
        },
        handleButtonCloseContentArticle: (state) => {
            state.toggleDiscardArticle = true;
        },
        handleButtonDiscardArticleClick: (state) => {
            state.toggleArticle = false;
            state.toggleDiscardArticle = false;
            state.images = [];
            state.videoLinks = [];
            state.videoLink = '';
            state.toogleVideoLink = false;
        },
        handleContainersDiscardArticleClick: (state) => {
            state.toggleDiscardArticle = false;
            state.toggleArticle = true;
        },
        handleContentDiscardArticleClick: (state) => {
            state.toggleDiscardArticle = false;
            state.toggleArticle = false;
        },
        // ARTICLE CONTENT
        handleChangeContent: (state, action) => {
            state.content = action.payload;
        },
        handleToggleEmoji: (state, action) => {
            state.toggleEmoji = !state.toggleEmoji;
        },
        onEmojiClick: (state, action) => {
            state.chosenEmoji = action.payload.emojiObject;
            state.toggleEmoji = true;
            state.content = state.content + action.payload.emojiObject.emoji;
        },
        handleChangeImages: (state, action) => {
            const images = action.payload;
            if (images === '' || images === undefined) {
                alert(`Không phải hình ảnh, file này có dạng ${typeof images}`);
            } else {
                for (let i = 0; i < images.length; i++) {
                    const image = images[i];
                    image['id'] =
                        Math.random().toString(36).substr(2, 6) +
                        '-' +
                        new Date().getTime();
                    state.images.push(image);
                }
            }
        },
        resetImages: (state, action) => {
            state.images = action.payload;
        },
        handleChangeVideoLinks: (state, action) => {
            const video = action.payload;
            if (video === '' || video === undefined) {
                alert(`Không phải video, file này có dạng ${typeof video}`);
            } else {
                for (let i = 0; i < video.length; i++) {
                    const videoLink = video[i];
                    videoLink['id'] =
                        Math.random().toString(36).substr(2, 6) +
                        '-' +
                        new Date().getTime();
                    state.videoLinks.push(videoLink);
                }
            }
        },
        resetVideoLinks: (state, action) => {
            state.videoLinks = action.payload;
        },
        handleToogleVideoLink: (state, action) => {
            state.toogleVideoLink = !state.toogleVideoLink;
        },
        handleChangeVideoLink: (state, action) => {
            state.videoLink = action.payload;
        },
        handleAddHashtag: (state, action) => {
            state.content = state.content ? state.content + '#' : '#';
            action.payload.focus();
        },
        handleAddMentions: (state, action) => {
            state.content = state.content ? state.content + '@' : '@';
            action.payload.focus();
        },
        handleDeleteImageItem: (state, action) => {
            state.images = state.images.filter(
                (image, index) => index !== action.payload
            );
            state.images = [...state.images];
        },
        handleDeleteVideoItem: (state, action) => {
            state.videoLinks = state.videoLinks.filter(
                (video, index) => index !== action.payload
            );
            state.videoLinks = [...state.videoLinks];
        },
        postArticle: (state, action) => {
            const { content, videoLinks, images, videoLink } = state;
            const { e, storage, setProgress, user, db, dispatch } =
                action.payload;
            e.preventDefault();
            e.stopPropagation();
            if (e.target !== e.currentTarget) {
                return;
            }
            const idRamdom = () => {
                const id1 = Math.random().toString(36).substr(2, 6);
                const id2 = Math.random().toString(36).substr(2, 6);
                const id3 = Math.random().toString(36).substr(2, 6);
                const id4 = new Date().toISOString();
                const id5 = new Date().getTime();
                return `${id1}_${id2}_${id3}_${id4}_${id5}`;
            };
            const id = idRamdom();
            const promisesDataPhoto = [];
            images.map((image) => {
                const uploadTask = storage
                    .ref(`images/${image.name}/${id}`)
                    .put(image);
                promisesDataPhoto.push(uploadTask);
                uploadTask.on(
                    'state_changed',
                    (snapshot) => {
                        const progressLoad =
                            (snapshot.bytesTransferred / snapshot.totalBytes) *
                            100;
                        setProgress(progressLoad);
                    },
                    (error) => {
                        console.log(error);
                    }
                );
            });
            const promisesDataVideo = [];
            videoLinks.map((video) => {
                const uploadTask = storage
                    .ref(`videos/${video.name}/${id}`)
                    .put(video);
                promisesDataVideo.push(uploadTask);
                uploadTask.on(
                    'state_changed',
                    (snapshot) => {
                        const progressLoad =
                            (snapshot.bytesTransferred / snapshot.totalBytes) *
                            100;
                        setProgress(progressLoad);
                    },
                    (error) => {
                        console.log(error);
                    }
                );
            });
            Promise.all(promisesDataPhoto).then(() => {
                Promise.all(promisesDataVideo).then(() => {
                    const promisesData = [];
                    promisesDataPhoto.map((promiseDataPhoto) => {
                        promisesData.push(
                            promiseDataPhoto.snapshot.ref.getDownloadURL()
                        );
                    });
                    Promise.all(promisesData)
                        .then((downloadUrls) => {
                            const promisesData = [];
                            promisesDataVideo.map((promiseDataVideo) => {
                                promisesData.push(
                                    promiseDataVideo.snapshot.ref.getDownloadURL()
                                );
                            });
                            Promise.all(promisesData).then(
                                (downloadUrlsVideo) => {
                                    const payloads = {
                                        image: downloadUrls,
                                        video: downloadUrlsVideo,
                                        videoLink: videoLink,
                                        user: user,
                                        description: content,
                                        timestamp: new Date().toISOString(),
                                    };
                                    const arrayVideo = [
                                        ...payloads.video,
                                        payloads.videoLink,
                                    ];
                                    db.collection('articles').add({
                                        actor: {
                                            description: payloads.user.email,
                                            title: payloads.user.displayName,
                                            date: payloads.timestamp,
                                            image: payloads.user.photoURL,
                                            uid: payloads.user.uid,
                                        },
                                        video: arrayVideo.filter(
                                            (item) => item
                                        ),
                                        image: payloads.image,
                                        comments: [],
                                        reacts: {
                                            like: 0,
                                            celebrate: 0,
                                            support: 0,
                                            love: 0,
                                            insights: 0,
                                            curious: 0,
                                        },
                                        share: 0,
                                        send: 0,
                                        description: payloads.description,
                                    });
                                    dispatch(handleChangeContent(''));
                                    dispatch(resetImages([]));
                                    dispatch(handleChangeVideoLinks([]));
                                    dispatch(resetVideoLinks([]));
                                    dispatch(handleChangeVideoLink(''));
                                    dispatch(handleToogleArticle());
                                    setProgress(0);
                                }
                            );
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                });
            });
            // const downloadURLs = [];
            // Promise.all(promisesDataPhoto)
            //     .then(() => {
            //         promisesDataPhoto.map((item) => {
            //             downloadURLs.push(item.snapshot.ref.getDownloadURL());
            //         });
            //         Promise.all(downloadURLs).then((urls) => {
            //             const payloads = {
            //                 image: urls,
            //                 video: videoLinks,
            //                 user: user,
            //                 description: content,
            //                 timestamp: new Date().toISOString(),
            //             };
            //             // postArticleAPI(payloads, dispatch);
            //             db.collection('articles').add({
            //                 actor: {
            //                     description: payloads.user.email,
            //                     title: payloads.user.displayName,
            //                     date: payloads.timestamp,
            //                     image: payloads.user.photoURL,
            //                     uid: payloads.user.uid,
            //                 },
            //                 video: payloads.video,
            //                 image: payloads.image,
            //                 comments: [],
            //                 reacts: {
            //                     like: 0,
            //                     celebrate: 0,
            //                     support: 0,
            //                     love: 0,
            //                     insights: 0,
            //                     curious: 0,
            //                 },
            //                 share: 0,
            //                 send: 0,
            //                 description: payloads.description,
            //             });
            //             dispatch(handleChangeContent(''));
            //             dispatch(resetImages([]));
            //             dispatch(handleChangeVideoLinks([]));
            //             dispatch(handleToogleArticle());
            //             setProgress(0);
            //         });
            //     })
            //     .catch((error) => {
            //         alert(error);
            //     });
        },
    },
});
export const {
    // ARTICLE
    handleToogleArticle,
    handleContainersArticleClick,
    handleContentsArticleClick,
    handleButtonCloseContentArticle,
    handleButtonDiscardArticleClick,
    handleContainersDiscardArticleClick,
    handleContentDiscardArticleClick,
    // ARTICLE CONTENT
    handleChangeContent,
    handleToggleEmoji,
    onEmojiClick,
    handleChangeImages,
    handleChangeVideoLinks,
    resetVideoLinks,
    handleToogleVideoLink,
    handleChangeVideoLink,
    handleAddHashtag,
    handleAddMentions,
    handleDeleteImageItem,
    handleDeleteVideoItem,
    resetImages,
    postArticle,
} = articleContentReducer.actions;
export default articleContentReducer;
