/* eslint-disable no-useless-concat */
import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './ContentLeft.module.css';

function LeftContentTop({ user }) {
    return (
        <div className={`${clsx(styles.home_content_left_art_card)}`}>
            <div className={`${clsx(styles.home_content_left_user_info)}`}>
                <div
                    className={`${clsx(styles.home_content_left_card_bg)}`}
                    style={{
                        backgroundImage: 'url(' + `./image/card-bg.svg` + ')',
                    }}
                ></div>
                <img
                    onError={(e) => (e.target.src = '/icons8-linkedin.svg')}
                    src={user.photoURL ? user.photoURL : ''}
                    title={user.displayName ? user.displayName : ''}
                    alt=''
                    className={`${clsx(styles.home_content_left_card_photo)}`}
                ></img>
                <div className={`${clsx(styles.home_content_left_card_link)}`}>
                    {user.displayName ? user.displayName : 'Linkedin'}
                </div>
                <p className={`${clsx(styles.home_content_left_description)}`}>
                    ___👨‍💻___
                </p>
            </div>
            <div className={`${clsx(styles.home_content_left_card_widget)}`}>
                <Link
                    to='/'
                    className={`${clsx(styles.home_content_left_widget_link)}`}
                >
                    <div
                        className={`${clsx(
                            styles.home_content_left_widget_text
                        )}`}
                    >
                        <span>Connections</span>
                        <span>Grow your network</span>
                    </div>
                    <span className={`${clsx(styles.viewed_quantity)}`}>
                        81
                    </span>
                    {/* <img src='/image/widget-icon.svg' alt='' /> */}
                </Link>
                <Link
                    to='/'
                    className={`${clsx(styles.home_content_left_widget_link)}`}
                >
                    <div
                        className={`${clsx(
                            styles.home_content_left_widget_text
                        )}`}
                    >
                        <span>Who viewed your profile</span>
                    </div>
                    <span className={`${clsx(styles.viewed_quantity)}`}>
                        71
                    </span>
                </Link>
            </div>
            <div className={`${clsx(styles.home_content_left_card_widget)}`}>
                <Link
                    to='/'
                    className={`${clsx(styles.home_content_left_premium)}`}
                >
                    <span
                        className={`${clsx(
                            styles.home_content_left_premium_description
                        )}`}
                    >
                        Access exclussive tools and insights
                    </span>
                    <span
                        className={`${clsx(
                            styles.home_content_left_premium_text
                        )} text_bold`}
                    >
                        Try premium for free
                    </span>
                </Link>
            </div>
            <Link
                to='/'
                className={`${clsx(styles.home_content_left_card_item)}`}
            >
                <span>
                    <img src='/image/item-icon.svg' alt='' className='mr-2' />{' '}
                    My items
                </span>
            </Link>
        </div>
    );
}

export default LeftContentTop;
