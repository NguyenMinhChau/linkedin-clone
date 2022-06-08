/* eslint-disable no-useless-concat */
import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './RightHeaderItems.module.css';
import { getData } from '../../../';

function RightMe({ toogle, handleToogle }) {
    const user = getData.useUserHook();
    return (
        <li
            className={`${clsx(styles.right_me_dropdown)} nav-item`}
            onClick={handleToogle}
        >
            <Link className='nav-link' to='#'>
                <div
                    className={`${clsx(
                        styles.header_home_right_item
                    )} flex_center flex_column header_home_right_item_custom`}
                >
                    <img
                        onError={(e) => (e.target.src = '/icons8-linkedin.svg')}
                        className={`${clsx(
                            styles.header_home_right_item_avatar
                        )}`}
                        src={user.photoURL ? user.photoURL : ''}
                        alt=''
                        style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                        }}
                    />
                    <div
                        className={`${clsx(
                            styles.header_home_right_item_text
                        )} flex_row`}
                    >
                        <span className='mr-1'>Me</span>{' '}
                        <span>
                            <i className='fa-solid fa-caret-down'></i>
                        </span>
                    </div>
                </div>
            </Link>
        </li>
    );
}

export default RightMe;
