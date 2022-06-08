import React from 'react';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import ReactPlayer from 'react-player';
import { useArticleContentHook } from '../../../../../getData';
import { articleContents } from '../../../../../reducers';
import styles from '../ContentMiddle.module.css';

function MiddleVideoContent() {
    const dispatch = useDispatch();
    const actionsArticleContent = useArticleContentHook();
    return (
        <div className={`${clsx(styles.share_video_container)}`}>
            <input
                type='file'
                accept='video/*'
                name='videoLinks'
                id='videoLinks'
                className={`${clsx(styles.share_video_link)} form-control mt-2`}
                onChange={(e) =>
                    dispatch(
                        articleContents.handleChangeVideoLinks(e.target.files)
                    )
                }
                multiple
                style={{ display: 'none' }}
            />
            {actionsArticleContent.videoLinks.length > 0 && (
                <h6
                    className='text_bold mt-2'
                    style={{
                        fontFamily: 'Times New Roman',
                    }}
                >
                    Videos article
                </h6>
            )}
            <div className={`${clsx(styles.article_video_container)}`}>
                {actionsArticleContent.videoLinks &&
                    actionsArticleContent.videoLinks.map((item, index) => (
                        <div className={`${clsx(styles.article_video_item)}`}>
                            <ReactPlayer
                                key={index}
                                url={URL.createObjectURL(item)}
                                width={'100%'}
                                height={'100%'}
                                controls={true}
                            />
                            <span
                                className={`${clsx(
                                    styles.article_video_item_close
                                )}`}
                                onClick={() =>
                                    dispatch(
                                        articleContents.handleDeleteVideoItem(
                                            index
                                        )
                                    )
                                }
                            >
                                <i className='fa-solid fa-xmark'></i>
                            </span>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default MiddleVideoContent;
