import React from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import styles from './ContentMiddle.module.css';
import { usePhotoContentHook } from '../../../../getData';
import { articleContents, photos } from '../../../../reducers';

function PhotoModal({ handleContainersPhotoClick, handleContentPhotoClick }) {
    const dispatch = useDispatch();
    const actionsPhoto = usePhotoContentHook();
    const handleButtonDonePhotoClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const image = actionsPhoto.images;
        dispatch(articleContents.handleChangeImages(image));
        dispatch(photos.handleTooglePhoto());
        dispatch(articleContents.handleToogleArticle());
        dispatch(photos.resetImagePhoto([]));
    };
    return (
        <div
            className={`${clsx(styles.modal_bg)}`}
            onClick={handleContainersPhotoClick}
        >
            <div
                className={`${clsx(styles.modal_contents)}`}
                onClick={handleContentPhotoClick}
            >
                <div className={`${clsx(styles.modal_top)}`}>
                    <h5 className='mb-3'>Edit your photo</h5>
                    <span
                        className={`${clsx(styles.modal_close)}`}
                        onClick={handleContainersPhotoClick}
                    >
                        <i className='fa-solid fa-times'></i>
                    </span>
                </div>
                <div className={`${clsx(styles.modal_middle)} text-center`}>
                    <label
                        htmlFor='photo-file'
                        className={`${clsx(styles.share_modal_button_actions)}`}
                    >
                        <input
                            type='file'
                            accept='image/*'
                            id='photo-file'
                            style={{ display: 'none' }}
                            onChange={(e) =>
                                dispatch(
                                    photos.handleChangePhoto(e.target.files[0])
                                )
                            }
                        />
                        <div
                            className={`${clsx(
                                styles.photo_modal_text
                            )} text-center`}
                        >
                            <p>Select images to share</p>
                        </div>
                    </label>
                    <div
                        className={`${clsx(
                            styles.photo_modal_image_single_container
                        )}`}
                    >
                        {(actionsPhoto.images || []).map((url, index) => (
                            <div
                                className={`${clsx(
                                    styles.photo_modal_image_single_item
                                )}`}
                                key={index}
                            >
                                <img
                                    onError={(e) => {
                                        e.target.src = '/image/no_image1.png';
                                    }}
                                    src={URL.createObjectURL(url)}
                                    alt=''
                                    className={`${clsx(
                                        styles.photo_modal_image_single
                                    )}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                {actionsPhoto.images.length > 0 && (
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
                        onClick={handleContainersPhotoClick}
                        className={`${clsx(styles.bottom_button_custom)} mr-2`}
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleButtonDonePhotoClick}
                        className={
                            actionsPhoto.images.length === 0
                                ? `${clsx(styles.bottom_button_custom_disable)}`
                                : `${clsx(styles.bottom_button_custom)}`
                        }
                        disabled={actionsPhoto.images.length === 0}
                    >
                        Done
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PhotoModal;
