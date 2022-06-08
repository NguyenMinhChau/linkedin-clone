import React from 'react';
import clsx from 'clsx';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './ContentRight.module.css';

function HomeRightSlider({settings}) {
    return (
        <div
            className={`${clsx(
                styles.content_right_banner_card
            )} content_right_banner_card`}
        >
            <Slider {...settings}>
                <div>
                    <img
                        src='https://images.unsplash.com/photo-1611944212129-29977ae1398c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJhbm5lciUyMGxpbmtlZGlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000'
                        alt=''
                    />
                </div>
                <div>
                    <img
                        src='https://images.unsplash.com/photo-1615494937430-65d34f6e5aa8?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGlua2VkaW4lMjBhZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=2000'
                        alt=''
                    />
                </div>
                <div>
                    <img
                        src='https://images.unsplash.com/photo-1643967255990-efc4089e6a6d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGxpbmtlZGluJTIwYWRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000'
                        alt=''
                    />
                </div>
                <div>
                    <img
                        src='https://images.unsplash.com/photo-1647964186835-faf8bed7184c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGxpbmtlZGluJTIwYWRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000'
                        alt=''
                    />
                </div>
                <div>
                    <img
                        src='https://images.unsplash.com/photo-1582637376927-4231394efe5b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGxpbmtlZGluJTIwYWRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000'
                        alt=''
                    />
                </div>
            </Slider>
        </div>
    );
}

export default HomeRightSlider;
