import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    togglePhoto: false,
    images: [],
};
const photoContentReducer = createSlice({
    name: 'photoContent',
    initialState: INITIAL_STATE,
    reducers: {
        // PHOTO
        handleTooglePhoto: (state) => {
            state.togglePhoto = !state.togglePhoto;
        },
        handleChangePhoto: (state, action) => {
            const imageFile = action.payload;
            if (imageFile === '' && imageFile === undefined) {
                alert('Please select an image');
            }
            state.images = [imageFile];
        },
        resetImagePhoto: (state, action) => {
            state.images = action.payload;
        },
        handleContainersPhotoClick: (state) => {
            state.togglePhoto = false;
            state.images = [];
        },
        handleContentPhotoClick: (state) => {
            state.togglePhoto = true;
        },
    },
});
export const {
    handleTooglePhoto,
    handleChangePhoto,
    resetImagePhoto,
    handleContainersPhotoClick,
    handleContentPhotoClick,
} = photoContentReducer.actions;
export default photoContentReducer;
