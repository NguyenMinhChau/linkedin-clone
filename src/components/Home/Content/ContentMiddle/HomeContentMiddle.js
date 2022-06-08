/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import VideoModal from './VideoModal';
import PhotoModal from './PhotoModal';
import ArticleModal from './ArticleModal';
import PopupDiscardArticle from './PopupDiscardArticle';
import styles from './ContentMiddle.module.css';
import { MiddleContentSharePost, MiddlePostItem } from '../../';
import {
    useUserHook,
    usePhotoContentHook,
    useVideoContentHook,
    useArticleContentHook,
} from '../../../../getData';
import { photos, videos, articleContents } from '../../../../reducers';
import { storage, db } from '../../../../firebase';

function HomeContentMiddle() {
    const [progress, setProgress] = useState(0);
    const dispatch = useDispatch();
    const user = useUserHook();
    const actionsPhotoModal = usePhotoContentHook();
    const actionsVideoModal = useVideoContentHook();
    const actionsArticleContent = useArticleContentHook();
    return (
        <div
            className={`${clsx(
                styles.home_content_col_middle
            )} col col-sm-12 col-md-12 col-12 col-lg-6`}
        >
            <MiddleContentSharePost />
            <MiddlePostItem />
            {actionsPhotoModal.togglePhoto && (
                <PhotoModal
                    handleContainersPhotoClick={(e) => {
                        e.stopPropagation();
                        dispatch(photos.handleContainersPhotoClick());
                    }}
                    handleContentPhotoClick={(e) => {
                        e.stopPropagation();
                        dispatch(photos.handleContentPhotoClick());
                    }}
                />
            )}
            {actionsVideoModal.toggleVideo && (
                <VideoModal
                    handleContainersVideoClick={(e) => {
                        e.stopPropagation();
                        dispatch(videos.handleContainersVideoClick());
                    }}
                    handleContentVideoClick={(e) => {
                        e.stopPropagation();
                        dispatch(videos.handleContentVideoClick());
                    }}
                />
            )}
            {actionsArticleContent.toggleArticle && (
                <ArticleModal
                    progress={progress}
                    postArticle={(e) =>
                        dispatch(
                            articleContents.postArticle({
                                e,
                                storage,
                                setProgress,
                                user,
                                db,
                                dispatch,
                            })
                        )
                    }
                    handleContainersArticleClick={(e) => {
                        e.stopPropagation();
                        dispatch(
                            articleContents.handleContainersArticleClick()
                        );
                    }}
                    handleContentsArticleClick={(e) => {
                        e.stopPropagation();
                        dispatch(articleContents.handleContentsArticleClick());
                    }}
                    handleButtonCloseContentArticle={(e) => {
                        e.stopPropagation();
                        dispatch(
                            articleContents.handleButtonCloseContentArticle()
                        );
                    }}
                />
            )}
            {actionsArticleContent.toggleDiscardArticle && (
                <PopupDiscardArticle
                    handleContainersDiscardArticleClick={(e) => {
                        e.stopPropagation();
                        dispatch(
                            articleContents.handleContainersDiscardArticleClick()
                        );
                    }}
                    handleContentDiscardArticleClick={(e) => {
                        e.stopPropagation();
                        dispatch(
                            articleContents.handleContentDiscardArticleClick()
                        );
                    }}
                    handleButtonDiscardArticleClick={(e) => {
                        e.stopPropagation();
                        dispatch(
                            articleContents.handleButtonDiscardArticleClick()
                        );
                    }}
                />
            )}
        </div>
    );
}

export default HomeContentMiddle;
