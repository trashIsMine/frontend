import React from 'react';
import styles from './style/noticeitem.module.scss';

interface NoticeItemProps {
    date: string;
    title: string;
    description: string;
    views: string;
    imgSrc: string;
}

const NoticeItem = ({ date, title, description, views, imgSrc } : NoticeItemProps) => {
    return (
        <div className={styles.noticeItem}>
            <div className={styles.imageContainer}>
                <img src={imgSrc} alt={title} />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.date}>{date}</div>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
                <div className={styles.views}>{views}</div>
            </div>
        </div>
    );
};

export default NoticeItem;
