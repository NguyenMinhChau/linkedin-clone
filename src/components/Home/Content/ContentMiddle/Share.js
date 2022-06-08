import React, { useEffect, useRef, useState } from 'react';
import Iframe from 'react-iframe';
import Picker from 'emoji-picker-react';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, Tooltip } from '@mui/material';
import { MentionsInput, Mention } from 'react-mentions';
import clsx from 'clsx';
import { useUserHook, useShareContentHook } from '../../../../getData';
import { shareContents } from '../../../../reducers';
import { useMentionsAndHashtag } from './Togglehandle';
import styles from './ContentMiddle.module.css';
import defaultStyle from './defaultCss';

function Share({
    handleContainersShareClick,
    handleContentShareClick,
    handleButtonCloseContentShareClick,
    handleButtonAnyoneShareClick,
}) {
    const dispatch = useDispatch();
    const idPost = useSelector((state) => state.shareContent.idPost);
    const [embed, setEmbed] = useState('');
    const actionsShared = useShareContentHook();
    const actionsMentionsAndHashtag = useMentionsAndHashtag();
    const user = useUserHook();
    const refTextArea = useRef();
    useEffect(() => {
        refTextArea.current.focus();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        const url = `https://linkedln-clone-5568b.web.app/embed/feed/update/${idPost}`;
        setEmbed(url);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idPost]);
    const userName = dispatch(
        shareContents.removeAccents(user.displayName ? user.displayName : '')
    ).payload;
    return (
        <div
            className={`${clsx(styles.modal_bg)}`}
            onClick={handleContainersShareClick}
        >
            <div
                className={`${clsx(styles.modal_contents)}`}
                onClick={handleContentShareClick}
            >
                <div className={`${clsx(styles.modal_top)}`}>
                    <h5 className='mb-3'>Share</h5>
                    <Tooltip title='Close' placement='top-start'>
                        <span
                            className={`${clsx(styles.modal_close)}`}
                            onClick={handleButtonCloseContentShareClick}
                        >
                            <i className='fa-solid fa-times'></i>
                        </span>
                    </Tooltip>
                </div>
                <div className={`${clsx(styles.modal_middle)}`}>
                    <div
                        className={`${clsx(
                            styles.share_modal_middle_info_use
                        )}`}
                    >
                        <img
                            onError={(e) => {
                                e.target.src = '/icons8-linkedin.svg';
                            }}
                            src={user.photoURL ? user.photoURL : ''}
                            alt=''
                        />
                        <div
                            className={`${clsx(
                                styles.share_modal_middle_info_use_name_and_role
                            )}`}
                        >
                            <h5
                                className={`${clsx(
                                    styles.share_modal_middle_info_name
                                )}`}
                            >
                                {userName ? userName : 'Linkedin'}
                            </h5>
                            <button onClick={handleButtonAnyoneShareClick}>
                                <span
                                    className={`${clsx(
                                        styles.share_modal_middle_info_earth
                                    )} mr-2`}
                                >
                                    <i className='fa-solid fa-earth-africa'></i>
                                </span>
                                <span>{actionsShared.roleText}</span>
                                <span
                                    className={`${clsx(
                                        styles.share_modal_middle_info_arrow
                                    )} ml-2`}
                                >
                                    <i className='fa-solid fa-angle-down'></i>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div
                        className={`${clsx(
                            styles.share_modal_middle_content
                        )} mt-3`}
                    >
                        {/* MENTIONS AND HASHTAG */}
                        <MentionsInput
                            value={actionsShared.content}
                            onChange={(e) =>
                                dispatch(
                                    shareContents.handleChangeContent(
                                        e.target.value
                                    )
                                )
                            }
                            markup='@[__display__]'
                            style={defaultStyle}
                            placeholder='Start writing or use @ to mention people, companies or schools'
                            inputRef={refTextArea}
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
                                className='mentions__mention'
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
                                className='hashtags__hashtag'
                            />
                        </MentionsInput>
                        <Iframe
                            url={`${embed}`}
                            width='100%'
                            height='500px'
                            className={`${clsx(
                                styles.share_modal_middle_content_iframe
                            )}`}
                        />
                    </div>
                </div>
                <div className={`${clsx(styles.modal_bottom)}`}>
                    <button
                        onClick={() =>
                            dispatch(
                                shareContents.handleAddHashtag(
                                    refTextArea.current
                                )
                            )
                        }
                        className={`${clsx(
                            styles.share_modal_bottom_add_hastag
                        )} mr-2`}
                    >
                        Add hashtag
                    </button>
                    <button
                        onClick={() =>
                            dispatch(
                                shareContents.handleAddMentions(
                                    refTextArea.current
                                )
                            )
                        }
                        className={`${clsx(
                            styles.share_modal_bottom_add_hastag
                        )}`}
                    >
                        Add mentions
                    </button>
                    <div
                        className={`${clsx(styles.share_modal_bottom_actions)}`}
                    >
                        <ul
                            className={`${clsx(
                                styles.share_modal_bottom_actions_lists
                            )} mt-2`}
                        >
                            <li
                                className={`${clsx(
                                    styles.share_modal_bottom_actions_item
                                )}`}
                            >
                                <label
                                    className={`${clsx(
                                        styles.share_modal_button_actions,
                                        styles.share_modal_button_actions_disabled
                                    )}`}
                                >
                                    <IconButton
                                        color='success'
                                        aria-label='upload picture'
                                        component='span'
                                        style={{ fontSize: '20px' }}
                                        disabled
                                    >
                                        <i className='fa-solid fa-images'></i>
                                    </IconButton>
                                </label>
                            </li>
                            <li
                                className={`${clsx(
                                    styles.share_modal_bottom_actions_item
                                )}`}
                            >
                                <label
                                    className={`${clsx(
                                        styles.share_modal_button_actions,
                                        styles.share_modal_button_actions_disabled
                                    )}`}
                                >
                                    <IconButton
                                        color='error'
                                        aria-label='upload picture'
                                        component='span'
                                        style={{ fontSize: '20px' }}
                                        disabled
                                    >
                                        <i className='fa-brands fa-youtube'></i>
                                    </IconButton>
                                </label>
                            </li>
                            <li
                                className={`${clsx(
                                    styles.share_modal_bottom_actions_item
                                )}`}
                            >
                                <label
                                    className={`${clsx(
                                        styles.share_modal_button_actions,
                                        styles.share_modal_button_actions_disabled
                                    )}`}
                                >
                                    <IconButton
                                        color='secondary'
                                        aria-label='upload picture'
                                        component='span'
                                        style={{ fontSize: '20px' }}
                                        disabled
                                    >
                                        <i className='fa-solid fa-file-pen'></i>
                                    </IconButton>
                                </label>
                            </li>
                            <li
                                className={`${clsx(
                                    styles.share_modal_bottom_actions_item
                                )}`}
                            >
                                <label
                                    className={`${clsx(
                                        styles.share_modal_button_actions,
                                        styles.share_modal_button_actions_disabled
                                    )}`}
                                >
                                    <IconButton
                                        color='primary'
                                        aria-label='upload picture'
                                        component='span'
                                        style={{ fontSize: '20px' }}
                                        disabled
                                    >
                                        <i className='fa-solid fa-briefcase'></i>
                                    </IconButton>
                                </label>
                            </li>
                            <li
                                className={`${clsx(
                                    styles.share_modal_bottom_actions_item
                                )}`}
                            >
                                <label
                                    className={`${clsx(
                                        styles.share_modal_button_actions,
                                        styles.share_modal_button_actions_disabled
                                    )}`}
                                >
                                    <IconButton
                                        color='success'
                                        aria-label='upload picture'
                                        component='span'
                                        style={{ fontSize: '20px' }}
                                        disabled
                                    >
                                        <i className='fa-solid fa-certificate'></i>
                                    </IconButton>
                                </label>
                            </li>
                            <li
                                className={`${clsx(
                                    styles.share_modal_bottom_actions_item
                                )}`}
                            >
                                <label
                                    className={`${clsx(
                                        styles.share_modal_button_actions,
                                        styles.share_modal_button_actions_disabled
                                    )}`}
                                >
                                    <IconButton
                                        color='error'
                                        aria-label='upload picture'
                                        component='span'
                                        style={{ fontSize: '20px' }}
                                        disabled
                                    >
                                        <i className='fa-solid fa-chart-simple'></i>
                                    </IconButton>
                                </label>
                            </li>
                            <Tooltip title='Icons' placement='top-start'>
                                <li
                                    className={`${clsx(
                                        styles.share_modal_bottom_actions_item,
                                        styles.share_modal_bottom_actions_item_emoji
                                    )}`}
                                >
                                    <label
                                        className={`${clsx(
                                            styles.share_modal_button_actions
                                        )}`}
                                        onClick={() =>
                                            dispatch(
                                                shareContents.handleToggleEmoji()
                                            )
                                        }
                                    >
                                        <IconButton
                                            color='secondary'
                                            aria-label='upload picture'
                                            component='span'
                                            style={{ fontSize: '20px' }}
                                        >
                                            <i className='fa-solid fa-face-smile'></i>{' '}
                                        </IconButton>
                                    </label>
                                </li>
                            </Tooltip>
                            <li
                                className={`${clsx(
                                    styles.share_modal_bottom_actions_item,
                                    styles.share_modal_bottom_actions_item_divider
                                )}`}
                            >
                                <button
                                    onClick={handleButtonAnyoneShareClick}
                                    className={`${clsx(
                                        styles.share_modal_bottom_actions_item_button_custom
                                    )} flex_center`}
                                >
                                    <span className='mr-2'>
                                        <i className='fa-solid fa-comment'></i>
                                    </span>{' '}
                                    {actionsShared.roleText}
                                </button>
                            </li>
                            <li
                                className={`${clsx(
                                    styles.share_modal_bottom_actions_item
                                )}`}
                            >
                                <button
                                    className={
                                        !actionsShared.content
                                            ? `${clsx(
                                                  styles.share_modal_bottom_button_post_disabled
                                              )}`
                                            : `${clsx(
                                                  styles.share_modal_bottom_button_post
                                              )}`
                                    }
                                    disabled={
                                        !actionsShared.content ? true : false
                                    }
                                >
                                    Post
                                </button>
                            </li>
                        </ul>
                    </div>
                    {/* EMOJI */}
                    {actionsShared.toggleEmoji && (
                        <div
                            className={`${clsx(styles.share_emoji_container)}`}
                        >
                            <Picker
                                onEmojiClick={(e, emojiObject) =>
                                    dispatch(
                                        shareContents.onEmojiClick({
                                            e,
                                            emojiObject,
                                        })
                                    )
                                }
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Share;
