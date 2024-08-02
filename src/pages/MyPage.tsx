import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/mypage.module.scss';
import BottomBanner from '../components/BottomBanner';

const MyPage = () => {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.secondContainer}>
                {/*<div className={styles.sidebar}>*/}
                {/*    <h2>나의 작성 글</h2>*/}
                {/*    <ul>*/}
                {/*        <li><Link to="/mypage/edit">My write</Link></li>*/}
                {/*    </ul>*/}
                {/*    <h2>회원 정보 수정</h2>*/}
                {/*    <ul>*/}
                {/*        <li><Link to="/mypage/edit">Edit profile</Link></li>*/}
                {/*    </ul>*/}
                {/*    <h2>회원탈퇴</h2>*/}
                {/*    <ul>*/}
                {/*        <li><Link to="/mypage/edit">Delete profile</Link></li>*/}
                {/*    </ul>*/}
                {/*</div>*/}
                <div className={styles.content}>
                    <div>
                        <h1>마이페이지</h1>
                        <p>여기서 작성한 글들을 확인하고 프로필을 수정할 수 있습니다.</p>
                    </div>

                    <div className={styles.buttonContainer}>
                        <Link to="/mypage/posts" className={styles.buttonLink}>
                            <button className={styles.button}>나의 작성 글</button>
                        </Link>
                        <Link to="/mypage/edit" className={styles.buttonLink}>
                            <button className={styles.button}>회원 정보 수정</button>
                        </Link>
                        <Link to="/mypage/delete" className={styles.buttonLink}>
                            <button className={styles.button}>회원탈퇴</button>
                        </Link>
                    </div>

                </div>
            </div>
        <BottomBanner/>
        </div>
    );
};

export default MyPage;
