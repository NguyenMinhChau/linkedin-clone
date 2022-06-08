import React from 'react';
import clsx from 'clsx';
import { Navigate } from 'react-router-dom';
import styles from './Main.module.css';
import MainRight from './MainRight';
import { useUserHook } from '../../getData';

function Main() {
    const user = useUserHook();
    return (
        <>
            {!user ? (
                <div
                    className={`${clsx(styles.main)} container-fluid mt-4 mb-4`}
                >
                    <div className={`${clsx(styles.main_container)} row`}>
                        <div
                            className={`${clsx(
                                styles.main_right_container
                            )} col-12 col-sm-6`}
                        >
                            <MainRight />
                        </div>
                        <div
                            className={`${clsx(
                                styles.main_bg_container
                            )} col-12 col-sm-6 flex_center`}
                        >
                            <div className={`${clsx(styles.main_bg)}`}></div>
                        </div>
                    </div>
                </div>
            ) : (
                <Navigate to='/home' />
            )}
        </>
    );
}

export default Main;
