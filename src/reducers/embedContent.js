import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    toggleEmbed: false,
    idPost: '',
};
const embedContentReducer = createSlice({
    name: 'embedContent',
    initialState: INITIAL_STATE,
    reducers: {
        // EMBED
        handleToogleEmbed: (state, action) => {
            state.toggleEmbed = !state.toggleEmbed;
            state.idPost = action.payload;
        },
        handleContainersEmbedClick: (state) => {
            state.toggleEmbed = false;
        },
        handleContentsEmbedClick: (state) => {
            state.toggleEmbed = true;
        },
    },
});
export const {
    handleToogleEmbed,
    handleContainersEmbedClick,
    handleContentsEmbedClick,
} = embedContentReducer.actions;
export default embedContentReducer;
