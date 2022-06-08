import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    toggleVideo: false,
    videoFile: [],
};
const videoContentReducer = createSlice({
    name: 'videoContent',
    initialState: INITIAL_STATE,
    reducers: {
        // VIDEO
        handleToogleVideo: (state) => {
            state.toggleVideo = !state.toggleVideo;
        },
        handleContainersVideoClick: (state) => {
            state.toggleVideo = false;
            state.videoFile = [];
        },
        handleContentVideoClick: (state) => {
            state.toggleVideo = true;
        },
        handleChangeVideoFile: (state, action) => {
            const videoFile = action.payload;
            if (videoFile === '' && videoFile === undefined) {
                alert('Please select a video');
            }
            state.videoFile.push(videoFile);
        },
        resetVideoFile: (state, action) => {
            state.videoFile = action.payload;
        },
    },
});
export const {
    handleToogleVideo,
    handleContainersVideoClick,
    handleContentVideoClick,
    handleChangeVideoFile,
    resetVideoFile,
} = videoContentReducer.actions;
export default videoContentReducer;
