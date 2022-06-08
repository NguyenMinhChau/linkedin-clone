import React from 'react';
import clsx from 'clsx';
import { Link, Navigate } from 'react-router-dom';
import styles from './Signin.module.css';
import SiginListAccount from './SiginListAccount';
import SigninFooter from './SigninFooter';
import { useUserHook } from '../../getData';

function Signin() {
    const user = useUserHook();
    return (
        <>
            {!user ? (
                <div className={`${clsx(styles.signin)} flex_center`}>
                    <div
                        className='flex_center flex-column'
                        style={{ width: '90%' }}
                    >
                        <Link to='/'>
                            <img
                                src='/image/login-logo.svg'
                                alt=''
                                className={`${clsx(styles.signin_logo)}`}
                            />
                        </Link>
                        <h2>Welcome Back</h2>
                        <p className={`${clsx(styles.signin_description)}`}>
                            Don't miss your next opportunity. Sign in to stay
                            updated on your professional world.
                        </p>
                        <SiginListAccount />
                        <p className={`${clsx(styles.signin_new_linkedin)}`}>
                            New to LinkedIn?{' '}
                            <Link to='/join-now' className='text_bold'>
                                Join now
                            </Link>
                        </p>
                    </div>
                    <SigninFooter />
                </div>
            ) : (
                <Navigate to='/home' />
            )}
        </>
    );
}

export default Signin;
