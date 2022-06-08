import React, { useEffect } from 'react';
import clsx from 'clsx';
import { Navigate } from 'react-router-dom';
import HomeHiring from './HomeHiring';
import { HeaderHome, HomeContent } from './';
import { useUserHook } from '../../getData';
import styles from './Home.module.css';

function Home() {
    const user = useUserHook();
    useEffect(() => {
        document.title = 'Feed | Linkedln';
    }, []);
    return (
        <>
            {user ? (
                <div className={`${clsx(styles.home)} home_custom`}>
                    <HeaderHome />
                    <HomeHiring />
                    <HomeContent />
                </div>
            ) : (
                <Navigate to='/signin' />
            )}
        </>
    );
}

export default Home;
