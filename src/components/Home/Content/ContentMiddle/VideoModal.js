import React from 'react';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { useVideoContentHook } from '../../../../getData';
import { articleContents, videos } from '../../../../reducers';
import styles from './ContentMiddle.module.css';
import ReactPlayer from 'react-player';

function VideoModal({ handleContainersVideoClick, handleContentVideoClick }) {
    const dispatch = useDispatch();
    const actionsVideo = useVideoContentHook();
    const handleButtonDoneVideoClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const videoLink = [actionsVideo.videoFile[0]];
        dispatch(articleContents.handleChangeVideoLinks(videoLink));
        dispatch(videos.handleToogleVideo());
        dispatch(articleContents.handleToogleArticle());
        dispatch(videos.resetVideoFile([]));
    };
    return (
        <div
            className={`${clsx(styles.modal_bg)}`}
            onClick={handleContainersVideoClick}
        >
            <div
                className={`${clsx(styles.modal_contents)}`}
                onClick={handleContentVideoClick}
            >
                <div className={`${clsx(styles.modal_top)}`}>
                    <h5 className='mb-3'>Select/Edit your video</h5>
                    <span
                        className={`${clsx(styles.modal_close)}`}
                        onClick={handleContainersVideoClick}
                    >
                        <i className='fa-solid fa-times'></i>
                    </span>
                </div>
                <div className={`${clsx(styles.modal_middle)} text-center`}>
                    <label
                        htmlFor='video-file'
                        className={`${clsx(styles.share_modal_button_actions)}`}
                    >
                        <input
                            type='file'
                            accept='video/*'
                            id='video-file'
                            style={{ display: 'none' }}
                            onChange={(e) =>
                                dispatch(
                                    videos.handleChangeVideoFile(
                                        e.target.files[0]
                                    )
                                )
                            }
                        />
                        <div className={`${clsx(styles.photo_modal_text)}`}>
                            <p>Select video to share</p>
                        </div>
                    </label>
                    <div
                        className={`${clsx(
                            styles.photo_modal_image_single_container
                        )}`}
                    >
                        {(actionsVideo.videoFile || []).map((item, index) => (
                            <div
                                className={`${clsx(
                                    styles.photo_modal_image_single_item
                                )}`}
                                key={index}
                            >
                                <ReactPlayer
                                    url={URL.createObjectURL(item)}
                                    width={'100%'}
                                    className={`${clsx(
                                        styles.photo_modal_image_single
                                    )}`}
                                    controls={true}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                {actionsVideo.videoFile.length > 0 && (
                    <div
                        className={`${clsx(styles.photo_modal_editor_actions)}`}
                    >
                        <ul
                            className={`${clsx(
                                styles.photo_modal_editor_action_container
                            )}`}
                        >
                            <li
                                className={`${clsx(
                                    styles.photo_modal_editor_action_item
                                )}`}
                            >
                                Edit
                            </li>
                            <li
                                className={`${clsx(
                                    styles.photo_modal_editor_action_item
                                )}`}
                            >
                                Tag
                            </li>
                            <li
                                className={`${clsx(
                                    styles.photo_modal_editor_action_item
                                )}`}
                            >
                                Alt. Text
                            </li>
                        </ul>
                    </div>
                )}
                <div
                    className={`${clsx(
                        styles.modal_bottom,
                        styles.role_post_bottom
                    )}`}
                >
                    <button
                        onClick={handleContainersVideoClick}
                        className={`${clsx(styles.bottom_button_custom)} mr-2`}
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleButtonDoneVideoClick}
                        className={
                            actionsVideo.videoFile.length === 0
                                ? `${clsx(styles.bottom_button_custom_disable)}`
                                : `${clsx(styles.bottom_button_custom)}`
                        }
                        disabled={actionsVideo.videoFile.length === 0}
                    >
                        Done
                    </button>
                </div>
            </div>
        </div>
    );
}

export default VideoModal;
