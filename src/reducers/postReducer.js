import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    post: null,
};
const postReducer = createSlice({
    name: 'post',
    initialState: INITIAL_STATE,
    reducers: {
        createPost: (state, action) => {
            state.post = action.payload;
        },
    },
});
export const { createPost } = postReducer.actions;
export default postReducer;
