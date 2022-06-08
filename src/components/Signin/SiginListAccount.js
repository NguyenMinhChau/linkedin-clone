import React from 'react';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './Signin.module.css';
import { signinAPI } from '../../actions';

function SiginListAccount() {
    const dispatch = useDispatch();
    const history = useNavigate();
    return (
        <ul className={`${clsx(styles.signin_list_account)}`}>
            <li>
                <div className={`${clsx(styles.signin_info_account)}`}>
                    <img
                        src='https://media-exp1.licdn.com/dms/image/C5603AQFJ8ywkxAu3GQ/profile-displayphoto-shrink_100_100/0/1627114335479?e=1658966400&v=beta&t=I8WK20RZp61oLIKfKBfwkDZ578Niyt6U6c-I3toRS90'
                        alt='avatar_user'
                        className={`${clsx(styles.signin_avatar)}`}
                    />
                    <div
                        className={`${clsx(
                            styles.signin_info_account_name_email
                        )}`}
                    >
                        <h5 className={`${clsx(styles.signin_name)}`}>
                            Nguyễn Minh Châu
                        </h5>
                        <p className={`${clsx(styles.signin_email)}`}>
                            n*****@gmail.com
                        </p>
                    </div>
                </div>
                <span className={`${clsx(styles.signin_elipsis)}`}>
                    <i className='fa-solid fa-ellipsis'></i>
                </span>
            </li>
            <li onClick={() => signinAPI(dispatch, history)}>
                <img
                    src='https://static-exp1.licdn.com/sc/h/efkb5179rslll10nmhystl3wx'
                    alt='avatar_user'
                    style={{ backgroundColor: '#ccc' }}
                    className={`${clsx(styles.signin_avatar)}`}
                />
                <p
                    style={{
                        margin: '0',
                        fontWeight: '500',
                        color: '#aaa',
                    }}
                    className='ml-3'
                >
                    Sign in using another account
                </p>
            </li>
        </ul>
    );
}

export default SiginListAccount;
