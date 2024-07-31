import React from 'react';
import styles from './style/write.module.scss';
import {useNavigate} from "react-router-dom";

const PostControl = () => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate('/community/post');
    }

    return (
        <div className={styles.postControl}>
            <button className={styles.writePost} onClick={onClick}>글쓰기 ➔</button>
        </div>
    );
};

export default PostControl;
