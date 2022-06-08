import React, { useState } from 'react';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { shareContents } from '../../../../reducers';
import { useShareContentHook } from '../../../../getData';
import styles from './ContentMiddle.module.css';

function RolePost({ handleContainersRoleClick, handleContentsRoleClick }) {
    const actionsShare = useShareContentHook();
    const [role, setRole] = useState(actionsShare.roleId);
    const dispatch = useDispatch();
    const handleChange = (id) => {
        setRole(id);
    };
    const handleSaveRole = (e) => {
        e.stopPropagation();
        dispatch(shareContents.handleSetRoleId(role));
        dispatch(shareContents.handleChangeRole(role));
        dispatch(shareContents.handleContainersRoleClick());
    };
    return (
        <div
            className={`${clsx(styles.modal_bg)}`}
            onClick={handleContainersRoleClick}
        >
            <div
                className={`${clsx(styles.modal_contents)}`}
                onClick={handleContentsRoleClick}
            >
                <div className={`${clsx(styles.modal_top)}`}>
                    <h5 className='mb-3'>Who can see your post?</h5>
                    <span
                        className={`${clsx(styles.modal_close)}`}
                        onClick={handleContainersRoleClick}
                    >
                        <i className='fa-solid fa-times'></i>
                    </span>
                </div>
                <div className={`${clsx(styles.modal_middle)}`}>
                    <p>
                        Your post will be visible on feed, on your profile and
                        in search results
                    </p>
                    <div className={`${clsx(styles.role_post_middle_info)}`}>
                        <span className='mr-2'>
                            <i className='fa-solid fa-circle-info'></i>
                        </span>
                        <span>Your selection will be saved</span>
                    </div>
                    <ul className={`${clsx(styles.role_post_middle_lists)}`}>
                        <li
                            className={`${clsx(styles.role_post_middle_item)}`}
                            onClick={() => handleChange('anyone')}
                        >
                            <label
                                htmlFor='anyone'
                                className={`${clsx(
                                    styles.role_post_middle_item_label
                                )}`}
                            >
                                <div
                                    className={`${clsx(
                                        styles.role_post_middle_item_text
                                    )}`}
                                >
                                    <span
                                        className={`${clsx(
                                            styles.role_post_middle_item_text_icon
                                        )} mr-4`}
                                    >
                                        <i className='fa-solid fa-earth-americas'></i>
                                    </span>
                                    <div
                                        className={`${clsx(
                                            styles.role_post_middle_item_text_child
                                        )}`}
                                    >
                                        <span
                                            className={`${clsx(
                                                styles.role_post_middle_item_text_child_1
                                            )} text_bold`}
                                        >
                                            Anyone
                                        </span>
                                        <span
                                            className={`${clsx(
                                                styles.role_post_middle_item_text_child_2
                                            )}`}
                                        >
                                            Anyone on or off Linkedin
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className={`${clsx(
                                        styles.role_post_middle_item_check
                                    )}`}
                                >
                                    <input
                                        type='radio'
                                        id='anyone'
                                        name='role'
                                        className={`${clsx(
                                            styles.role_post_middle_item_check_input
                                        )}`}
                                        style={{ fontSize: '30px' }}
                                        checked={role === 'anyone'}
                                    />
                                </div>
                            </label>
                        </li>
                        <li
                            className={`${clsx(styles.role_post_middle_item)}`}
                            onClick={() => handleChange('anyoneandtwitter')}
                        >
                            <label
                                htmlFor='anyoneandtwitter'
                                className={`${clsx(
                                    styles.role_post_middle_item_label
                                )}`}
                            >
                                <div
                                    className={`${clsx(
                                        styles.role_post_middle_item_text
                                    )}`}
                                >
                                    <span
                                        className={`${clsx(
                                            styles.role_post_middle_item_text_icon
                                        )} mr-4`}
                                    >
                                        <i className='fa-solid fa-earth-americas'></i>
                                    </span>
                                    <div
                                        className={`${clsx(
                                            styles.role_post_middle_item_text_child
                                        )}`}
                                    >
                                        <span
                                            className={`${clsx(
                                                styles.role_post_middle_item_text_child_1
                                            )} text_bold`}
                                        >
                                            Anyone + Twitter
                                        </span>
                                        <span
                                            className={`${clsx(
                                                styles.role_post_middle_item_text_child_2
                                            )}`}
                                        >
                                            Only the first 255 charactors will
                                            be shared to Twitter
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className={`${clsx(
                                        styles.role_post_middle_item_check
                                    )}`}
                                >
                                    <input
                                        type='radio'
                                        id='anyoneandtwitter'
                                        name='role'
                                        className={`${clsx(
                                            styles.role_post_middle_item_check_input
                                        )}`}
                                        checked={role === 'anyoneandtwitter'}
                                    />
                                </div>
                            </label>
                        </li>
                        <li
                            className={`${clsx(styles.role_post_middle_item)}`}
                            onClick={() => handleChange('connectiononlinkedin')}
                        >
                            <label
                                htmlFor='connectiononlinkedin'
                                className={`${clsx(
                                    styles.role_post_middle_item_label
                                )}`}
                            >
                                <div
                                    className={`${clsx(
                                        styles.role_post_middle_item_text
                                    )}`}
                                >
                                    <span
                                        className={`${clsx(
                                            styles.role_post_middle_item_text_icon
                                        )} mr-4`}
                                    >
                                        <i className='fa-solid fa-users'></i>
                                    </span>
                                    <div
                                        className={`${clsx(
                                            styles.role_post_middle_item_text_child
                                        )}`}
                                    >
                                        <span
                                            className={`${clsx(
                                                styles.role_post_middle_item_text_child_1
                                            )} text_bold`}
                                        >
                                            Connections only
                                        </span>
                                        <span
                                            className={`${clsx(
                                                styles.role_post_middle_item_text_child_2
                                            )}`}
                                        >
                                            Connections on Linkedin
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className={`${clsx(
                                        styles.role_post_middle_item_check
                                    )}`}
                                >
                                    <input
                                        type='radio'
                                        id='connectiononlinkedin'
                                        name='role'
                                        className={`${clsx(
                                            styles.role_post_middle_item_check_input
                                        )}`}
                                        checked={
                                            role === 'connectiononlinkedin'
                                        }
                                    />
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
                <div
                    className={`${clsx(
                        styles.modal_bottom,
                        styles.role_post_bottom
                    )}`}
                >
                    <button
                        onClick={handleContainersRoleClick}
                        className={`${clsx(styles.bottom_button_custom)} mr-2`}
                    >
                        Back
                    </button>
                    <button
                        onClick={handleSaveRole}
                        className={`${clsx(styles.bottom_button_custom)}`}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RolePost;
