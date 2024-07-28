import React from 'react';
import styles from './style/write.module.scss';

const PostControl: React.FC = () => {
    return (
        <div className={styles.postControl}>
            <button className={styles.writePost}>글쓰기 ➔</button>
            <select className={styles.sortPosts}>
                <option>Most Recent</option>
                <option>Highest Rated</option>
            </select>
        </div>
    );
};

export default PostControl;
