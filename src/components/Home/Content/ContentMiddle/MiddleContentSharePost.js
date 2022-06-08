import React from 'react';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { photos, videos, articleContents } from '../../../../reducers';
import { getData } from '../../../';
import styles from './ContentMiddle.module.css';

function MiddleContentSharePost() {
    const user = getData.useUserHook();
    const dispatch = useDispatch();
    return (
        <div className={`${clsx(styles.content_middle_share_box)} flex_center`}>
            <div
                className={`${clsx(
                    styles.content_middle_start_post
                )} mb-2 mr-auto`}
            >
                <img
                    onError={(e) => (e.target.src = '/icons8-linkedin.svg')}
                    src={user.photoURL ? user.photoURL : ''}
                    title={user.displayName ? user.displayName : ''}
                    alt='user_avatar'
                />
                <button
                    className={`${clsx(styles.content_middle_button_post)}`}
                    onClick={() => {
                        dispatch(articleContents.handleToogleArticle());
                    }}
                >
                    Share what you are learning these days
                </button>
            </div>
            <div className={`${clsx(styles.content_middle_post_category)}`}>
                <button onClick={() => dispatch(photos.handleTooglePhoto())}>
                    <img
                        className='mr-1'
                        src='https://img.icons8.com/external-creatype-blue-field-colourcreatype/64/000000/external-picture-tools-design-creatype-blue-field-colourcreatype.png'
                        alt='icon_photo'
                    />
                    <span className='text_bold'>Photo</span>
                </button>
                <button onClick={() => dispatch(videos.handleToogleVideo())}>
                    <img
                        className='mr-1'
                        src='https://img.icons8.com/fluency/48/000000/video.png'
                        alt='icon_photo'
                    />
                    <span className='text_bold'>Video</span>
                </button>
                <button>
                    <img
                        className='mr-1'
                        src='https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-event-advertising-kiranshastry-gradient-kiranshastry-1.png'
                        alt='icon_photo'
                    />
                    <span className='text_bold'>Event</span>
                </button>
                <button
                    onClick={() =>
                        dispatch(articleContents.handleToogleArticle())
                    }
                >
                    <img
                        className='mr-1'
                        src='https://img.icons8.com/external-itim2101-blue-itim2101/64/000000/external-article-blogger-and-influencer-itim2101-blue-itim2101-1.png'
                        alt='icon_photo'
                    />
                    <span className='text_bold'>Write Article</span>
                </button>
            </div>
        </div>
    );
}

export default MiddleContentSharePost;
