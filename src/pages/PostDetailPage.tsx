// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { ppost } from '../util/communitydata';
// import styles from '../styles/postdetailpage.module.scss';
// import {Post} from "../interface/posts";
//
// interface detailpostprops {
//     login: boolean; setLogin: React.Dispatch<React.SetStateAction<boolean>>;
//     posts: Post[];
// }
//
// function PostDetailPage({ posts, login, setLogin }: detailpostprops) {
//     if (login) {
//         setLogin(true);
//     }
//     else {
//         setLogin(false);
//     }
//     const { id } = useParams<{ id: string }>();
//     const post = posts.find(p => p.id === parseInt(id || '0'));
//
//     if (!post) {
//         return <div>게시글을 찾을 수 없습니다.</div>;
//     }
//
//     return (
//         <div className={styles.pageContainer}>
//             <h1 className={styles.title}>{post.title}</h1>
//             <div className={styles.info}>
//                 <span className={styles.date}>{post.date}</span>
//                 <span className={styles.views}>{post.views} views</span>
//             </div>
//             <div className={styles.imageContainer}>
//                 {/*<img src={post.imgSrc} alt={post.title} className={styles.image} />*/}
//                 <img src={post.imageFile} alt={post.title} className={styles.image}/>
//             </div>
//             <p className={styles.content}>{post.content}</p>
//         </div>
//     );
// }
//
// export default PostDetailPage;


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/postdetailpage.module.scss';
import { Post } from '../interface/posts';

interface DetailPostProps {
    login: boolean;
    setLogin: React.Dispatch<React.SetStateAction<boolean>>;
    posts: Post[];
}

function PostDetailPage({ posts, login, setLogin }: DetailPostProps) {
    if (login) {
        setLogin(true);
    } else {
        setLogin(false);
    }

    const { id } = useParams<{ id: string }>();
    const post = posts.find((p) => p.id === parseInt(id || '0'));

    const [imageURL, setImageURL] = useState<string | null>(null);

    useEffect(() => {
        if (post) {
            if (typeof post.imageFile === 'string') {
                setImageURL(post.imageFile); // URL인 경우
            } else if (post.imageFile instanceof File) {
                const url = URL.createObjectURL(post.imageFile);
                setImageURL(url); // File인 경우 URL 생성

                // 컴포넌트가 언마운트될 때 Object URL을 해제하여 메모리 누수를 방지합니다.
                return () => {
                    URL.revokeObjectURL(url);
                };
            }
        }
    }, [post]);

    if (!post) {
        return <div>게시글을 찾을 수 없습니다.</div>;
    }
    console.log(post.imageFile)
    console.log(post)

    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.info}>
                <span className={styles.date}>{post.date}</span>
                <span className={styles.views}>{post.views} views</span>
            </div>
            <div className={styles.imageContainer}>
                {imageURL && <img src={`http://http://3.37.252.66:8080/${post.imageFile}`} alt={post.title} className={styles.image} />}
            </div>
            <p className={styles.content}>{post.content}</p>
        </div>
    );
}

export default PostDetailPage;
