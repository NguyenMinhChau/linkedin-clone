import React from 'react';
import clsx from 'clsx';
import styles from './Header.module.css';

function LeftListSearch() {
    return (
        <ul className={`${clsx(styles.header_left_list_search)}`}>
            <p className='ml-3'>Try searching for</p>
            <li className={`${clsx(styles.header_left_item_search)}`}>
                <span className={`${clsx(styles.item_icon)} mr-4 ml-3`}>
                    <i className='fa-solid fa-magnifying-glass'></i>
                </span>
                <p className={`${clsx(styles.item_text)} margin-0 text_bold`}>
                    #hiring
                </p>
            </li>
            <li className={`${clsx(styles.header_left_item_search)}`}>
                <span className={`${clsx(styles.item_icon)} mr-4 ml-3`}>
                    <i className='fa-solid fa-magnifying-glass'></i>
                </span>
                <p className={`${clsx(styles.item_text)} margin-0 text_bold`}>
                    #jobs
                </p>
            </li>
            <li className={`${clsx(styles.header_left_item_search)}`}>
                <span className={`${clsx(styles.item_icon)} mr-4 ml-3`}>
                    <i className='fa-solid fa-magnifying-glass'></i>
                </span>
                <p className={`${clsx(styles.item_text)} margin-0 text_bold`}>
                    #frontend developer
                </p>
            </li>
            <li className={`${clsx(styles.header_left_item_search)}`}>
                <span className={`${clsx(styles.item_icon)} mr-4 ml-3`}>
                    <i className='fa-solid fa-magnifying-glass'></i>
                </span>
                <p className={`${clsx(styles.item_text)} margin-0 text_bold`}>
                    #reactjs
                </p>
            </li>
            <li className={`${clsx(styles.header_left_item_search)}`}>
                <span className={`${clsx(styles.item_icon)} mr-4 ml-3`}>
                    <i className='fa-solid fa-magnifying-glass'></i>
                </span>
                <p className={`${clsx(styles.item_text)} margin-0 text_bold`}>
                    #angular
                </p>
            </li>
        </ul>
    );
}

export default LeftListSearch;
