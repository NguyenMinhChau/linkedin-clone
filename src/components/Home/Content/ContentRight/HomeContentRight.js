import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import HomeRightSlider from './HomeRightSlider';
import styles from './ContentRight.module.css';

function HomeContentRight() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        loop: true,
        autoplay: true,
    };
    return (
        <div
            className={`${clsx(
                styles.home_content_col_right
            )} col col-12 col-sm-12 col-md-12 col-3 col-lg-3`}
        >
            <div className={`${clsx(styles.content_right_follow_card)}`}>
                <div className={`${clsx(styles.content_right_title)}`}>
                    <p className='text_bold' style={{ margin: '0' }}>
                        Add to your feed
                    </p>
                    <img src='/image/feed-icon.svg' alt='' />
                </div>
                <ul className={`${clsx(styles.content_right_feed_list)}`}>
                    <li>
                        <Link to='/'>
                            <img
                                src='/icons8-linkedin.svg'
                                alt=''
                                className={`${clsx(
                                    styles.content_right_avatar
                                )} mr-2`}
                            />
                        </Link>
                        <div>
                            <span className='text_bold'>#Linkedin</span>
                            <button>
                                <span className='mr-2'>
                                    <i className='fa-solid fa-plus'></i>
                                </span>{' '}
                                Follow
                            </button>
                        </div>
                    </li>
                    <li>
                        <Link to='/'>
                            <img
                                src='/image/icons8-google.svg'
                                alt=''
                                className={`${clsx(
                                    styles.content_right_avatar
                                )} mr-2`}
                            />
                        </Link>
                        <div>
                            <span className='text_bold'>#Video</span>
                            <button>
                                <span className='mr-2'>
                                    <i className='fa-solid fa-plus'></i>
                                </span>{' '}
                                Follow
                            </button>
                        </div>
                    </li>
                </ul>
                <Link
                    to='/'
                    className={`${clsx(styles.content_right_recommendation)}`}
                >
                    View all recommendations{' '}
                    <img src='/image/right-icon.svg' alt='' className='ml-1' />
                </Link>
            </div>
            <HomeRightSlider settings={settings} />
        </div>
    );
}

export default HomeContentRight;
