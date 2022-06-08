/* eslint-disable array-callback-return */
import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    toggleShare: false,
    toggleRole: false,
    toggleDiscard: false,
    content: '',
    chosenEmoji: null,
    toggleEmoji: false,
    idPost: '',
    roleText: 'Anyone',
    roleId: 'anyone',
};
const shareContentReducer = createSlice({
    name: 'shareContent',
    initialState: INITIAL_STATE,
    reducers: {
        // SHARE
        handleToogleShare: (state, action) => {
            state.toggleShare = !state.toggleShare;
            state.idPost = action.payload;
        },
        handleContainersShareClick: (state) => {
            state.toggleShare = false;
            state.content = '';
        },
        handleContentShareClick: (state) => {
            state.toggleShare = true;
        },
        handleButtonCloseContentShareClick: (state) => {
            state.toggleDiscard = true;
        },
        handleContainersDiscardShareClick: (state) => {
            state.toggleDiscard = false;
            state.toggleShare = true;
        },
        handleContentDiscardShareClick: (state) => {
            state.toggleDiscard = true;
            state.toggleShare = false;
        },
        handleButtonDiscardShareClick: (state) => {
            state.toggleDiscard = false;
            state.toggleShare = false;
        },
        handleButtonAnyoneShareClick: (state) => {
            state.toggleRole = true;
        },
        // ROLE
        handleContainersRoleClick: (state) => {
            state.toggleRole = false;
        },
        handleContentsRoleClick: (state) => {
            state.toggleRole = true;
        },
        handleChangeRole: (state, action) => {
            switch (action.payload) {
                case 'anyone':
                    state.roleText = ' Anyone ';
                    state.roleId = 'anyone';
                    break;
                case 'anyoneandtwitter':
                    state.roleText = ' Anyone and Twitter ';
                    state.roleId = 'anyoneandtwitter';
                    break;
                case 'connectiononlinkedin':
                    state.roleText = ' Connection on Linkedin ';
                    state.roleId = 'connectiononlinkedin';
                    break;
                default:
                    state.roleText = 'anyone';
            }
        },
        handleSetRoleId: (state, action) => {
            state.roleId = action.payload;
        },
        // SHARE CONTENT
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
        removeAccents: (state, action) => {
            var AccentsMap = [
                'aàảãáạăằẳẵắặâầẩẫấậ',
                'AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ',
                'dđ',
                'DĐ',
                'eèẻẽéẹêềểễếệ',
                'EÈẺẼÉẸÊỀỂỄẾỆ',
                'iìỉĩíị',
                'IÌỈĨÍỊ',
                'oòỏõóọôồổỗốộơờởỡớợ',
                'OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ',
                'uùủũúụưừửữứự',
                'UÙỦŨÚỤƯỪỬỮỨỰ',
                'yỳỷỹýỵ',
                'YỲỶỸÝỴ',
            ];
            for (var i = 0; i < AccentsMap.length; i++) {
                var re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
                var char = AccentsMap[i][0];
                action.payload = action.payload.replace(re, char);
            }
            // return action.payload;
        },
    },
});
export const {
    // ARTICLE
    handleToogleShare,
    handleContainersShareClick,
    handleContentShareClick,
    handleButtonCloseContentShareClick,
    handleContainersDiscardShareClick,
    handleContentDiscardShareClick,
    handleButtonDiscardShareClick,
    handleButtonAnyoneShareClick,
    // ROLE
    handleContainersRoleClick,
    handleContentsRoleClick,
    handleChangeRole,
    handleSetRoleId,
    // ARTICLE CONTENT
    handleChangeContent,
    handleToggleEmoji,
    onEmojiClick,
    handleAddHashtag,
    handleAddMentions,
    handleDeleteImageItem,
    removeAccents,
} = shareContentReducer.actions;
export default shareContentReducer;
