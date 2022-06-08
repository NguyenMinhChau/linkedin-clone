import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Mention, MentionsInput } from 'react-mentions';
import { Input, IconButton } from '@mui/material';
import Picker from 'emoji-picker-react';
import clsx from 'clsx';
import defaultStyle from './defaultCss';
import { useMentionsAndHashtag } from '../Togglehandle';
import styles from './Comment.module.css';
import { useCommentToogleHook } from '../../../../../getData';
import { comments } from '../../../../../reducers';
import { getData } from '../../../../';

function Comment() {
    const dispatch = useDispatch();
    const actionsComments = useCommentToogleHook();
    const actionsMentionsAndHashtag = useMentionsAndHashtag();
    const refTextAreaCMT = useRef();
    const user = getData.useUserHook();
    return (
        <div
            className={`${clsx(styles.middle_content_comment_container)} w-100`}
        >
            <div className={`${clsx(styles.middle_content_comment)}`}>
                <img
                    onError={(e) => {
                        e.target.src = '/icons8-linkedin.svg';
                    }}
                    src={user.photoURL ? user.photoURL : ''}
                    alt=''
                    className={`${clsx(styles.middle_content_comment_img)}`}
                />
                <div className={`${clsx(styles.comment_input_container)}`}>
                    <MentionsInput
                        value={actionsComments.content}
                        onChange={(e) => {
                            dispatch(
                                comments.handleChangeComment(e.target.value)
                            );
                        }}
                        markup='@[__display__]'
                        placeholder='Add a comment...'
                        style={defaultStyle}
                        inputRef={refTextAreaCMT}
                        className={`${clsx(styles.comment_input)} form-control`}
                    >
                        <Mention
                            trigger='@'
                            data={actionsMentionsAndHashtag.users}
                            renderSuggestion={(item, index) =>
                                actionsMentionsAndHashtag.renderUserSuggestion(
                                    item,
                                    index
                                )
                            }
                            appendSpaceOnAdd={true}
                            // Quy định kiểu hiển thị ra giao diện
                            markup='@[__display__]'
                            displayTransform={
                                actionsMentionsAndHashtag.displayTransform
                            }
                        />
                        <Mention
                            trigger='#'
                            data={actionsMentionsAndHashtag.users}
                            appendSpaceOnAdd={true}
                            renderSuggestion={(item, index) =>
                                actionsMentionsAndHashtag.renderUserSuggestionTag(
                                    item,
                                    index
                                )
                            }
                            // Quy định kiểu hiển thị ra giao diện
                            markup='#[__display__]'
                            displayTransform={
                                actionsMentionsAndHashtag.displayTransformTag
                            }
                        />
                    </MentionsInput>
                    <div className={`${clsx(styles.comment_button_1)}`}>
                        <label
                            className={`${clsx(styles.comment_button_icons)}`}
                            onClick={() => {
                                dispatch(comments.handleToggleEmoji());
                            }}
                        >
                            <IconButton
                                color='success'
                                component='span'
                                style={{ fontSize: '16px' }}
                            >
                                <i className='fa-solid fa-face-smile'></i>
                            </IconButton>
                        </label>
                        {/* EMOJI */}
                        {actionsComments.toggleEmoji && (
                            <div
                                className={`${clsx(
                                    styles.comment_emoji_container
                                )}`}
                            >
                                <Picker
                                    onEmojiClick={(e, emojiObject) => {
                                        dispatch(
                                            comments.onEmojiClick({
                                                e,
                                                emojiObject,
                                            })
                                        );
                                    }}
                                />
                            </div>
                        )}
                    </div>
                    <label
                        htmlFor='comment-file'
                        className={`${clsx(styles.comment_button_2)}`}
                    >
                        <Input
                            accept='image/*'
                            id='comment-file'
                            type='file'
                            style={{ display: 'none' }}
                            onChange={(e) => {
                                dispatch(
                                    comments.handleChangeImages(e.target.files)
                                );
                            }}
                            inputProps={{ multiple: true }}
                        />
                        <IconButton
                            color='primary'
                            aria-label='upload picture'
                            component='span'
                            style={{ fontSize: '16px' }}
                        >
                            <i className='fa-solid fa-image'></i>
                        </IconButton>
                    </label>
                </div>
            </div>
            {actionsComments.content && (
                <div className='d-flex'>
                    <button
                        className={`${clsx(
                            styles.button_post_comment
                        )} ml-auto`}
                    >
                        Post
                    </button>
                </div>
            )}
            <div className={`${clsx(styles.comment_images_container)} mb-3`}>
                {(actionsComments.images || []).map((url, index) => (
                    <div
                        className={`${clsx(styles.comment_images_item)}`}
                        key={index}
                    >
                        <img
                            src={URL.createObjectURL(url)}
                            alt='image_comment'
                        />
                        <span
                            className={`${clsx(styles.image_close)}`}
                            onClick={() =>
                                dispatch(comments.handleDeleteImageItem(index))
                            }
                        >
                            <i className='fa-solid fa-xmark'></i>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Comment;
