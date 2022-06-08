import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './ContentLeft.module.css';

function LeftContentBottom() {
    return (
        <div className={`${clsx(styles.home_content_left_community_card)}`}>
            <Link to='/'>
                <span>Groups</span>
            </Link>
            <Link to='/'>
                <span>
                    Events
                    <span
                        className={`${clsx(
                            styles.content_left_bottom_plus_icon
                        )}`}
                    >
                        <img src='/image/plus-icon.svg' alt='' />
                    </span>
                </span>
            </Link>
            <Link to='/'>
                <span>Follow Hashtags</span>
            </Link>
            <Link to='/'>
                <span>Discover more</span>
            </Link>
        </div>
    );
}

export default LeftContentBottom;
