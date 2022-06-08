import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './RightHeaderItems.module.css';
import ModalWork from './ModalWork';

function RightWork() {
    const [toogle, setToogle] = useState(false);
    const handelToogle = (e) => {
        e.stopPropagation();
        setToogle(!toogle);
    };
    const handleModalContent = (e) => {
        e.stopPropagation();
        setToogle(true);
    };
    return (
        <>
            <li
                className={`${clsx(styles.right_work_dropdown)} workLi`}
                onClick={handelToogle}
            >
                <Link className='nav-link' to='#'>
                    <div
                        className={`${clsx(
                            styles.header_home_right_item
                        )} flex_center flex_column header_home_right_item_custom`}
                    >
                        <div
                            className={`${clsx(
                                styles.header_home_right_item_icon
                            )}`}
                        >
                            <i className='fa-solid fa-list'></i>
                        </div>
                        <div
                            className={`${clsx(
                                styles.header_home_right_item_text
                            )} flex_row`}
                        >
                            <span className='mr-1'>Work</span>{' '}
                            <span>
                                <i className='fa-solid fa-caret-down'></i>
                            </span>
                        </div>
                    </div>
                </Link>
            </li>
            {toogle && (
                <ModalWork
                    handelToogle={handelToogle}
                    handleModalContent={handleModalContent}
                />
            )}
        </>
    );
}

export default RightWork;
