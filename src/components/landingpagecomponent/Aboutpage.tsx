import React from 'react';
import styles from './style/aboutpage.module.scss';
import aboutpage1 from '../../images/aboutpage1.png';
import aboutpage2 from '../../images/aboutpage2.png';
import {Link} from "react-router-dom";

function AboutPage() {
    return (
        <div className={styles.aboutPage}>
            <h2>About page</h2>
            <p>플로깅에 참여하고 환경을 보호해 보세요!</p>
            <div className={styles.features}>
                <div className={styles.feature}>
                    <div className={styles['icon-container']}>
                        <Link to={"/map"}>
                            <img src={aboutpage1} alt="Map Icon" />
                        </Link>
                    </div>
                    <h3>지도 확인하기</h3>
                    <p>현재 활성화되고 있는 플로깅 장소를 확인하고,<br/>주변 사람들에게 실시간으로 지원을 요청하세요.</p>
                </div>
                <div className={styles.feature}>
                    <div className={styles['icon-container']}>
                        <Link to={"/community"}>
                            <img src={aboutpage2} alt="Plogging Icon" />
                        </Link>
                    </div>
                    <h3>함께 플로깅하기</h3>
                    <p>커뮤니티를 통해 원하는 사람들과 원하는 장소에서<br/>함께 플로깅을 할 수 있습니다.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
