import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './PostDetail.module.css';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ReactPlayer from 'react-player';
import Slider from 'react-slick';
import moment from 'moment';
import {
    useMenuItemPostHook,
    useCommentToogleHook,
    useShareContentHook,
    useImageViewerHook,
} from '../../getData';
import {
    menuItemPosts,
    imageViewers,
    comments,
    shareContents,
} from '../../reducers';
import { useHandleCustomeCharacter } from '../Home/Content/ContentMiddle/Togglehandle';
import MenuListIcon from '../Home/Content/ContentMiddle/MenuListIcon';
import ListActionLike from '../Home/Content/ContentMiddle/ListActionLike';
import ImageViewPost from '../Home/Content/ContentMiddle/ImageViewPost';
import Comment from '../Home/Content/ContentMiddle/Comment/Comment';
import Share from '../Home/Content/ContentMiddle/Share';
import RolePost from '../Home/Content/ContentMiddle/RolePost';
import PopupDiscardShare from '../Home/Content/ContentMiddle/PopupDiscardShare';
import { db } from '../../firebase';

function PostDetail() {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    useEffect(() => {
        db.collection('articles').onSnapshot((snapshot) => {
            const data = snapshot.docs.find((item) => item.id === id);
            setArticle({ id: data.id, ...data.data() });
            document.title =
                data.data().actor.title + ' on Linkedin | Linkedin';
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const dispatch = useDispatch();
    const actionsCharactor = useHandleCustomeCharacter();
    const actionsMenuItemPosts = useMenuItemPostHook();
    const actionsComment = useCommentToogleHook();
    const actionsShare = useShareContentHook();
    const actionsImageViewer = useImageViewerHook();
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        loop: true,
        autoplay: true,
    };
    return (
        <>
            {article ? (
                <div
                    className={`${clsx(
                        styles.post_detail_container
                    )} container-fluid mb-4`}
                >
                    <div className='row'>
                        <div
                            className={`${clsx(
                                styles.post_detail_left
                            )} col col-sm-12 col-md-12 col-12 col-lg-3 mt-4`}
                        >
                            <div
                                className={`${clsx(
                                    styles.post_detail_left_top
                                )}`}
                            >
                                <img
                                    src='/image/card-bg.svg'
                                    alt=''
                                    className={`${clsx(
                                        styles.post_detail_left_top_poster
                                    )}`}
                                />
                                <Link
                                    to='/'
                                    className={`${clsx(
                                        styles.post_detail_left_top_avatar_container
                                    )}`}
                                >
                                    <img
                                        onError={(e) => {
                                            e.target.src =
                                                '/icons8-linkedin.svg';
                                        }}
                                        src={article.actor.image}
                                        alt=''
                                    />
                                </Link>
                                <div
                                    className={`${clsx(
                                        styles.post_detail_left_top_text
                                    )}`}
                                >
                                    <h6
                                        className={`${clsx(
                                            styles.post_detail_left_top_text_name
                                        )}`}
                                    >
                                        {article.actor.title}
                                    </h6>
                                    <p
                                        className={`${clsx(
                                            styles.post_detail_left_top_text_follow
                                        )}`}
                                    >
                                        __👨‍💻__ followers
                                    </p>
                                    <Link
                                        to={`/${actionsCharactor.removeAccentsAddHephyn(
                                            article.actor.title
                                        )}/${article.actor.uid}`}
                                        className={`${clsx(
                                            styles.post_detail_left_top_text_link
                                        )}`}
                                    >
                                        View full page
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`${clsx(
                                styles.post_detail_middle
                            )} col col-sm-12 col-md-12 col-12 col-lg-6 mt-4`}
                        >
                            <div
                                className={`${clsx(
                                    styles.content_middle_common_card
                                )} flex_center`}
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
                                                e.target.src =
                                                    '/icons8-linkedin.svg';
                                            }}
                                            src='/icons8-linkedin.svg'
                                            alt='avatar_user'
                                        />{' '}
                                        <Link to='#'>Linkedin</Link> likes this
                                    </p>
                                </div>
                                <div
                                    className={
                                        styles.content_middle_share_actor
                                    }
                                >
                                    <Link
                                        to={`/${actionsCharactor.removeAccentsAddHephyn(
                                            article.actor.title
                                        )}/${article.actor.uid}`}
                                    >
                                        <img
                                            onError={(e) => {
                                                e.target.src =
                                                    '/icons8-linkedin.svg';
                                            }}
                                            src={article.actor.image}
                                            alt=''
                                        />
                                        <div>
                                            <span>{article.actor.title}</span>
                                            <span>
                                                @{article.actor.description}
                                            </span>
                                            <span
                                                title={moment(
                                                    article.actor.date
                                                ).format(
                                                    'DD/MM/YYYY HH:mm:ss A'
                                                )}
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
                                                menuItemPosts.handelToogle(
                                                    article.id
                                                )
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
                                                    article.image.length ===
                                                        1 &&
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
                                                                            // eslint-disable-next-line no-useless-escape
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
                                                    article.video.length ===
                                                        1 &&
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
                                                    className={`${clsx(
                                                        styles.video
                                                    )}`}
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
                                                comments.handleToogleComment(
                                                    article.id
                                                )
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
                                            handleButtonCloseContentShareClick={(
                                                e
                                            ) => {
                                                e.stopPropagation();
                                                dispatch(
                                                    shareContents.handleButtonCloseContentShareClick()
                                                );
                                            }}
                                            handleButtonAnyoneShareClick={(
                                                e
                                            ) => {
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
                                            handleContainersDiscardShareClick={(
                                                e
                                            ) => {
                                                e.stopPropagation();
                                                dispatch(
                                                    shareContents.handleContainersDiscardShareClick()
                                                );
                                            }}
                                            handleContentDiscardShareClick={(
                                                e
                                            ) => {
                                                e.stopPropagation();
                                                dispatch(
                                                    shareContents.handleContentDiscardShareClick()
                                                );
                                            }}
                                            handleButtonDiscardShareClick={(
                                                e
                                            ) => {
                                                e.stopPropagation();
                                                dispatch(
                                                    shareContents.handleButtonDiscardShareClick()
                                                );
                                            }}
                                        />
                                    )}
                                {actionsImageViewer.toogleImageViewer &&
                                    actionsImageViewer.idPost ===
                                        article.id && (
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
                        </div>
                        <div
                            className={`${clsx(
                                styles.post_detail_right
                            )} col col-sm-12 col-md-12 col-12 col-lg-3 mt-4`}
                        >
                            <div
                                className={`${clsx(
                                    styles.post_detail_right_top
                                )} post_detail_right_top`}
                            >
                                <Slider {...settings}>
                                    {article.image.length > 0 ? (
                                        (article.image || []).map(
                                            (item, index) => (
                                                <div
                                                    className={`${clsx(
                                                        styles.post_detail_right_image_slider
                                                    )}`}
                                                    key={index}
                                                >
                                                    <img src={item} alt='' />
                                                </div>
                                            )
                                        )
                                    ) : (
                                        <div
                                            className={`${clsx(
                                                styles.post_detail_right_image_slider
                                            )}`}
                                        >
                                            <img
                                                src='https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlua2VkaW58ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=2000'
                                                alt=''
                                            />
                                        </div>
                                    )}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={`${clsx(styles.post_detail_load)}`}>
                    <i
                        className='bx bx-loader bx-spin'
                        style={{ color: '#0077d3' }}
                    ></i>
                </div>
            )}
        </>
    );
}

export default PostDetail;
