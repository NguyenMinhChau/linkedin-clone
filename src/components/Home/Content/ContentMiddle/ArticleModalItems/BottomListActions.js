import React from 'react';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { IconButton } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import { useArticleContentHook } from '../../../../../getData';
import { articleContents } from '../../../../../reducers';
import styles from '../ContentMiddle.module.css';

function BottomListActions({ refVideoLink, postArticle }) {
    const dispatch = useDispatch();
    const actionsArticleContent = useArticleContentHook();
    return (
        <ul className={`${clsx(styles.share_modal_bottom_actions_lists)} mt-2`}>
            <Tooltip title='Add photos' placement='top-start'>
                <li
                    className={`${clsx(
                        styles.share_modal_bottom_actions_item
                    )}`}
                >
                    <label
                        htmlFor='article-file'
                        className={`${clsx(styles.share_modal_button_actions)}`}
                    >
                        <input
                            accept='image/*'
                            id='article-file'
                            type='file'
                            name='images'
                            style={{ display: 'none' }}
                            onChange={(e) =>
                                dispatch(
                                    articleContents.handleChangeImages(
                                        e.target.files
                                    )
                                )
                            }
                            multiple
                        />
                        <IconButton
                            color='success'
                            aria-label='upload picture'
                            component='span'
                            style={{ fontSize: '20px' }}
                        >
                            <i className='fa-solid fa-images'></i>
                        </IconButton>
                    </label>
                </li>
            </Tooltip>
            <Tooltip title='Add videos' placement='top-start'>
                <li
                    className={`${clsx(
                        styles.share_modal_bottom_actions_item
                    )}`}
                >
                    <label
                        className={`${clsx(styles.share_modal_button_actions)}`}
                        htmlFor='videoLinks'
                    >
                        <IconButton
                            color='secondary'
                            aria-label='upload picture'
                            component='span'
                            style={{ fontSize: '20px' }}
                        >
                            <i className='fa-solid fa-video'></i>
                        </IconButton>
                    </label>
                </li>
            </Tooltip>
            <Tooltip title='Add link video' placement='top-start'>
                <li
                    className={`${clsx(
                        styles.share_modal_bottom_actions_item
                    )}`}
                >
                    <label
                        className={`${clsx(styles.share_modal_button_actions)}`}
                        onClick={async () => {
                            await dispatch(
                                articleContents.handleToogleVideoLink()
                            );
                            refVideoLink.current.focus();
                        }}
                    >
                        <IconButton
                            color='error'
                            aria-label='upload picture'
                            component='span'
                            style={{ fontSize: '20px' }}
                        >
                            <i className='fa-brands fa-youtube'></i>
                        </IconButton>
                    </label>
                </li>
            </Tooltip>
            <Tooltip title="Share that you're hiring" placement='top-start'>
                <li
                    className={`${clsx(
                        styles.share_modal_bottom_actions_item,
                        styles.share_modal_button_actions_disabled
                    )}`}
                >
                    <label
                        className={`${clsx(styles.share_modal_button_actions)}`}
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
            </Tooltip>
            <Tooltip title='Celebrate on occasion' placement='top-start'>
                <li
                    className={`${clsx(
                        styles.share_modal_bottom_actions_item,
                        styles.share_modal_button_actions_disabled
                    )}`}
                >
                    <label
                        className={`${clsx(styles.share_modal_button_actions)}`}
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
            </Tooltip>
            <Tooltip title='Create a poll' placement='top-start'>
                <li
                    className={`${clsx(
                        styles.share_modal_bottom_actions_item,
                        styles.share_modal_button_actions_disabled
                    )}`}
                >
                    <label
                        className={`${clsx(styles.share_modal_button_actions)}`}
                    >
                        <IconButton
                            color='secondary'
                            aria-label='upload picture'
                            component='span'
                            style={{ fontSize: '20px' }}
                            disabled
                        >
                            <i className='fa-solid fa-chart-simple'></i>
                        </IconButton>
                    </label>
                </li>
            </Tooltip>
            <Tooltip title='Icons' placement='top-start'>
                <li
                    className={`${clsx(
                        styles.share_modal_bottom_actions_item,
                        styles.share_modal_bottom_actions_item_emoji
                    )}`}
                >
                    <label
                        className={`${clsx(styles.share_modal_button_actions)}`}
                        onClick={() =>
                            dispatch(articleContents.handleToggleEmoji())
                        }
                    >
                        <IconButton
                            color='error'
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
                    className={`${clsx(
                        styles.share_modal_bottom_actions_item_button_custom
                    )} flex_center`}
                >
                    <span className='mr-2'>
                        <i className='fa-solid fa-comment'></i>
                    </span>{' '}
                    Anyone
                </button>
            </li>
            <li className={`${clsx(styles.share_modal_bottom_actions_item)}`}>
                <button
                    onClick={postArticle}
                    className={
                        !actionsArticleContent.content
                            ? `${clsx(
                                  styles.share_modal_bottom_button_post_disabled
                              )}`
                            : `${clsx(styles.share_modal_bottom_button_post)}`
                    }
                    disabled={!actionsArticleContent.content ? true : false}
                >
                    Post
                </button>
            </li>
        </ul>
    );
}

export default BottomListActions;
