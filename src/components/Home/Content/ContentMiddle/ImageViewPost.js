import React from 'react';
import clsx from 'clsx';
import Slider from 'react-slick';
import styles from './ContentMiddle.module.css';

function ImageViewPost({
    handleImageViewerCloseButton,
    article,
    currentImage,
}) {
    console.log(currentImage);
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        loop: true,
        autoplay: true,
    };
    const articles = new Set([...[currentImage, ...article.image]]);
    // const articles = [...article.image];
    return (
        <div className={`${clsx(styles.view_image_container)} text-white`}>
            <div
                className={`${clsx(
                    styles.view_image_content
                )} view_image_content`}
            >
                <div
                    className={`${clsx(styles.view_image_text_container)}`}
                    style={{ marginBottom: '90px' }}
                >
                    {/* <h5 className='text_underline'>Image Post Viewer</h5> */}
                </div>
                <span
                    className={`${clsx(styles.view_image_icon)} text-danger`}
                    onClick={handleImageViewerCloseButton}
                >
                    <i className='fa-solid fa-rectangle-xmark'></i>
                </span>
                <Slider {...settings}>
                    {Array.from(articles).map((item, index) => (
                        <div key={index}>
                            <div
                                className={`${clsx(
                                    styles.view_image_list_item
                                )}`}
                            >
                                <img
                                    onError={(e) => {
                                        e.target.src = '/image/no_image.png';
                                    }}
                                    src={item}
                                    alt=''
                                    className={`${clsx(
                                        styles.view_image_list_item_image
                                    )}`}
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default ImageViewPost;
