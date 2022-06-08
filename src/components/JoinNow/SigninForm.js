import React from 'react';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { db, auth } from '../../firebase';
import styles from './JoinNow.module.css';
import { useJoinNowHook } from '../../getData';
import { joinnows } from '../../reducers';

function SigninForm({
    error,
    refEmailSignin,
    refPasswordSignin,
    handleShowHidePassword,
    users,
    setError,
}) {
    const dispatch = useDispatch();
    const history = useNavigate();
    const actionsJoinnow = useJoinNowHook();
    return (
        <>
            {!actionsJoinnow.toogleJoinnow && (
                <>
                    <div className='text-center mb-3'>
                        <h5>Signin Linkedin</h5>
                    </div>
                    <div className='text-center mb-3'>
                        <p className={`${clsx(styles.error)} text-danger`}>
                            {error}
                        </p>
                    </div>
                    <div className='form-group'>
                        <label
                            htmlFor='email'
                            className={`${clsx(styles.label_text)}`}
                        >
                            Email
                        </label>
                        <input
                            type='text'
                            className={`${clsx(
                                styles.input_text
                            )} form-control`}
                            id='email'
                            name='email'
                            value={actionsJoinnow.email}
                            onChange={(e) =>
                                dispatch(
                                    joinnows.handleChangeEmail(e.target.value)
                                )
                            }
                            ref={refEmailSignin}
                            placeholder='Eg: example@gmail.com'
                            autoComplete='off'
                        />
                    </div>
                    <div
                        className={`${clsx(
                            styles.join_now_form_password
                        )} from-group`}
                    >
                        <label
                            htmlFor='password'
                            className={`${clsx(styles.label_text)}`}
                        >
                            Password (6 or more characters)
                        </label>
                        <input
                            type='password'
                            className={`${clsx(
                                styles.input_text
                            )} form-control`}
                            id='password'
                            name='password'
                            value={actionsJoinnow.password}
                            onChange={(e) =>
                                dispatch(
                                    joinnows.handleChangePassword(
                                        e.target.value
                                    )
                                )
                            }
                            ref={refPasswordSignin}
                            autoComplete='off'
                            placeholder='Eg: Xyz@123'
                        />
                        <span
                            className={`${clsx(styles.eye_password)}`}
                            onClick={handleShowHidePassword}
                        >
                            {actionsJoinnow.showPassword ? (
                                <i
                                    className={`${clsx(
                                        styles.show
                                    )} bx bx-show`}
                                    style={{
                                        color: '#0279d4',
                                    }}
                                ></i>
                            ) : (
                                <i
                                    className={`${clsx(
                                        styles.hide
                                    )} bx bx-hide`}
                                    style={{
                                        color: '#0279d4',
                                    }}
                                ></i>
                            )}
                        </span>
                    </div>
                    <p className={`${clsx(styles.join_now_description)} mt-3`}>
                        New to LinkedIn?{' '}
                        <span
                            className={`${clsx(styles.join_now_email_signin)}`}
                            onClick={() => {
                                dispatch(joinnows.handleOpenJoinnow());
                                setError('');
                            }}
                        >
                            Join now
                        </span>
                    </p>
                    <button
                        className={`${clsx(styles.join_now_button_join)}`}
                        onClick={(e) =>
                            dispatch(
                                joinnows.handleSignin({
                                    e,
                                    db,
                                    dispatch,
                                    history,
                                    users,
                                    setError,
                                    refEmailSignin,
                                    refPasswordSignin,
                                    auth,
                                })
                            )
                        }
                    >
                        Sign in
                    </button>
                </>
            )}
        </>
    );
}

export default SigninForm;
