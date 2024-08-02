import React from "react";
import styles from "../styles/markercontent.module.scss";
import { getPost } from "../interface/posts";
import {useNavigate} from "react-router-dom";

interface PostContentProps {
    post: getPost;
    onClose: () => void;
}

function MarkerContent({ post, onClose }: PostContentProps) {
    // const navigate = useNavigate();
    // onClick 함수에서 백틱을 사용하여 템플릿 리터럴을 적용
    // const onClick = () => {
    //     navigate(`/post/${post.id}`);
    // }
    return (
        <div className={styles.container}>
            <h4>{post.title}</h4>
            <div className={styles.arr}>
                <p className={styles.left}>Date:</p> <p className={styles.center}>{post.date}</p>
            </div>
            <div className={styles.arr}>
                <p className={styles.left}>Time:</p> <p className={styles.center}>{post.time}</p>
            </div>
            <div className={styles.arr}>
                <p className={styles.left}>Location:</p> <p className={styles.center}>{post.location}</p>
            </div>
            {/*<button onClick={onClose}>닫기</button>*/}
        </div>
    );
}

export default MarkerContent;