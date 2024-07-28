import React from 'react';
import styles from './style/filter.module.scss';

const Filter: React.FC = () => {
    return (
        <aside className={styles.filter}>
            <div className={styles.filterCategory}>
                <h3>정렬</h3>
                <label><input type="radio" name="sort" /> 조회순</label>
                <label><input type="radio" name="sort" /> 추천순</label>
                <label><input type="radio" name="sort" /> 최신순</label>
            </div>
            <div className={styles.filterCategory}>
                <h3>장소</h3>
                <label><input type="checkbox" /> 서울</label>
                <label><input type="checkbox" /> 부산</label>
                <label><input type="checkbox" /> 인천</label>
            </div>
            <div className={styles.filterCategory}>
                <h3>인원</h3>
                <label><input type="checkbox" /> 1명 모집</label>
                <label><input type="checkbox" /> 2명 모집</label>
                <label><input type="checkbox" /> 3명 모집</label>
            </div>
        </aside>
    );
};

export default Filter;
