import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import HeaderLogo from './HeaderLogo';
import HeaderToogle from './HeaderToogle';

function Header() {
    return (
        <div className={`${clsx(styles.header)}`}>
            <nav className='navbar navbar-expand-lg navbar-light bg-light d-flex'>
                <HeaderLogo />
                <HeaderToogle />

                <div
                    className={`${clsx(styles.header_right)} collapse navbar-collapse`}
                    id='navbarSupportedContent'
                >
                    <div className='my-2 my-lg-0 ml-auto d-flex align-items-center'>
                        <Link
                            className={`${clsx(
                                styles.header_group
                            )} mr-2 text_bold flex_center flex-column ml-3`}
                            to='/discover'
                        >
                            <span>
                                <i className='fa-solid fa-compass'></i>
                            </span>{' '}
                            <span>Discover</span>
                        </Link>
                        <Link
                            className={`${clsx(
                                styles.header_group
                            )} mr-2 text_bold flex_center flex-column ml-3`}
                            to='/people'
                        >
                            <span>
                                <i className='fa-solid fa-users'></i>
                            </span>{' '}
                            <span>People</span>
                        </Link>
                        <Link
                            className={`${clsx(
                                styles.header_group
                            )} mr-2 text_bold flex_center flex-column ml-3`}
                            to='/learning'
                        >
                            <span>
                                <i className='fa-solid fa-chalkboard'></i>
                            </span>{' '}
                            <span>Learning</span>
                        </Link>
                        <Link
                            className={`${clsx(
                                styles.header_group
                            )} mr-3 text_bold flex_center flex-column ml-3`}
                            to='/jobs'
                        >
                            <span>
                                <i className='fa-solid fa-briefcase'></i>
                            </span>{' '}
                            <span>Jobs</span>
                        </Link>

                        <Link
                            className={`${clsx(
                                styles.header_join_now
                            )} mr-1 text_bold`}
                            to='/join-now'
                        >
                            Join now
                            <div
                                className={`${clsx(styles.header_divider)}`}
                            ></div>
                        </Link>
                        <Link
                            className={`${clsx(
                                styles.header_signin
                            )} text_bold`}
                            to='/signin'
                        >
                            Sign in
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
