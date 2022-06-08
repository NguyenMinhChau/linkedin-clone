import React from 'react';
import clsx from 'clsx';
import styles from './Content.module.css';
import { HomeContentLeft, HomeContentMiddle, HomeContentRight } from '../';

function HomeContent() {
    return (
        <div
            className={`${clsx(styles.home_content_container)} container-fluid`}
        >
            <div className={`${clsx(styles.home_content_row)} row`}>
                <HomeContentLeft />
                <HomeContentMiddle />
                <HomeContentRight />
            </div>
        </div>
    );
}

export default HomeContent;
