import React from 'react';
import clsx from 'clsx';
import styles from './Header.module.css';
import LeftListSearch from './LeftListSearch';

function LeftHeaderHome() {
    return (
        <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
                <form
                    className={`${clsx(
                        styles.header_left_form_container
                    )} form-inline my-2 my-lg-0 ps_relative`}
                >
                    <input
                        className={`${clsx(
                            styles.header_left_input_search
                        )} form-control mr-sm-2`}
                        style={{ paddingLeft: '46px' }}
                        type='search'
                        placeholder='Search'
                        aria-label='Search'
                    />
                    <span className={`${clsx(styles.header_home_icon_search)}`}>
                        <i className='fa-solid fa-magnifying-glass'></i>
                    </span>
                    <LeftListSearch />
                </form>
            </li>
        </ul>
    );
}

export default LeftHeaderHome;
