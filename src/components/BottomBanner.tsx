import React from 'react';
import styles from '../styles/bottombanner.module.scss';

function BottomBanner() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerLeft}>
                <div className={styles.logo}>ECORUNNER</div>
                <div className={styles.description}>
                    Provide best experience with Plogging
                </div>
                <div className={styles.copyright}>
                    2024 all Right Reserved Term of use ECORUNNER
                </div>
            </div>
            <div className={styles.footerRight}>
                <div className={styles.footerColumn}>
                    <div className={styles.columnTitle}>Information</div>
                    <a href="intro" className={styles.footerLink}>플랫폼 소개</a>
                    <a href="map" className={styles.footerLink}>지도</a>
                    <a href="community" className={styles.footerLink}>커뮤니티</a>
                    <a href="notices" className={styles.footerLink}>공지사항</a>
                </div>
                <div className={styles.footerColumn}>
                    <div className={styles.columnTitle}>Company</div>
                    <a href="career" className={styles.footerLink}>Career</a>
                    <a href="story" className={styles.footerLink}>Our story</a>
                </div>
            </div>
        </div>
    );
}

export default BottomBanner;
