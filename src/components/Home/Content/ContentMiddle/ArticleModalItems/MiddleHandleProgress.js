import React from 'react';
import clsx from 'clsx';
import styles from '../ContentMiddle.module.css';

function MiddleHandleProgress({ progress }) {
    return (
        <div
            className={`${clsx(
                styles.share_modal_middle_content,
                styles.share_modal_middle_content_center
            )} mt-3`}
        >
            {progress <= 90 ? (
                <span className={`${clsx(styles.article_loadimage_text)}`}>
                    <span
                        className={`${clsx(styles.article_loadimage_text_1)}`}
                    >
                        Upload pictures - videos and post articles...
                    </span>{' '}
                    <span
                        className={`${clsx(
                            styles.article_loadimage_text_2
                        )} loader`}
                    ></span>
                </span>
            ) : (
                <span className={`${clsx(styles.article_redirect_text)}`}>
                    Redirecting home...
                </span>
            )}
        </div>
    );
}

export default MiddleHandleProgress;
