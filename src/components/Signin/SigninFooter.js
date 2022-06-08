import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './Signin.module.css';

function SigninFooter() {
    return (
        <div className={`${clsx(styles.signin_footer)} flex_center`}>
            <div className={`${clsx(styles.signin_footer_lists)} d-flex`}>
                <div
                    className={`${clsx(styles.signin_footer_item)} flex_center`}
                >
                    <img
                        src='/image/login-logo.svg'
                        alt=''
                        className={`${clsx(styles.signin_footer_logo)}`}
                    />{' '}
                    <span
                        className='ml-1'
                        style={{
                            color: 'rgba(0,0,0,0.6)',
                            fontWeight: '400',
                            fontSize: '14px',
                        }}
                    >
                        &copy; {new Date().getFullYear()}
                    </span>
                </div>
                <div
                    className={`${clsx(styles.signin_footer_item)} flex_center`}
                >
                    <Link to='/user-agreement'>User Agreement</Link>
                </div>
                <div
                    className={`${clsx(styles.signin_footer_item)} flex_center`}
                >
                    <Link to='/privacy-policy'>Privacy Policy</Link>
                </div>
                <div
                    className={`${clsx(styles.signin_footer_item)} flex_center`}
                >
                    <Link to='/community-guidelines'>Community Guidelines</Link>
                </div>
                <div
                    className={`${clsx(styles.signin_footer_item)} flex_center`}
                >
                    <Link to='/cookie-policy'>Cookie Policy</Link>
                </div>
                <div
                    className={`${clsx(styles.signin_footer_item)} flex_center`}
                >
                    <Link to='/copyright-policy'>Copyright Policy</Link>
                </div>
                <div
                    className={`${clsx(styles.signin_footer_item)} flex_center`}
                >
                    <Link to='/send-feedback'>Send Feedback</Link>
                </div>
                <div
                    className={`${clsx(styles.signin_footer_item)} flex_center`}
                >
                    <Link to='/language'>
                        Language <span></span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SigninFooter;
