/* eslint-disable no-useless-escape */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { EmptyState } from 'evergreen-ui';
import ReactPlayer from 'react-player';
import moment from 'moment';
import clsx from 'clsx';
import MenuListIcon from './MenuListIcon';
import ListActionLike from './ListActionLike';
import Comment from './Comment/Comment';
import Share from './Share';
import RolePost from './RolePost';
import PopupDiscardShare from './PopupDiscardShare';
import ImageViewPost from './ImageViewPost';
import { useHandleCustomeCharacter } from './Togglehandle';
import { db } from '../../../../firebase';
import styles from './ContentMiddle.module.css';

// REDUX
import { useDispatch } from 'react-redux';
import {
    useCommentToogleHook,
    useShareContentHook,
    useImageViewerHook,
    useMenuItemPostHook,
    useUserHook,
} from '../../../../getData';
import {
    comments,
    shareContents,
    imageViewers,
    menuItemPosts,
    articleContents,
} from '../../../../reducers';

function MiddlePostItem() {
    // REDUX
    const dispatch = useDispatch();
    const actionsComment = useCommentToogleHook();
    const actionsShare = useShareContentHook();
    const actionsImageViewer = useImageViewerHook();
    const actionsMenuItemPosts = useMenuItemPostHook();
    const user = useUserHook();

    const actionsCharactor = useHandleCustomeCharacter();
    //lấy dữ liệu bảng article trong firebase
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        db.collection('articles').onSnapshot((snapshot) => {
            setArticles(
                snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            );
        });
    }, [user.displayName]);
    // sắp xếp bài viết
    articles.sort((a, b) => {
        return moment(b.actor.date).unix() - moment(a.actor.date).unix();
    });
    return (
        <>
            {articles.length > 0 ? (
                articles.map((article, index) => (
                    <div
                        className={`${clsx(
                            styles.content_middle_common_card
                        )} flex_center`}
                        key={index}
                    >
                        <div
                            className={`${clsx(
                                styles.content_middle_common_card_friendly_action
                            )}`}
                        >
                            <p
                                title=''
                                className={`${clsx(
                                    styles.content_middle_common_card_friendly_text
                                )}`}
                            >
                                <img
                                    onError={(e) => {
                                        e.target.src = '/icons8-linkedin.svg';
                                    }}
                                    src='/icons8-linkedin.svg'
                                    alt='avatar_user'
                                />{' '}
                                <Link to='#'>Linkedin</Link> likes this
                            </p>
                        </div>
                        <div className={styles.content_middle_share_actor}>
                            <Link
                                to={`/${actionsCharactor.removeAccentsAddHephyn(
                                    article.actor.title
                                )}/${article.actor.uid}`}
                            >
                                <img
                                    onError={(e) => {
                                        e.target.src = '/icons8-linkedin.svg';
                                    }}
                                    src={article.actor.image}
                                    alt=''
                                />
                                <div>
                                    <span>{article.actor.title}</span>
                                    <span>@{article.actor.description}</span>
                                    <span
                                        title={moment(
                                            article.actor.date
                                        ).format('DD/MM/YYYY HH:mm:ss A')}
                                    >
                                        {moment(
                                            article.actor.date.toString()
                                        ).fromNow()}
                                    </span>
                                </div>
                            </Link>
                            <button
                                onClick={() =>
                                    dispatch(
                                        menuItemPosts.handelToogle(article.id)
                                    )
                                }
                            >
                                <i className='fa-solid fa-ellipsis'></i>
                                {actionsMenuItemPosts.toogle &&
                                    actionsMenuItemPosts.idPost ===
                                        article.id && (
                                        <MenuListIcon
                                            article={article}
                                            idUser={article.actor.uid}
                                        />
                                    )}
                            </button>
                        </div>
                        <div
                            className={`${clsx(
                                styles.content_middle_description
                            )}`}
                        >
                            {article.description}
                        </div>
                        <div
                            className={`${clsx(
                                styles.content_middle_share_image
                            )} mb-1`}
                        >
                            {article.image.length > 0 &&
                                article.image.map((image, index) => (
                                    <div
                                        className={`${
                                            article.image.length === 1 &&
                                            article.video.length === 0
                                                ? `${clsx(
                                                      styles.content_middle_share_image_item_full
                                                  )}`
                                                : `${clsx(
                                                      styles.content_middle_share_image_item
                                                  )}`
                                        }`}
                                        key={index}
                                    >
                                        <div
                                            className={`${clsx(
                                                styles.bg_image_content
                                            )}`}
                                            style={{
                                                backgroundImage: `url(${image})`,
                                            }}
                                            onClick={(e) =>
                                                dispatch(
                                                    imageViewers.handleImageViewer(
                                                        {
                                                            src: e.target.style.backgroundImage
                                                                .replace(
                                                                    'url(',
                                                                    ''
                                                                )
                                                                .replace(
                                                                    ')',
                                                                    ''
                                                                )
                                                                .replace(
                                                                    /\"/gi,
                                                                    ''
                                                                ),
                                                            idPost: article.id,
                                                        }
                                                    )
                                                )
                                            }
                                        ></div>
                                    </div>
                                ))}
                            {article.video.length > 0 &&
                                article.video.map((item, index) => (
                                    <div
                                        className={`${
                                            article.video.length === 1 &&
                                            article.image.length === 0
                                                ? `${clsx(
                                                      styles.content_middle_share_image_item_full
                                                  )}`
                                                : `${clsx(
                                                      styles.content_middle_share_image_item
                                                  )}`
                                        }`}
                                        key={index}
                                    >
                                        <ReactPlayer
                                            url={item}
                                            width={'100%'}
                                            height={'100%'}
                                            className={`${clsx(styles.video)}`}
                                            controls={true}
                                        />
                                    </div>
                                ))}
                        </div>
                        <ul
                            className={`${clsx(
                                styles.content_middle_social_count
                            )}`}
                        >
                            <li>
                                <Link to='#'>
                                    <img
                                        src='https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb'
                                        alt='social_like'
                                    />
                                    <img
                                        src='https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f'
                                        alt='social_clapping'
                                    />
                                    <span className='ml-1'>75</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='#'
                                    onClick={() =>
                                        dispatch(
                                            comments.handleToogleComment(
                                                article.id
                                            )
                                        )
                                    }
                                >
                                    2 comments
                                </Link>
                            </li>
                        </ul>
                        <div
                            className={`${clsx(
                                styles.content_middle_social_actions
                            )}`}
                        >
                            <button
                                className={`${clsx(
                                    styles.middle_post_like_action_container
                                )}`}
                            >
                                <span>Like</span>
                                <i
                                    className='bx bx-like ml-1'
                                    style={{ color: '#0078d4' }}
                                ></i>
                                <ListActionLike />
                            </button>
                            <button
                                onClick={() =>
                                    dispatch(
                                        comments.handleToogleComment(article.id)
                                    )
                                }
                            >
                                <span>Comments</span>
                                <i
                                    className='bx bx-message-rounded-dots ml-1'
                                    style={{ color: '#0078d4' }}
                                ></i>
                            </button>
                            <button
                                onClick={() =>
                                    dispatch(
                                        shareContents.handleToogleShare(
                                            article.id
                                        )
                                    )
                                }
                            >
                                <span>Share</span>
                                <i
                                    className='bx bx-share ml-1'
                                    style={{ color: '#0078d4' }}
                                ></i>
                            </button>
                            <button>
                                <span>Send</span>
                                <i
                                    className='bx bx-send ml-1'
                                    style={{ color: '#0078d4' }}
                                ></i>
                            </button>
                        </div>
                        {actionsComment.toogleComment &&
                            actionsComment.idPost === article.id && (
                                <Comment idPost={article.id} />
                            )}

                        {actionsShare.toggleShare &&
                            actionsShare.idPost === article.id && (
                                <Share
                                    handleContainersShareClick={(e) => {
                                        e.stopPropagation();
                                        dispatch(
                                            shareContents.handleContainersShareClick()
                                        );
                                    }}
                                    handleContentShareClick={(e) => {
                                        e.stopPropagation();
                                        dispatch(
                                            shareContents.handleContentShareClick()
                                        );
                                    }}
                                    handleButtonCloseContentShareClick={(e) => {
                                        e.stopPropagation();
                                        dispatch(
                                            shareContents.handleButtonCloseContentShareClick()
                                        );
                                    }}
                                    handleButtonAnyoneShareClick={(e) => {
                                        e.stopPropagation();
                                        dispatch(
                                            shareContents.handleButtonAnyoneShareClick()
                                        );
                                    }}
                                />
                            )}
                        {actionsShare.toggleRole &&
                            actionsShare.idPost === article.id && (
                                <RolePost
                                    handleContainersRoleClick={(e) => {
                                        e.stopPropagation();
                                        dispatch(
                                            shareContents.handleContainersRoleClick()
                                        );
                                    }}
                                    handleContentsRoleClick={(e) => {
                                        e.stopPropagation();
                                        dispatch(
                                            shareContents.handleContentsRoleClick()
                                        );
                                    }}
                                />
                            )}
                        {actionsShare.toggleDiscard &&
                            actionsShare.idPost === article.id && (
                                <PopupDiscardShare
                                    handleContainersDiscardShareClick={(e) => {
                                        e.stopPropagation();
                                        dispatch(
                                            shareContents.handleContainersDiscardShareClick()
                                        );
                                    }}
                                    handleContentDiscardShareClick={(e) => {
                                        e.stopPropagation();
                                        dispatch(
                                            shareContents.handleContentDiscardShareClick()
                                        );
                                    }}
                                    handleButtonDiscardShareClick={(e) => {
                                        e.stopPropagation();
                                        dispatch(
                                            shareContents.handleButtonDiscardShareClick()
                                        );
                                    }}
                                />
                            )}
                        {actionsImageViewer.toogleImageViewer &&
                            actionsImageViewer.idPost === article.id && (
                                <ImageViewPost
                                    handleImageViewerCloseButton={() =>
                                        dispatch(
                                            imageViewers.handleImageViewerCloseButton()
                                        )
                                    }
                                    article={article}
                                    currentImage={
                                        actionsImageViewer.currentImage
                                    }
                                />
                            )}
                    </div>
                ))
            ) : (
                <EmptyState
                    background='dark'
                    title='No posts have been displayed yet...'
                    orientation='horizontal'
                    icon={
                        <i
                            className='bx bxl-linkedin'
                            style={{ color: '#0078d4' }}
                        ></i>
                    }
                    iconBgColor='#81C9FF'
                    description='Create a new post to share with everyone.'
                    primaryCta={
                        <EmptyState.PrimaryButton
                            onClick={() =>
                                dispatch(articleContents.handleToogleArticle())
                            }
                        >
                            Write Article
                        </EmptyState.PrimaryButton>
                    }
                />
            )}
        </>
    );
}

export default MiddlePostItem;
