import React from 'react';
import clsx from 'clsx';
import styles from './ContentMiddle.module.css';

function PopupDiscardArticle({
    handleContainersDiscardArticleClick,
    handleContentDiscardArticleClick,
    handleButtonDiscardArticleClick,
}) {
    return (
        <div
            className={`${clsx(styles.modal_bg)}`}
            onClick={handleContainersDiscardArticleClick}
        >
            <div
                className={`${clsx(styles.modal_contents_article_discard)}`}
                onClick={handleContentDiscardArticleClick}
            >
                <div className={`${clsx(styles.modal_top)}`}>
                    <h5 className='mb-3'>Discard draft Article</h5>
                    <span
                        className={`${clsx(styles.modal_close)}`}
                        onClick={handleContainersDiscardArticleClick}
                    >
                        <i className='fa-solid fa-times'></i>
                    </span>
                </div>
                <div
                    className={`${clsx(
                        styles.modal_middle,
                        styles.modal_middle_discard
                    )} flex_center`}
                >
                    <p className={`${clsx(styles.discars_description)}`}>
                        You haven’t finished your post yet. Are you sure you
                        want to leave and discard your draft?
                    </p>
                </div>
                <div
                    className={`${clsx(
                        styles.modal_bottom,
                        styles.role_post_bottom
                    )}`}
                >
                    <button
                        onClick={handleContainersDiscardArticleClick}
                        className={`${clsx(styles.bottom_button_custom)} mr-2`}
                    >
                        Go back
                    </button>
                    <button
                        onClick={handleButtonDiscardArticleClick}
                        className={`${clsx(
                            styles.bottom_button_custom,
                            styles.bottom_button_discard
                        )}`}
                    >
                        Discard
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PopupDiscardArticle;
