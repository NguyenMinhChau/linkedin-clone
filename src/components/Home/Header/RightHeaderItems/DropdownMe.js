import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import styles from './RightHeaderItems.module.css';
import { getData, actions } from '../../../';

function DropdownMe() {
    const user = getData.useUserHook();
    const dispatch = useDispatch();
    const history = useNavigate();
    function removeAccents(str) {
        var AccentsMap = [
            'aàảãáạăằẳẵắặâầẩẫấậ',
            'AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ',
            'dđ',
            'DĐ',
            'eèẻẽéẹêềểễếệ',
            'EÈẺẼÉẸÊỀỂỄẾỆ',
            'iìỉĩíị',
            'IÌỈĨÍỊ',
            'oòỏõóọôồổỗốộơờởỡớợ',
            'OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ',
            'uùủũúụưừửữứự',
            'UÙỦŨÚỤƯỪỬỮỨỰ',
            'yỳỷỹýỵ',
            'YỲỶỸÝỴ',
        ];
        for (var i = 0; i < AccentsMap.length; i++) {
            var re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
            var char = AccentsMap[i][0];
            str = str.replace(re, char);
            str = str.replace(' ', '-');
            str = str.toLowerCase();
        }
        return str;
    }
    const nameUser = removeAccents(user.displayName ? user.displayName : '#');
    return (
        <div className={`${clsx(styles.dropdown_container)}`}>
            <>
                <div className={`${clsx(styles.dropdown_item)}`}>
                    <Link
                        className={`${clsx(styles.dropdown_link)}`}
                        to={`/${nameUser}/${user.uid ? user.uid : '#'}`}
                        title={user && user.displayName}
                    >
                        <div className={`${clsx(styles.dropdown_info_link)}`}>
                            <img
                                onError={(e) =>
                                    (e.target.src = '/icons8-linkedin.svg')
                                }
                                src={user.photoURL ? user.photoURL : ''}
                                alt=''
                                className={`${clsx(styles.dropdown_avatar)}`}
                            />
                            <div
                                className={`${clsx(
                                    styles.dropdown_text_container
                                )}`}
                            >
                                <p
                                    className={`${clsx(
                                        styles.dropdown_text_name
                                    )} margin-0`}
                                >
                                    {user.displayName
                                        ? user.displayName
                                        : 'Linkedin'}
                                </p>
                                <p
                                    className={`${clsx(
                                        styles.dropdown_text_description
                                    )} margin-0`}
                                >
                                    ___👨‍💻___
                                </p>
                            </div>
                        </div>
                        <button
                            className={`${clsx(
                                styles.dropdown_button_view_profile
                            )}`}
                        >
                            View Profile
                        </button>
                    </Link>
                </div>
                <div class='dropdown-divider'></div>
            </>
            <div className={`${clsx(styles.dropdown_item)}`}>
                <h6>Account</h6>
                <Link
                    className={`${clsx(styles.dropdown_link)}`}
                    to='/settings-and-privacy'
                >
                    Settings & Privacy
                </Link>
                <Link className={`${clsx(styles.dropdown_link)}`} to='/help'>
                    Help
                </Link>
                <Link
                    className={`${clsx(styles.dropdown_link)}`}
                    to='/language'
                >
                    Language
                </Link>
            </div>
            <div class='dropdown-divider'></div>
            <div className={`${clsx(styles.dropdown_item)}`}>
                <h6>Manage</h6>
                <Link
                    className={`${clsx(styles.dropdown_link)}`}
                    to='/posts-and-activity'
                >
                    Posts & Activity
                </Link>
                <Link
                    className={`${clsx(styles.dropdown_link)}`}
                    to='/job-posting-account'
                >
                    Job Posting Account
                </Link>
            </div>
            <div class='dropdown-divider'></div>
            <div
                className={`${clsx(styles.dropdown_item)} mb-2`}
                onClick={() => actions.signoutAPI(dispatch, history)}
            >
                <Link
                    // className={`${clsx(styles.dropdown_links)}`}
                    to={user ? '#' : '/signin'}
                >
                    <button
                        className={user ? 'btn btn-danger' : 'btn btn-primary'}
                        style={{ minWidth: '100px' }}
                    >
                        {user ? 'Sign out' : 'Sign in'}
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default DropdownMe;
