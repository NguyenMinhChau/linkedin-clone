import React from 'react';
import clsx from 'clsx';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { db, storage, auth } from '../../firebase';
import styles from './JoinNow.module.css';
import { useJoinNowHook } from '../../getData';
import { joinnows } from '../../reducers';

function JoinNowForm({
    progress,
    error,
    refDisplayNameJoinnow,
    refEmailJoinnow,
    refPasswordJoinnow,
    handleShowHidePassword,
    refphotoURLJoinnow,
    setError,
    setProgress,
}) {
    const dispatch = useDispatch();
    const actionsJoinnow = useJoinNowHook();
    const history = useNavigate();
    return (
        <>
            {actionsJoinnow.toogleJoinnow && (
                <>
                    {progress === 0 ? (
                        <>
                            <div className='text-center mb-3'>
                                <h5>Join Now Linkedin</h5>
                            </div>
                            <div className='text-center mb-3'>
                                <p
                                    className={`${clsx(
                                        styles.error
                                    )} text-danger`}
                                >
                                    {error}
                                </p>
                            </div>
                            <div className='form-group'>
                                <label
                                    htmlFor='displayName'
                                    className={`${clsx(styles.label_text)}`}
                                >
                                    UserName
                                </label>
                                <input
                                    type='text'
                                    className={`${clsx(
                                        styles.input_text
                                    )} form-control`}
                                    id='displayName'
                                    name='displayName'
                                    value={actionsJoinnow.displayName}
                                    onChange={(e) =>
                                        dispatch(
                                            joinnows.handleChangeDisplayName(
                                                e.target.value
                                            )
                                        )
                                    }
                                    ref={refDisplayNameJoinnow}
                                    placeholder='Eg: Nguyen Van A'
                                    autoComplete='off'
                                />
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
                                            joinnows.handleChangeEmail(
                                                e.target.value
                                            )
                                        )
                                    }
                                    ref={refEmailJoinnow}
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
                                    ref={refPasswordJoinnow}
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
                            <div
                                className={`${clsx(
                                    styles.upload_container
                                )} form-group mt-4`}
                            >
                                <label
                                    htmlFor='photoURL'
                                    className={`${clsx(styles.label_upload)}`}
                                >
                                    <input
                                        accept='image/*'
                                        type='file'
                                        className='form-control'
                                        id='photoURL'
                                        name='photoURL'
                                        onChange={(e) =>
                                            dispatch(
                                                joinnows.handleChangePhotoURL(
                                                    e.target.files[0]
                                                )
                                            )
                                        }
                                        ref={refphotoURLJoinnow}
                                        style={{ display: 'none' }}
                                    />
                                    <div
                                        className={`${clsx(
                                            styles.choses_avatar
                                        )}`}
                                    >
                                        <span>
                                            <i
                                                className='bx bx-up-arrow-alt'
                                                style={{
                                                    color: '#0077d3',
                                                }}
                                            ></i>
                                        </span>{' '}
                                        Upload avatar
                                    </div>
                                </label>
                            </div>
                            {actionsJoinnow.photoURL && (
                                <div className={`${clsx(styles.image_avatar)}`}>
                                    <img
                                        onError={(e) => {
                                            e.target.src =
                                                '/icons8-linkedin.svg';
                                        }}
                                        src={
                                            actionsJoinnow.photoURL &&
                                            URL.createObjectURL(
                                                actionsJoinnow.photoURL
                                            )
                                        }
                                        alt=''
                                    />
                                </div>
                            )}
                            <p
                                className={`${clsx(
                                    styles.join_now_description
                                )} mt-3`}
                            >
                                By clicking Agree & Join, you agree to the
                                LinkedIn{' '}
                                <Link to='/user-agreement'>User Agreement</Link>
                                ,{' '}
                                <Link to='/privacy-policy'>Privacy Policy</Link>
                                , and{' '}
                                <Link to='/cookie-policy'>Cookie Policy.</Link>
                            </p>
                            <button
                                className={`${clsx(
                                    styles.join_now_button_join
                                )}`}
                                onClick={(e) =>
                                    dispatch(
                                        joinnows.handleJoinNow({
                                            e,
                                            setError,
                                            refDisplayNameJoinnow,
                                            refEmailJoinnow,
                                            refPasswordJoinnow,
                                            refphotoURLJoinnow,
                                            db,
                                            storage,
                                            dispatch,
                                            joinnows,
                                            setProgress,
                                            auth,
                                            history,
                                        })
                                    )
                                }
                            >
                                Agree & Join
                            </button>
                        </>
                    ) : (
                        <div className={`${clsx(styles.loader)}`}>
                            <i
                                className='bx bx-loader bx-spin'
                                style={{ color: '#0077d3' }}
                            ></i>
                        </div>
                    )}
                </>
            )}
        </>
    );
}

export default JoinNowForm;
