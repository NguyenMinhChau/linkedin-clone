import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/userReducer';
import postReducer from '../reducers/postReducer';
import photoContentReducer from '../reducers/photoContentPost';
import videoContentReducer from '../reducers/videoContentPost';
import commentContentReducer from '../reducers/commentContentPost';
import imageViewerReducer from '../reducers/imageViewer';
import menuItemPostReducer from '../reducers/menuItemPost';
import articleContentReducer from '../reducers/articleContentPost';
import shareContentReducer from '../reducers/shareContentPost';
import embedContentReducer from '../reducers/embedContent';
import JoinnowReducer from '../reducers/JoinnowReducer';

export const store = configureStore({
    reducer: {
        user: userReducer.reducer,
        post: postReducer.reducer,
        photoContent: photoContentReducer.reducer,
        videoContent: videoContentReducer.reducer,
        commentContent: commentContentReducer.reducer,
        imageViewer: imageViewerReducer.reducer,
        menuItemPost: menuItemPostReducer.reducer,
        articleContent: articleContentReducer.reducer,
        shareContent: shareContentReducer.reducer,
        embedContent: embedContentReducer.reducer,
        Joinnow: JoinnowReducer.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
        });
    },
});
