import React from 'react';
import clsx from 'clsx';
import Tooltip from '@mui/material/Tooltip';
import styles from './ContentMiddle.module.css';

function ListActionLike() {
    return (
        <ul className={`${clsx(styles.middle_post_list_action)}`}>
            <li className={`${clsx(styles.middle_post_item_action)}`}>
                <Tooltip title='Like' placement='top'>
                    <img
                        src='https://static-exp1.licdn.com/sc/h/b4vbnu63fjnrjyuqemaajt06l'
                        alt=''
                    />
                </Tooltip>
            </li>
            <li className={`${clsx(styles.middle_post_item_action)}`}>
                <Tooltip title='Celebrate' placement='top'>
                    <img
                        src='https://static-exp1.licdn.com/sc/h/528m9da0ski0hytdrx3o8vfau'
                        alt=''
                    />
                </Tooltip>
            </li>
            <li className={`${clsx(styles.middle_post_item_action)}`}>
                <Tooltip title='Support' placement='top'>
                    <img
                        src='https://static-exp1.licdn.com/sc/h/9zeq0nwqbbsfwwfuveskhr7sd'
                        alt=''
                    />
                </Tooltip>
            </li>
            <li className={`${clsx(styles.middle_post_item_action)}`}>
                <Tooltip title='Love' placement='top'>
                    <img
                        src='https://static-exp1.licdn.com/sc/h/e3j8tb0bp0xcj5dccu9od4ywf'
                        alt=''
                    />
                </Tooltip>
            </li>
            <li className={`${clsx(styles.middle_post_item_action)}`}>
                <Tooltip title='Insightful' placement='top'>
                    <img
                        src='https://static-exp1.licdn.com/sc/h/67zjrz4y0ylyvrzui6kbmnt8h'
                        alt=''
                    />
                </Tooltip>
            </li>
            <li className={`${clsx(styles.middle_post_item_action)}`}>
                <Tooltip title='Curious' placement='top'>
                    <img
                        src='https://static-exp1.licdn.com/sc/h/59jtqppi1naj2v8cmge0l5ut'
                        alt=''
                    />
                </Tooltip>
            </li>
        </ul>
    );
}

export default ListActionLike;
