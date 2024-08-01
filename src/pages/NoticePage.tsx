import React from 'react';
import NoticeItem from '../components/noticepagecomponent/NoticeItem';
import styles from '../styles/noticepage.module.scss';
import { noticedata } from "../util/noticedata";
import { useNavigate } from "react-router-dom";

function NoticePage({ login, setLogin }: { login: boolean; setLogin: React.Dispatch<React.SetStateAction<boolean>> }) {
    if (login) {
        setLogin(true);
    }
    else {
        setLogin(false);
    }

    const navigate = useNavigate();

    const handleNoticeClick = (id: number) => {
        navigate(`/notice/${id}`);
    };

    return (
        <div className={styles.pageContainer}>
            <div className={styles.noticeContainer}>
                <div className={styles.noticeList}>
                    {noticedata.map((post, index) => (
                        <NoticeItem
                            key={index}
                            date={post.date}
                            title={post.title}
                            description={post.description}
                            views={post.views}
                            imgSrc={post.imgSrc}
                            onClick={() => handleNoticeClick(post.id)} // NoticeItem 클릭 핸들러 추가
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NoticePage;
