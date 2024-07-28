import React from 'react';
import styles from './style/header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul>
                    <li>플로깅 모집</li>
                    <li>자유게시판</li>
                    <li>이벤트</li>
                </ul>
            </nav>
            <div className={styles.search}>
                <input type="text" placeholder="Search restaurant and cuisines..." />
                <button type="button"><span role="img" aria-label="search">🔍</span></button>
            </div>
        </header>
    );
};

export default Header;
