import React from 'react';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './Main.module.css';
import { signinAPI } from '../../actions';

function MainRight() {
    const dispatch = useDispatch();
    const history = useNavigate();
    return (
        <>
            <p className={`${clsx(styles.main_text)}`}>
                Welcome to your professional community
            </p>
            <button
                className={`${clsx(styles.btn_signin_gg)} flex_center`}
                onClick={() => signinAPI(dispatch, history)}
            >
                <div
                    className={`${clsx(styles.btn_signin_gg_icon)} mr-2`}
                ></div>{' '}
                <span>Sign in with Google</span>
            </button>
        </>
    );
}

export default MainRight;
