import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useDispatch } from 'react-redux';
import { useUserHook } from '../../../../getData';
import { embeds } from '../../../../reducers';
import styles from './ContentMiddle.module.css';

function MenuListIcon({ idUser, article }) {
    const user = useUserHook();
    const dispatch = useDispatch();
    return (
        <ul className={`${clsx(styles.menu_list_icon)} `}>
            <li className={`${clsx(styles.menu_list_icon_item)}`}>
                <div
                    className={`${clsx(
                        styles.menu_list_icon_item_button
                    )} flex_center`}
                >
                    <div className={`${clsx(styles.item_button_icon)}`}>
                        <i className='fa-solid fa-bookmark'></i>
                    </div>
                    <div
                        className={`${clsx(
                            styles.item_button_text_container
                        )} ml-3`}
                    >
                        <p
                            className={`${clsx(
                                styles.item_button_text
                            )} margin-0`}
                        >
                            Save
                        </p>
                        <p
                            className={`${clsx(
                                styles.item_button_description
                            )} margin-0`}
                        >
                            Save for later
                        </p>
                    </div>
                </div>
            </li>
            <Link
                to={`/posts/detail/${article.id}`}
                className={`${clsx(
                    styles.menu_list_icon_item,
                    styles.menu_list_icon_item_link
                )}`}
            >
                <div
                    className={`${clsx(
                        styles.menu_list_icon_item_button
                    )} flex_center`}
                >
                    <div className={`${clsx(styles.item_button_icon)}`}>
                        <i className='fa-solid fa-eye'></i>
                    </div>
                    <div
                        className={`${clsx(
                            styles.item_button_text_container
                        )} ml-3`}
                    >
                        <p
                            className={`${clsx(
                                styles.item_button_text
                            )} margin-0`}
                        >
                            View detail post
                        </p>
                    </div>
                </div>
            </Link>
            <CopyToClipboard
                onCopy={true}
                text={`https://linkedln-clone-5568b.web.app/posts/detail/${article.id}`}
            >
                <li className={`${clsx(styles.menu_list_icon_item)}`}>
                    <div
                        className={`${clsx(
                            styles.menu_list_icon_item_button
                        )} flex_center`}
                    >
                        <div className={`${clsx(styles.item_button_icon)}`}>
                            <i className='fa-solid fa-link'></i>
                        </div>
                        <div
                            className={`${clsx(
                                styles.item_button_text_container
                            )} ml-3`}
                        >
                            <p
                                className={`${clsx(
                                    styles.item_button_text
                                )} margin-0`}
                            >
                                Copy link to clipboard
                            </p>
                            <p
                                className={`${clsx(
                                    styles.item_button_description
                                )} margin-0`}
                            ></p>
                        </div>
                    </div>
                </li>
            </CopyToClipboard>
            <li
                className={`${clsx(styles.menu_list_icon_item)}`}
                onClick={() => dispatch(embeds.handleToogleEmbed(article.id))}
            >
                <div
                    className={`${clsx(
                        styles.menu_list_icon_item_button
                    )} flex_center`}
                >
                    <div className={`${clsx(styles.item_button_icon)}`}>
                        <i className='fa-solid fa-code'></i>
                    </div>
                    <div
                        className={`${clsx(
                            styles.item_button_text_container
                        )} ml-3`}
                    >
                        <p
                            className={`${clsx(
                                styles.item_button_text
                            )} margin-0`}
                        >
                            Embed this post
                        </p>
                        <p
                            className={`${clsx(
                                styles.item_button_description
                            )} margin-0`}
                        >
                            Copy and paste embed code on your site
                        </p>
                    </div>
                </div>
            </li>
            {article && idUser !== user.uid && (
                <>
                    <li className={`${clsx(styles.menu_list_icon_item)}`}>
                        <div
                            className={`${clsx(
                                styles.menu_list_icon_item_button
                            )} flex_center`}
                        >
                            <div className={`${clsx(styles.item_button_icon)}`}>
                                <i className='fa-solid fa-circle-xmark'></i>
                            </div>
                            <div
                                className={`${clsx(
                                    styles.item_button_text_container
                                )} ml-3`}
                            >
                                <p
                                    className={`${clsx(
                                        styles.item_button_text
                                    )} margin-0`}
                                >
                                    Unfollow {article && article.actor.title}
                                </p>
                                <p
                                    className={`${clsx(
                                        styles.item_button_description
                                    )} margin-0`}
                                >
                                    Stay connected but stop seeing posts from{' '}
                                    {article && article.actor.title} in feed
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className={`${clsx(styles.menu_list_icon_item)}`}>
                        <div
                            className={`${clsx(
                                styles.menu_list_icon_item_button
                            )} flex_center`}
                        >
                            <div className={`${clsx(styles.item_button_icon)}`}>
                                <i className='fa-solid fa-person-circle-xmark'></i>
                            </div>
                            <div
                                className={`${clsx(
                                    styles.item_button_text_container
                                )} ml-3`}
                            >
                                <p
                                    className={`${clsx(
                                        styles.item_button_text
                                    )} margin-0`}
                                >
                                    Remove connection with{' '}
                                    {article && article.actor.title}
                                </p>
                                <p
                                    className={`${clsx(
                                        styles.item_button_description
                                    )} margin-0`}
                                >
                                    {article && article.actor.title} won't be
                                    notified
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className={`${clsx(styles.menu_list_icon_item)}`}>
                        <div
                            className={`${clsx(
                                styles.menu_list_icon_item_button
                            )} flex_center`}
                        >
                            <div className={`${clsx(styles.item_button_icon)}`}>
                                <i className='fa-solid fa-bell-slash'></i>
                            </div>
                            <div
                                className={`${clsx(
                                    styles.item_button_text_container
                                )} ml-3`}
                            >
                                <p
                                    className={`${clsx(
                                        styles.item_button_text
                                    )} margin-0`}
                                >
                                    Mute {article && article.actor.title}
                                </p>
                                <p
                                    className={`${clsx(
                                        styles.item_button_description
                                    )} margin-0`}
                                >
                                    Stop seeing posts from{' '}
                                    {article && article.actor.title} in feed
                                </p>
                            </div>
                        </div>
                    </li>
                </>
            )}
            {article && idUser !== user.uid && (
                <>
                    <li className={`${clsx(styles.menu_list_icon_item)}`}>
                        <div
                            className={`${clsx(
                                styles.menu_list_icon_item_button
                            )} flex_center`}
                        >
                            <div className={`${clsx(styles.item_button_icon)}`}>
                                <i className='fa-solid fa-eye-slash'></i>
                            </div>
                            <div
                                className={`${clsx(
                                    styles.item_button_text_container
                                )} ml-3`}
                            >
                                <p
                                    className={`${clsx(
                                        styles.item_button_text
                                    )} margin-0`}
                                >
                                    I don't want to see this
                                </p>
                                <p
                                    className={`${clsx(
                                        styles.item_button_description
                                    )} margin-0`}
                                >
                                    Let us know why you don't want to see this
                                    post
                                </p>
                            </div>
                        </div>
                    </li>

                    <li className={`${clsx(styles.menu_list_icon_item)}`}>
                        <div
                            className={`${clsx(
                                styles.menu_list_icon_item_button
                            )} flex_center`}
                        >
                            <div className={`${clsx(styles.item_button_icon)}`}>
                                <i className='fa-solid fa-flag'></i>
                            </div>
                            <div
                                className={`${clsx(
                                    styles.item_button_text_container
                                )} ml-3`}
                            >
                                <p
                                    className={`${clsx(
                                        styles.item_button_text
                                    )} margin-0`}
                                >
                                    Report this post
                                </p>
                                <p
                                    className={`${clsx(
                                        styles.item_button_description
                                    )} margin-0`}
                                >
                                    This post is offensive or the account is
                                    hacked
                                </p>
                            </div>
                        </div>
                    </li>
                </>
            )}
            <li className={`${clsx(styles.menu_list_icon_item)}`}>
                <div
                    className={`${clsx(
                        styles.menu_list_icon_item_button
                    )} flex_center`}
                >
                    <div className={`${clsx(styles.item_button_icon)}`}>
                        <i className='fa-solid fa-eye'></i>
                    </div>
                    <div
                        className={`${clsx(
                            styles.item_button_text_container
                        )} ml-3`}
                    >
                        <p
                            className={`${clsx(
                                styles.item_button_text
                            )} margin-0`}
                        >
                            Who can see this post?
                        </p>
                        <p
                            className={`${clsx(
                                styles.item_button_description
                            )} margin-0`}
                        >
                            Visible to anyone on or of LinkedIn
                        </p>
                    </div>
                </div>
            </li>
        </ul>
    );
}

export default MenuListIcon;
