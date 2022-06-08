/* eslint-disable array-callback-return */
import React, { useEffect, useRef } from 'react';
import Picker from 'emoji-picker-react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import { useUserHook, useArticleContentHook } from '../../../../getData';
import styles from './ContentMiddle.module.css';
import MiddleInfoUser from './ArticleModalItems/MiddleInfoUser';
import MiddleContentArticle from './ArticleModalItems/MiddleContentArticle';
import MiddleImageContent from './ArticleModalItems/MiddleImageContent';
import MiddleVideoContent from './ArticleModalItems/MiddleVideoContent';
import MiddleVideoLinkContent from './ArticleModalItems/MiddleVideoLinkContent';
import MiddleHandleProgress from './ArticleModalItems/MiddleHandleProgress';
import BottomButtonHashtagAndMention from './ArticleModalItems/BottomButtonHashtagAndMention';
import BottomListActions from './ArticleModalItems/BottomListActions';
import { useHandleCustomeCharacter } from './Togglehandle';
import { articleContents } from '../../../../reducers';
import { Tooltip } from '@mui/material';

function ArticleModal({
    progress,
    postArticle,
    handleContainersArticleClick,
    handleContentsArticleClick,
    handleButtonCloseContentArticle,
}) {
    const actionsArticleContent = useArticleContentHook();
    const handleRemoveAccents = useHandleCustomeCharacter();
    const dispatch = useDispatch();
    const user = useUserHook();
    const refTextArea = useRef();
    const refVideoLink = useRef();
    const userName = handleRemoveAccents.removeAccents(
        user.displayName ? user.displayName : ''
    );
    useEffect(() => {
        refTextArea.current.focus();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div
            className={`${clsx(styles.modal_bg)}`}
            onClick={handleContainersArticleClick}
        >
            <div
                className={`${clsx(styles.modal_contents)}`}
                onClick={handleContentsArticleClick}
            >
                <div className={`${clsx(styles.modal_top)}`}>
                    <h5 className='mb-3'>Write Article</h5>
                    <Tooltip title='Close' placement='top-start'>
                        <span
                            className={`${clsx(styles.modal_close)}`}
                            onClick={handleButtonCloseContentArticle}
                        >
                            <i className='fa-solid fa-times'></i>
                        </span>
                    </Tooltip>
                </div>
                <div
                    className={`${clsx(
                        styles.modal_middle,
                        styles.modal_middle_sm,
                        styles.modal_middle_tablet
                    )}`}
                >
                    <MiddleInfoUser user={user} userName={userName} />
                    {progress === 0 ? (
                        <div
                            className={`${clsx(
                                styles.share_modal_middle_content
                            )} mt-3`}
                        >
                            <MiddleContentArticle refTextArea={refTextArea} />
                            <div
                                className={`${clsx(
                                    styles.share_upload_image_video_conatiner
                                )}`}
                            >
                                {/* IMAGE */}
                                <MiddleImageContent />
                                {/* VIDEO */}
                                <MiddleVideoContent />
                                {/* VIDEO LINK */}
                                <MiddleVideoLinkContent
                                    refVideoLink={refVideoLink}
                                />
                            </div>
                        </div>
                    ) : (
                        <MiddleHandleProgress progress={progress} />
                    )}
                </div>
                <div className={`${clsx(styles.modal_bottom)}`}>
                    <BottomButtonHashtagAndMention refTextArea={refTextArea} />
                    <div
                        className={`${clsx(styles.share_modal_bottom_actions)}`}
                    >
                        <BottomListActions
                            refVideoLink={refVideoLink}
                            postArticle={postArticle}
                        />
                    </div>
                    {/* EMOJI */}
                    {actionsArticleContent.toggleEmoji && (
                        <div
                            className={`${clsx(styles.share_emoji_container)}`}
                        >
                            <Picker
                                onEmojiClick={(e, emojiObject) => {
                                    dispatch(
                                        articleContents.onEmojiClick({
                                            e,
                                            emojiObject,
                                        })
                                    );
                                }}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ArticleModal;
