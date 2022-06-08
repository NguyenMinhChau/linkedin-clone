import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Home.module.css';

function HomeHiring() {
    return (
        <div className={`${clsx(styles.home_text_container)} flex_center`}>
            <p className={`${clsx(styles.home_text)} text_underline text_bold`}>
                <Link to='/hiring-in-a-hunrry'>Hiring in a hunrry?</Link> - Find
                talented pros in record time with Upwork and keep business
                moving.
            </p>
        </div>
    );
}

export default HomeHiring;
