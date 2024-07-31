import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/mypage.module.scss';

const MyPage = () => {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.sidebar}>
                <h2>My Page</h2>
                <ul>
                    <li><Link to="/mypage/edit">Edit profile</Link></li>
                </ul>
            </div>
            <div className={styles.content}>
                <h1>Welcome to My Page</h1>
                <p>Here you can manage your profile and settings.</p>
            </div>
        </div>
    );
};

export default MyPage;
