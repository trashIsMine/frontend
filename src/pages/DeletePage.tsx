import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/deletepage.module.scss';

const DeletePage: React.FC = () => {
    const [confirmChecked, setConfirmChecked] = useState(false);

    return (
        <div className={styles['delete-account-container']}>
            <h1 className={styles.title}>탈퇴 안내</h1>
            <p className={styles.description}>회원탈퇴를 진행하기 전에 아래의 내용을 꼭 확인해주세요.</p>

            <div className={styles.checklist}>
                <div className={styles['check-item']}>
                    <div className={styles['check-item-header']}>
                        <label htmlFor="deleteAll" className={styles['green-text']}>탈퇴 후 계정안내는 모두 삭제됩니다.</label>
                        <input type="checkbox" id="deleteAll" />
                    </div>
                    <ul>
                        <li>포함된 워크스페이스: 회원이 포함되어있던 워크스페이스 목록 삭제</li>
                        <li>프로필 정보: 이메일 주소, 이름, 전화번호, 비밀번호 정보 삭제</li>
                    </ul>
                </div>

                <div className={styles['check-item']}>
                    <div className={styles['check-item-header']}>
                        <label htmlFor="retainSome" className={styles['green-text']}>탈퇴 후 일부 정보는 남아있습니다.</label>
                        <input type="checkbox" id="retainSome" />
                    </div>
                    <ul>
                        <li>활동 내역: 회원이 업로드한 지원자 정보/파일, 회원이 남긴 지원자 평가내용</li>
                    </ul>
                </div>
            </div>

            <div className={styles.confirmation}>
                <label htmlFor="confirmation">안내사항을 모두 확인했습니다.</label>
                <input
                    type="checkbox"
                    id="confirmation"
                    checked={confirmChecked}
                    onChange={() => setConfirmChecked(!confirmChecked)}
                />
            </div>

            <div className={styles.buttons}>
                <Link to="/">
                    <button className={styles['back-button']}>뒤로가기</button>
                </Link>
                <button className={styles['delete-button']} disabled={!confirmChecked}>회원탈퇴</button>
            </div>
        </div>
    );
};

export default DeletePage;
