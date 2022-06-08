import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './RightHeaderItems.module.css';

function RightHome() {
    return (
        <li className='nav-item active'>
            <Link className='nav-link' to='/home'>
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
                        <i className='fa-solid fa-house'></i>
                    </div>
                    <div
                        className={`${clsx(
                            styles.header_home_right_item_text
                        )}`}
                    >
                        Home
                    </div>
                </div>
            </Link>
        </li>
    );
}

export default RightHome;
