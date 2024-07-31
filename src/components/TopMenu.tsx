import React from 'react';
import styles from '../styles/topmenu.module.scss';
import { FaUserCircle, FaBars } from 'react-icons/fa';
import {useNavigate} from "react-router-dom";

function TopMenu() {
    const navigate = useNavigate();

    const handleUserProfileClick = () => {
        navigate('/login');
    };

    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <div className={styles['left-section']}>
                    <a className={styles.logo} href="/"> ECORUNNER </a>
                    <div className={styles['nav-links']}>
                        <a className={styles['nav-link']} href="/intro">플랫폼 소개</a>
                        <a className={styles['nav-link']} href="/map">지도</a>
                        <a className={styles['nav-link']} href="/community">커뮤니티</a>
                        <a className={styles['nav-link']} href="/notices">공지사항</a>
                    </div>
                </div>
                <div className={styles.rightNav}>
                    <button className={styles.iconButton} aria-label="User Profile" onClick={handleUserProfileClick}>
                        <FaUserCircle className={styles.icon}/>
                    </button>
                    <div className={styles.divider}></div>
                    <button className={styles.iconButton} aria-label="Menu">
                        <FaBars className={styles.icon}/>
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default TopMenu;
