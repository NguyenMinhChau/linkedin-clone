import React, { useEffect } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './CopyrightPolicy.module.css';
import { EmptyState } from 'evergreen-ui';

function CopyrightPolicy() {
    useEffect(() => {
        document.title = 'Copyright Policy | Linkedln';
    }, []);
    return (
        <div className={`${clsx(styles.copyright_policy)}`}>
            <EmptyState
                className={`${clsx(styles.emptystate)}`}
                background='dark'
                title='The page COPYRIGHT POLICY is developing interface...'
                orientation='horizontal'
                icon={
                    <i class='fa-solid fa-code' style={{ color: 'white' }}></i>
                }
                iconBgColor='#0078d4'
                description='Please come back later. Thank you ❤️'
                primaryCta={
                    <EmptyState.PrimaryButton>
                        <Link className='text-white' to='/home'>
                            Go back
                        </Link>
                    </EmptyState.PrimaryButton>
                }
            />
        </div>
    );
}

export default CopyrightPolicy;
