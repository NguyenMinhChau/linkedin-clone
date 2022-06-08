import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    toogleImageViewer: false,
    currentImage: null,
    idPost: '',
};
const imageViewerReducer = createSlice({
    name: 'imageViewer',
    initialState: INITIAL_STATE,
    reducers: {
        // IMAGE VIEWER
        handleImageViewer: (state, action) => {
            state.toogleImageViewer = !state.toogleImageViewer;
            state.currentImage = action.payload.src;
            state.idPost = action.payload.idPost;
        },
        handleImageViewerCloseButton: (state) => {
            state.toogleImageViewer = false;
        },
    },
});
export const { handleImageViewer, handleImageViewerCloseButton } =
    imageViewerReducer.actions;
export default imageViewerReducer;
