import React from 'react';
import styles from '../styles/intropage.module.scss';
import intro1 from '../images/intro1.png';
import intro2 from '../images/intro2.png';
import intro3 from '../images/intro3.png';
import intro4 from '../images/intro4.png';

function IntroPage() {
    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <div className={styles.text}>
                    <h1>01</h1>
                    <h2>일상이 된 기후위기<br />우리는 무엇을 할 수 있을까요?</h2>
                    <p>
                        역사상 유례없는 폭염과 폭우로<br />
                        전 세계 곳곳에서 많은 피해가 발생하고 있습니다.<br /><br />
                        기후위기라는 거대한 문제를 개인 또는 단일한 주체의 힘만으로<br />
                        해결하는 것은 어렵습니다.<br /><br />
                        안녕! 함께함께 플랫폼에서 다양한 주체와 분야의<br />
                        사람들과 함께 이 문제를 극복해나가고자 합니다.
                    </p>
                </div>
                <div className={styles.image}>
                    <img src={intro1} alt="기후위기 이미지 1" />
                </div>
            </div>
            <div className={`${styles.section} `}>
                <div className={styles.image}>
                    <img src={intro2} alt="기후위기 이미지 2" />
                </div>
                <div className={styles.text}>
                    <h1>02</h1>
                    <h2>기후위기의 심각성</h2>
                    <p>
                        산업화 이후 지구의 평균 온도는 1도 상승하였습니다.<br />
                        현재 속도라면 2030~52년 사이 기온 상승폭이 1.5도를 초과하게 됩니다.<br /><br />
                        지구의 온도가 1.5도 이상 상승하면 어떤 위험이<br />
                        발생하게 될까요?
                    </p>
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.text}>
                    <h1>03</h1>
                    <h2>시민의 주도적 참여</h2>
                    <p>
                        안녕! 함께함께 플랫폼에서는 기후위기 해결을 위해 시민이 주도적으로<br />
                        아이디어를 내고, 사례를 공유하며 기업과 단체,<br />
                        국가의 참여를 촉구합니다.<br /><br />
                        환경보호를 위한 일이라면 무엇이든 제안하고 참여해주세요!
                    </p>
                </div>
                <div className={styles.image}>
                    <img src={intro3} alt="시민의 주도적 참여 이미지" />
                </div>
            </div>
            <div className={`${styles.section}`}>
                <div className={styles.image}>
                    <img src={intro4} alt="문제해결을 위한 행동 이미지" />
                </div>
                <div className={styles.text}>
                    <h1>04</h1>
                    <h2>문제해결을 위한 행동</h2>
                    <p>
                        자원봉사는 환경 정화·보호 중심의 활동에서 벗어나<br />
                        온실가스 감축을 중심으로 활동 분야의 확장을 꿈꿉니다.<br /><br />
                        전통적 자원봉사 영역과 기후위기라는 이슈의<br />
                        결합을 통해 우리는 탄소중립 사회로<br />
                        나아가고자 합니다.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default IntroPage;
