import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './RightHeaderItems.module.css';

function ModalWork({ handelToogle, handleModalContent }) {
    return (
        <div
            className={`${clsx(styles.right_work_modal_container)}`}
            onClick={handelToogle}
        >
            <div
                className={`${clsx(
                    styles.right_work_modal_content
                )} text-white modal-content`}
                onClick={handleModalContent}
            >
                <h4 className='text-white'>Work</h4>
                <div
                    className={`${clsx(
                        styles.right_work_modal_close
                    )} workClose`}
                    onClick={handelToogle}
                >
                    <i className='fa-solid fa-times text-white'></i>
                </div>
                <div
                    className='card mt-5'
                    style={{
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(0,0,0,1)',
                    }}
                >
                    <div
                        className='card-header'
                        style={{
                            borderBottomColor: 'rgba(0,0,0,1)',
                            fontWeight: 'bold',
                        }}
                    >
                        Visit More LinkedIn Products
                    </div>
                    <div
                        className={`${clsx(
                            styles.right_work_top_list
                        )} card-body`}
                    >
                        <Link to='/learning' onClick={handelToogle}>
                            <div
                                className={`${clsx(
                                    styles.right_work_modal_top_image
                                )}`}
                            >
                                <i className='fa-solid fa-chalkboard'></i>
                            </div>
                            <div
                                className={`${clsx(
                                    styles.right_work_modal_top_text
                                )}`}
                            >
                                Learning
                            </div>
                        </Link>
                        <Link to='/insights' onClick={handelToogle}>
                            <div
                                className={`${clsx(
                                    styles.right_work_modal_top_image
                                )}`}
                            >
                                <i className='fa-solid fa-info'></i>
                            </div>
                            <div
                                className={`${clsx(
                                    styles.right_work_modal_top_text
                                )}`}
                            >
                                Insights
                            </div>
                        </Link>
                        <Link to='/post-a-job' onClick={handelToogle}>
                            <div
                                className={`${clsx(
                                    styles.right_work_modal_top_image
                                )}`}
                            >
                                <i className='fa-brands fa-usps'></i>
                            </div>
                            <div
                                className={`${clsx(
                                    styles.right_work_modal_top_text
                                )}`}
                            >
                                Post a job
                            </div>
                        </Link>
                        <Link to='/advertise' onClick={handelToogle}>
                            <div
                                className={`${clsx(
                                    styles.right_work_modal_top_image
                                )}`}
                            >
                                <i className='fa-solid fa-rectangle-ad'></i>
                            </div>
                            <div
                                className={`${clsx(
                                    styles.right_work_modal_top_text
                                )}`}
                            >
                                Advertise
                            </div>
                        </Link>
                        <Link to='/find-leads' onClick={handelToogle}>
                            <div
                                className={`${clsx(
                                    styles.right_work_modal_top_image
                                )}`}
                            >
                                <i className='fa-solid fa-compass'></i>
                            </div>
                            <div
                                className={`${clsx(
                                    styles.right_work_modal_top_text
                                )}`}
                            >
                                Find Leads
                            </div>
                        </Link>
                        <Link to='/groups' onClick={handelToogle}>
                            <div
                                className={`${clsx(
                                    styles.right_work_modal_top_image
                                )}`}
                            >
                                <i className='fa-solid fa-people-line'></i>
                            </div>
                            <div
                                className={`${clsx(
                                    styles.right_work_modal_top_text
                                )}`}
                            >
                                Groups
                            </div>
                        </Link>
                        <Link to='/services-marketplace' onClick={handelToogle}>
                            <div
                                className={`${clsx(
                                    styles.right_work_modal_top_image
                                )}`}
                            >
                                <i className='fa-solid fa-money-bill-trend-up'></i>
                            </div>
                            <div
                                className={`${clsx(
                                    styles.right_work_modal_top_text
                                )}`}
                            >
                                Services Marketplace
                            </div>
                        </Link>
                        <Link to='/salary' onClick={handelToogle}>
                            <div
                                className={`${clsx(
                                    styles.right_work_modal_top_image
                                )}`}
                            >
                                <i className='fa-solid fa-money-bill-transfer'></i>
                            </div>
                            <div
                                className={`${clsx(
                                    styles.right_work_modal_top_text
                                )}`}
                            >
                                Salary
                            </div>
                        </Link>
                    </div>
                </div>
                <div
                    class='card mt-5'
                    style={{
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(0,0,0,1)',
                    }}
                >
                    <div
                        class='card-header'
                        style={{
                            borderBottomColor: 'rgba(0,0,0,1)',
                            fontWeight: 'bold',
                        }}
                    >
                        LinkedIn Business Services
                    </div>
                    <div class='card-body'>
                        <Link
                            to='/talent-solutions'
                            className='text-white mb-2'
                        >
                            <p className='margin-0'>Talent Solutions</p>
                            <p
                                className='margin-0'
                                style={{ fontSize: '12px' }}
                            >
                                Find, attract and recruit talent
                            </p>
                        </Link>
                        <Link to='/sales-solutions' className='text-white mb-2'>
                            <p className='margin-0'>Sales Solutions</p>
                            <p
                                className='margin-0'
                                style={{ fontSize: '12px' }}
                            >
                                Unlock sales opportunities
                            </p>
                        </Link>
                        <Link
                            to='/post-a-job-for-free'
                            className='text-white mb-2'
                        >
                            <p className='margin-0'>Post a job for free</p>
                            <p
                                className='margin-0'
                                style={{ fontSize: '12px' }}
                            >
                                Get your job in front of quality candidates
                            </p>
                        </Link>
                        <Link
                            to='/marketing-solutions'
                            className='text-white mb-2'
                        >
                            <p className='margin-0'>Marketing Solutions</p>
                            <p
                                className='margin-0'
                                style={{ fontSize: '12px' }}
                            >
                                Acquire customers and grow your business
                            </p>
                        </Link>
                        <Link to='/learning-solutions' className='text-white'>
                            <p className='margin-0'>Learning Solutions</p>
                            <p
                                className='margin-0'
                                style={{ fontSize: '12px' }}
                            >
                                Develop talent across your organization
                            </p>
                        </Link>
                    </div>
                    <div
                        class='card-footer text-muted'
                        style={{
                            borderTopColor: 'rgba(0,0,0,1)',
                        }}
                    >
                        <Link
                            to='/create-a-company-page'
                            className='text-white'
                        >
                            Create a Company Page{' '}
                            <span>
                                <i className='fa-solid fa-plus ml-2'></i>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalWork;
