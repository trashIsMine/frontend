import React from "react";
import {getPost} from "../interface/posts";
import styles from "../styles/detailpanel.module.scss"
import {useNavigate} from "react-router-dom";

interface pannelprops {
    post : getPost;
}

function DetailPannel( {post} : pannelprops) {
    const navigate = useNavigate();
    const onClick = () => {
        navigate(`/post/${post.id}`)
    }
    if (!post) return null;  // 포스트 정보가 없다면 아무것도 표시하지 않음

    return (
        <div className={styles.detailPanel}>
            <h2>{post.title}</h2>
            <div className={styles.arr}>
                <p className={styles.left}><strong>Date:</strong></p> <p className={styles.center}>{post.date}</p>
            </div>
            <div className={styles.arr}>
                <p className={styles.left}><strong>Time:</strong></p> <p className={styles.center}>{post.time}</p>
            </div>
            <div className={styles.arr}>
                <p className={styles.left}><strong>Location:</strong></p> <p className={styles.center}>{post.location}</p>
            </div>
            <div className={styles.arr}>
                <p className={styles.left}><strong>Description:</strong></p> <p className={styles.center}>{post.description}</p>
            </div>
            <button className={styles.button} onClick={onClick}>게시글로 이동 ➔</button>
        </div>
    );
}

export default DetailPannel;