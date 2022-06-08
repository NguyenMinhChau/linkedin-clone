import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './Header.module.css';
import {
    RightHome,
    RightMyNetWork,
    RightJobs,
    RightMessaging,
    RightNotification,
    RightMe,
    RightWork,
} from '../';
import DropdownMe from '../Header/RightHeaderItems/DropdownMe';

function RightHeaderHome() {
    const [toogle, setToogle] = useState(false);
    const handleToogle = () => {
        setToogle(!toogle);
    };
    return (
        <>
            <div className='ml-auto'>
                <ul
                    className={`${clsx(styles.dropdown_me)} navbar-nav mr-auto`}
                >
                    <div
                        className={`${clsx(
                            styles.header_home_mobile
                        )} d-flex bg-light`}
                    >
                        <RightHome />
                        <RightMyNetWork />
                        <RightJobs />
                        <RightMessaging />
                        <RightNotification />
                        <RightMe toogle={toogle} handleToogle={handleToogle} />
                        <li className='nav-item'>
                            <div
                                className={`${clsx(
                                    styles.header_home_divider
                                )}`}
                            ></div>
                        </li>
                        <RightWork />
                    </div>
                    {toogle && <DropdownMe />}
                </ul>
            </div>
        </>
    );
}

export default RightHeaderHome;
