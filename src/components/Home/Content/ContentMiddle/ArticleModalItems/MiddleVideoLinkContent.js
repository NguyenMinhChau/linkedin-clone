import React from 'react';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import ReactPlayer from 'react-player';
import { useArticleContentHook } from '../../../../../getData';
import { articleContents } from '../../../../../reducers';
import styles from '../ContentMiddle.module.css';

function MiddleVideoLinkContent({ refVideoLink }) {
    const dispatch = useDispatch();
    const actionsArticleContent = useArticleContentHook();
    return (
        <>
            {actionsArticleContent.toogleVideoLink && (
                <div className={`${clsx(styles.share_video_link_container)}`}>
                    <h6
                        className='text_bold mt-2'
                        style={{
                            fontFamily: 'Times New Roman',
                        }}
                    >
                        Video link article
                    </h6>
                    <input
                        type='url'
                        name='videoLink'
                        id='videoLink'
                        className={`${clsx(
                            styles.share_video_link
                        )} form-control mt-2 mb-2 text_bold`}
                        value={actionsArticleContent.videoLink}
                        onChange={(e) =>
                            dispatch(
                                articleContents.handleChangeVideoLink(
                                    e.target.value
                                )
                            )
                        }
                        placeholder='URL video (nếu có)'
                        ref={refVideoLink}
                    />
                    {actionsArticleContent.videoLink && (
                        <ReactPlayer
                            url={actionsArticleContent.videoLink}
                            width={'100%'}
                            height={'360px'}
                            className={`${clsx(
                                styles.article_video_link_item
                            )}`}
                        />
                    )}
                </div>
            )}
        </>
    );
}

export default MiddleVideoLinkContent;
