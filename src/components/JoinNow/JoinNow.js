import React, { useState, useRef } from 'react';
import clsx from 'clsx';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from './JoinNow.module.css';
import { signinAPI } from '../../actions';
import JoinNowFooter from './JoinNowFooter';
import { useJoinNowHook } from '../../getData';
import { joinnows, users } from '../../reducers';
import JoinNowForm from './JoinNowForm';
import SigninForm from './SigninForm';

function JoinNow() {
    const dispatch = useDispatch();
    const history = useNavigate();
    const actionsJoinnow = useJoinNowHook();
    const [error, setError] = useState('');
    const [progress, setProgress] = useState(0);
    const refEmailSignin = useRef();
    const refPasswordSignin = useRef();
    const refEmailJoinnow = useRef();
    const refPasswordJoinnow = useRef();
    const refDisplayNameJoinnow = useRef();
    const refphotoURLJoinnow = useRef();
    const handleShowHidePassword = () => {
        if (actionsJoinnow.showPassword) {
            // xu ly show pass
            dispatch(joinnows.handleShowPassword());
            if (refPasswordSignin.current) {
                refPasswordSignin.current.type = 'password';
            } else if (refPasswordJoinnow.current) {
                refPasswordJoinnow.current.type = 'password';
            }
        } else {
            // xu ly hide pass
            dispatch(joinnows.handleShowPassword());
            if (refPasswordSignin.current) {
                refPasswordSignin.current.type = 'text';
            } else if (refPasswordJoinnow.current) {
                refPasswordJoinnow.current.type = 'text';
            }
        }
    };
    return (
        <>
            <div className={`${clsx(styles.join_now)}`}>
                <Link to='/home' className={`${clsx(styles.join_now_logo)}`}>
                    <img src='/image/login-logo.svg' alt='' />
                </Link>
                <div
                    className={`${clsx(
                        styles.join_now_form_container
                    )} flex_center flex-column mt-4 w-100`}
                >
                    <h2 className='text_center mb-3'>
                        Make the most of your professional life
                    </h2>
                    <div className={`${clsx(styles.join_now_form)}`}>
                        {/* JOIN NOW */}
                        <JoinNowForm
                            progress={progress}
                            setProgress={setProgress}
                            error={error}
                            setError={setError}
                            refDisplayNameJoinnow={refDisplayNameJoinnow}
                            refEmailJoinnow={refEmailJoinnow}
                            refPasswordJoinnow={refPasswordJoinnow}
                            handleShowHidePassword={handleShowHidePassword}
                            refphotoURLJoinnow={refphotoURLJoinnow}
                        />
                        {/* SIGN IN */}
                        <SigninForm
                            error={error}
                            setError={setError}
                            refEmailSignin={refEmailSignin}
                            refPasswordSignin={refPasswordSignin}
                            handleShowHidePassword={handleShowHidePassword}
                            users={users}
                        />
                        <div className={`${clsx(styles.join_now_divider)}`}>
                            <span className={`${clsx(styles.join_now_or)}`}>
                                or
                            </span>
                        </div>
                        {actionsJoinnow.toogleJoinnow && (
                            <button
                                className={`${clsx(
                                    styles.join_now_button_join,
                                    styles.join_now_button_join_google
                                )} mt-4`}
                                onClick={() => {
                                    dispatch(joinnows.handleOpenEmailSignin());
                                    setError('');
                                }}
                            >
                                <span>
                                    <img
                                        src='https://img.icons8.com/external-nawicon-detailed-outline-nawicon/64/undefined/external-email-communication-nawicon-detailed-outline-nawicon.png'
                                        alt=''
                                    />
                                </span>{' '}
                                <span>Tiếp tục với email</span>
                            </button>
                        )}
                        <button
                            className={`${clsx(
                                styles.join_now_button_join,
                                styles.join_now_button_join_google
                            )}`}
                            onClick={() => signinAPI(dispatch, history)}
                        >
                            <span>
                                <img src='/image/icons8-google.svg' alt='' />
                            </span>{' '}
                            <span>Tiếp tục với google</span>
                        </button>
                        <p className={`${clsx(styles.join_now_signin)}`}>
                            Already on LinkedIn?{' '}
                            <Link to='/signin'>Sign in</Link>
                        </p>
                    </div>
                    <p
                        className={`${clsx(
                            styles.join_now_gethelp
                        )} text_center`}
                    >
                        Looking to create a page for a business?{' '}
                        <Link to='/help'>Get help</Link>
                    </p>
                </div>
            </div>
            <JoinNowFooter />
        </>
    );
}

export default JoinNow;
