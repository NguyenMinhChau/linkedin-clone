import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

function NotFound() {
    return (
        <div className='d-flex align-items-center justify-content-center w-100'>
            <div
                className={`${clsx(
                    styles.notfound
                )} card container text-center bg-light`}
            >
                <div className='card-header text_bold'>LINKEDIN</div>
                <div className='card-body'>
                    <h5 className='card-title'>404 PAGE NOT FOUND</h5>
                    <p className='card-text'>
                        <img
                            className={`${clsx(styles.img_fluid)}`}
                            src='https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bm90JTIwZm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=3000'
                            alt='logo_not_found'
                        />
                    </p>
                    <Link to='/home' className='btn btn-primary'>
                        Go back <i class='fa-solid fa-arrow-right ml-2'></i>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
