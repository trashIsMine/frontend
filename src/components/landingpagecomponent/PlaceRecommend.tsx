import React from 'react';
import styles from "../landingpagecomponent/style/placerecommend.module.scss";
import mapImage1 from '../../images/map1.png'; // 예시 이미지 경로, 실제 이미지로 대체하세요
import mapImage2 from '../../images/map2.png'; // 예시 이미지 경로, 실제 이미지로 대체하세요
import mapImage3 from '../../images/map3.png'; // 예시 이미지 경로, 실제 이미지로 대체하세요

const PlaceRecommend = () => {
    return (
        <div className={styles.ploggingPlaces}>
            <div className={styles.ploggingHeader}>
                <h2>Best Plogging Places</h2>
                <p>
                    쓰레기가 없는 곳에<br/>
                    사람이 있다.<br/><br/>

                    플로깅 명소를 찾아보고<br/>
                    사람들과 함께 <br/>
                    플로깅을 즐겨보세요.<br/>
                </p>
                <button className={styles.seeMapButton}>See Map</button>
            </div>
            <div className={styles.ploggingCards}>
                <div className={styles.card}>
                    <img src={mapImage1} alt="부산 해운대 해수욕장" />
                    <h3>부산 해운대 해수욕장</h3>
                    <p>누적 참여 플로거 1,400+</p>
                </div>
                <div className={styles.card}>
                    <img src={mapImage2} alt="서울 양재천" />
                    <h3>서울 양재천</h3>
                    <p>누적 참여 플로거 900+</p>
                </div>
                <div className={styles.card}>
                    <img src={mapImage3} alt="서울 남산공원" />
                    <h3>서울 남산공원</h3>
                    <p>누적 참여 플로거 248+</p>
                </div>
            </div>
        </div>
    );
};

export default PlaceRecommend;
