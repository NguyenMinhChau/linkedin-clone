import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './RightHeaderItems.module.css';

function RightJobs() {
    return (
        <li className='nav-item'>
            <Link className='nav-link' to='/jobs'>
                <div
                    className={`${clsx(
                        styles.header_home_right_item
                    )} flex_center flex_column header_home_right_item_custom`}
                >
                    <div
                        className={`${clsx(
                            styles.header_home_right_item_icon
                        )}`}
                    >
                        <i className='fa-solid fa-briefcase'></i>
                    </div>
                    <div
                        className={`${clsx(
                            styles.header_home_right_item_text
                        )}`}
                    >
                        Jobs
                    </div>
                </div>
            </Link>
        </li>
    );
}

export default RightJobs;
