import React from 'react';
import NoticeItem from '../components/noticepagecomponent/NoticeItem';
import styles from '../styles/noticepage.module.scss';

function NoticePage() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.noticeContainer}>
                <h1>공지사항</h1>
                <div className={styles.noticeList}>
                    <NoticeItem
                        date="2024년 07월 03일"
                        title="플로깅과 함께하는 ECO 마라톤"
                        description="조선해쉬테라프 호텔에서 주관하는 에코 마라톤이 열립니다. ECO 마라톤에 참가할 수 있는 이벤트가 열립니다."
                        views="450 views"
                        imgSrc="/path/to/image1.jpg" // 실제 이미지 경로로 수정
                    />
                    <NoticeItem
                        date="2024년 07월 02일"
                        title="세계 환경의 날 기념 플로깅 이벤트"
                        description="세계 환경의 날 기념으로 플로깅 이벤트가 열립니다. 함께 환경을 보호하는 시간을 가져봅시다."
                        views="1000 views"
                        imgSrc="/path/to/image2.jpg" // 실제 이미지 경로로 수정
                    />
                    <NoticeItem
                        date="2024년 07월 01일"
                        title="ECORUNNER, ABC마트와 함께하는 플로깅 챌린지!"
                        description="ECORUNNER와 ABC마트가 함께하는 플로깅 챌린지가 열립니다. 참가자 전원에게 기념품이 제공됩니다."
                        views="5000 Reviews"
                        imgSrc="/path/to/image3.jpg" // 실제 이미지 경로로 수정
                    />
                    <NoticeItem
                        date="2024년 07월 01일"
                        title="남이섬에서 진행하는 플로깅 이벤트!"
                        description="남이섬에서 플로깅 이벤트가 열립니다. 참가자 전원에게 기념품이 제공됩니다."
                        views="450 Reviews"
                        imgSrc="/path/to/image4.jpg" // 실제 이미지 경로로 수정
                    />
                </div>
            </div>
        </div>
    );
}

export default NoticePage;