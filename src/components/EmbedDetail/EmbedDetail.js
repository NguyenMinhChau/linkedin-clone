import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { useHandleCustomeCharacter } from '../Home/Content/ContentMiddle/Togglehandle';
import { db } from '../../firebase';
import { useCommentToogleHook } from '../../getData';
import { imageViewers, comments, shareContents } from '../../reducers';
import ReactPlayer from 'react-player';
import ListActionLike from '../Home/Content/ContentMiddle/ListActionLike';
import Comment from '../Home/Content/ContentMiddle/Comment/Comment';
import styles from './Embed.module.css';

function EmbedDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const actionsCharactor = useHandleCustomeCharacter();
    const actionsComment = useCommentToogleHook();
    const [article, setArticle] = useState(null);
    useEffect(() => {
        db.collection('articles').onSnapshot((snapshot) => {
            const data = snapshot.docs.find((item) => item.id === id);
            setArticle({ id: data.id, ...data.data() });
            document.title =
                'Embedded post ' +
                data.data().actor.title +
                ' on Linkedin | Linkedin';
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className={`${clsx(styles.embed_detail_container)}`}>
            {article ? (
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
                            target='_blank'
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
                                    title={moment(article.actor.date).format(
                                        'DD/MM/YYYY HH:mm:ss A'
                                    )}
                                >
                                    {moment(
                                        article.actor.date.toString()
                                    ).fromNow()}
                                </span>
                            </div>
                        </Link>
                    </div>
                    <div
                        className={`${clsx(styles.content_middle_description)}`}
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
                                            styles.embed_bg_image_content
                                        )}`}
                                        style={{
                                            backgroundImage: `url(${image})`,
                                        }}
                                        onClick={(e) =>
                                            dispatch(
                                                imageViewers.handleImageViewer({
                                                    src: e.target.style.backgroundImage
                                                        .replace('url(', '')
                                                        .replace(')', '')
                                                        // eslint-disable-next-line no-useless-escape
                                                        .replace(/\"/gi, ''),
                                                    idPost: article.id,
                                                })
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
                                        comments.handleToogleComment(article.id)
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
                                    shareContents.handleToogleShare(article.id)
                                )
                            }
                        >
                            <span>Share</span>
                            <i
                                className='bx bx-share ml-1'
                                style={{ color: '#0078d4' }}
                            ></i>
                        </button>
                    </div>
                    {actionsComment.toogleComment &&
                        actionsComment.idPost === article.id && (
                            <Comment idPost={article.id} />
                        )}
                </div>
            ) : (
                <div className={`${clsx(styles.embed_detail_load)}`}>
                    <i
                        className='bx bx-loader bx-spin'
                        style={{ color: '#0077d3' }}
                    ></i>
                </div>
            )}
        </div>
    );
}

export default EmbedDetail;
