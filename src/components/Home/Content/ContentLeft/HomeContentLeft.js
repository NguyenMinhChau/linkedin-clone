/* eslint-disable no-useless-concat */
import React from 'react';
import clsx from 'clsx';
import LeftContentTop from './LeftContentTop';
import LeftContentBottom from './LeftContentBottom';
import styles from './ContentLeft.module.css';
import { getData } from '../../../';

function HomeContentLeft() {
    const user = getData.useUserHook();
    return (
        <div
            className={`${clsx(
                styles.home_content_col_left
            )} col col-sm-12 col-md-12 col-12 col-lg-3`}
        >
            <LeftContentTop user={user} />
            <LeftContentBottom />
        </div>
    );
}

export default HomeContentLeft;
