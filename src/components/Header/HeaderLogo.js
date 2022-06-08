import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Header.module.css';

function HeaderLogo() {
    return (
        <Link className='navbar-brand' to='/home'>
            <div className={`${clsx(styles.header_logo_login)}`}></div>
        </Link>
    );
}

export default HeaderLogo;
