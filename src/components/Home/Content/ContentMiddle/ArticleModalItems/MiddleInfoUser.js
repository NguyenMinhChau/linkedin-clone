import React from 'react';
import clsx from 'clsx';
import styles from '../ContentMiddle.module.css';

function MiddleInfoUser({ user, userName }) {
    return (
        <div className={`${clsx(styles.share_modal_middle_info_use)}`}>
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
                <h5 className={`${clsx(styles.share_modal_middle_info_name)}`}>
                    {userName ? userName : 'Linkedin'}
                </h5>
                <button>
                    <span
                        className={`${clsx(
                            styles.share_modal_middle_info_earth
                        )}`}
                    >
                        <i className='fa-solid fa-earth-africa'></i>
                    </span>
                    <span>Anyone</span>
                    <span
                        className={`${clsx(
                            styles.share_modal_middle_info_arrow
                        )}`}
                    >
                        <i className='fa-solid fa-angle-down'></i>
                    </span>
                </button>
            </div>
        </div>
    );
}

export default MiddleInfoUser;
