/* eslint-disable no-useless-concat */
import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import RightHeaderHome from './RightHeaderHome';
import LeftHeaderHome from './LeftHeaderHome';
import { useUserHook } from '../../../getData';
import styles from './Header.module.css';

function HeaderHome() {
    const user = useUserHook();
    return (
        <div className={`${clsx(styles.header_home)}`}>
            <nav className='navbar navbar-expand-lg navbar-light bg-light d-flex'>
                <Link className='navbar-brand' to='/home'>
                    <div
                        className={`${clsx(styles.header_home_logo)}`}
                        style={{
                            backgroundImage:
                                'url(' + `/icons8-linkedin.svg` + ')',
                        }}
                    ></div>
                </Link>
                <LeftHeaderHome />
                {user && <RightHeaderHome />}
            </nav>
        </div>
    );
}

export default HeaderHome;
