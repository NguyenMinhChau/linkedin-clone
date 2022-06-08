import React from 'react';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { useArticleContentHook } from '../../../../../getData';
import { articleContents } from '../../../../../reducers';
import styles from '../ContentMiddle.module.css';

function MiddleImageContent() {
    const dispatch = useDispatch();
    const actionsArticleContent = useArticleContentHook();
    return (
        <>
            {actionsArticleContent.images.length > 0 && (
                <h6
                    className='text_bold mt-2'
                    style={{
                        fontFamily: 'Times New Roman',
                    }}
                >
                    Images article
                </h6>
            )}
            <div className={`${clsx(styles.share_image_container)}`}>
                {actionsArticleContent.images &&
                    actionsArticleContent.images.map((url, index) => (
                        <div
                            key={index}
                            className={`${clsx(styles.share_image_item)}`}
                        >
                            <img
                                src={URL.createObjectURL(url)}
                                alt='image_share_post'
                                className={`${clsx(styles.share_image_post)}`}
                            />
                            <span
                                className={`${clsx(
                                    styles.share_image_item_close
                                )}`}
                                onClick={() =>
                                    dispatch(
                                        articleContents.handleDeleteImageItem(
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
        </>
    );
}

export default MiddleImageContent;
