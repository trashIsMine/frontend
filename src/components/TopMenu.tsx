import React from 'react';
import styles from '../styles/logo.module.scss';
import { FaUserCircle, FaBars } from 'react-icons/fa';

function TopMenu() {
    return (
        <nav className={styles.navbar}>
            <div className={styles['left-section']}>
                <a className={styles.logo} href="#landing"> ECORUNNER </a>
                <div className={styles['nav-links']}>
                    <a className={styles['nav-link']} href="#intro">플랫폼 소개</a>
                    <a className={styles['nav-link']} href="#map">지도</a>
                    <a className={styles['nav-link']} href="#community">커뮤니티</a>
                    <a className={styles['nav-link']} href="#notices">공지사항</a>
                </div>
            </div>
            <div className={styles.rightNav}>
                <button className={styles.iconButton} aria-label="User Profile">
                    <FaUserCircle className={styles.icon}/>
                </button>
                <div className={styles.divider}></div>
                <button className={styles.iconButton} aria-label="Menu">
                    <FaBars className={styles.icon}/>
                </button>
            </div>
        </nav>
    );
}

export default TopMenu;
