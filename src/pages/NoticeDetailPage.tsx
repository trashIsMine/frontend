import React from 'react';
import { useParams } from 'react-router-dom';
import { noticedata } from '../util/noticedata';
import styles from '../styles/noticedetailpage.module.scss';

function NoticeDetailPage({ login, setLogin }: { login: boolean; setLogin: React.Dispatch<React.SetStateAction<boolean>> }) {
    if (login) {
        setLogin(true);
    }
    else {
        setLogin(false);
    }
    const { id } = useParams<{ id: string }>();
    const notice = noticedata.find((n) => n.id === parseInt(id || '0'));

    if (!notice) {
        return <div>공지사항을 찾을 수 없습니다.</div>;
    }

    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.title}>{notice.title}</h1>
            <div className={styles.info}>
                <span className={styles.views}>{notice.views}</span>
                <span className={styles.date}>{notice.date}</span>
            </div>
            <div className={styles.imageContainer}>
                <img src={notice.imgSrc} alt={notice.title} className={styles.image} />
            </div>
            <p className={styles.content}>{notice.content}</p>
        </div>
    );
}

export default NoticeDetailPage;
