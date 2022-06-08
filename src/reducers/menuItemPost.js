import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    toogle: false,
    idPost: '',
};
const menuItemPostReducer = createSlice({
    name: 'menuItemPost',
    initialState: INITIAL_STATE,
    reducers: {
        // MENU ITEM POST
        handelToogle: (state, action) => {
            state.toogle = !state.toogle;
            state.idPost = action.payload;
        },
    },
});
export const { handelToogle } = menuItemPostReducer.actions;
export default menuItemPostReducer;
