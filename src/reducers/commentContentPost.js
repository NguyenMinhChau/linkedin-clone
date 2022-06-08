import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    toogleComment: false,
    content: '',
    images: [],
    chosenEmoji: null,
    toggleEmoji: false,
    idPost: '',
};
const commentContentReducer = createSlice({
    name: 'commentContent',
    initialState: INITIAL_STATE,
    reducers: {
        // COMMENT
        handleToogleComment: (state, action) => {
            state.toogleComment = !state.toogleComment;
            state.idPost = action.payload;
        },
        handleChangeComment: (state, action) => {
            state.content = action.payload;
        },
        onEmojiClick: (state, action) => {
            state.chosenEmoji = action.payload.emojiObject;
            state.content = state.content + action.payload.emojiObject.emoji;
        },
        handleToggleEmoji: (state, action) => {
            state.toggleEmoji = !state.toggleEmoji;
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
        handleDeleteImageItem: (state, action) => {
            state.images = state.images.filter(
                (image, index) => index !== action.payload
            );
            state.images = [...state.images];
        },
    },
});
export const {
    handleToogleComment,
    handleChangeComment,
    onEmojiClick,
    handleToggleEmoji,
    handleChangeImages,
    handleDeleteImageItem,
    resetImages,
} = commentContentReducer.actions;
export default commentContentReducer;
