import React from "react";
import styles from "../../styles/communitypage.module.scss";
import { Post } from "../../interface/posts";

const Item: React.FC<{ post: Post }> = ({ post }) => {
    return (
        <div className={styles.postItem}>
            <h2>{post.title}</h2>
            <p>날짜: {post.date}</p>
            <p>시간: {post.time}</p>
            <p>장소: {post.location}</p>
            <p>인원: {post.participants}</p>
            <p>{post.description}</p>
        </div>
    );
};

export default Item;
