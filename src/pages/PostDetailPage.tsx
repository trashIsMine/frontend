import React from 'react';
import { useParams } from 'react-router-dom';
import { ppost } from '../util/communitydata';
import styles from '../styles/postdetailpage.module.scss';

function PostDetailPage() {
    const { id } = useParams<{ id: string }>();
    const post = ppost.find(p => p.id === parseInt(id || '0'));

    if (!post) {
        return <div>게시글을 찾을 수 없습니다.</div>;
    }

    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.info}>
                <span className={styles.date}>{post.date}</span>
                <span className={styles.views}>{post.views} views</span>
            </div>
            <div className={styles.imageContainer}>
                {/*<img src={post.image} alt={post.title} className={styles.image} />*/}
            </div>
            <p className={styles.content}>{post.content}</p>
        </div>
    );
}

export default PostDetailPage;
