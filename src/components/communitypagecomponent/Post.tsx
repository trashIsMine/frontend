// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import styles from './style/post.module.scss';
// import { ppost } from "../../util/communitydata";
// import {Post} from "../../interface/posts";
//
// interface PopularPostsProps {
//     posts: Post[];
// }
//
// const PopularPosts: React.FC<PopularPostsProps> = ({posts}) => {
//     const navigate = useNavigate(); // Initialize navigate function
//
//     const goToPostDetail = (id: number) => {
//         navigate(`/post/${id}`); // Navigate to the post detail page
//     };
//
//     // return (
//     //     <section className={styles.popularPosts}>
//     //         {ppost.map((post) => (
//     //             <div className={styles.post} key={post.id} onClick={() => goToPostDetail(post.id)}>
//     //                 <img src={post.imgSrc} alt={post.title} />
//     //                 <div className={styles.postDetails}>
//     //                     <h3>{post.title}</h3>
//     //                     <p>{post.location} | {post.participants} | {post.time}</p>
//     //                     <p>{post.description}</p>
//     //                     <span>{post.views} views</span>
//     //                 </div>
//     //             </div>
//     //         ))}
//     //     </section>
//     // );
//     return (
//         <section className={styles.popularPosts}>
//             {posts.map((posts) => (
//                 <div className={styles.post} key={posts.id} onClick={() => goToPostDetail(posts.id)}>
//                     {/*<img src={posts.imgSrc} alt={posts.title} />*/}
//                     <img src={posts.imageFile} alt={posts.title}/>
//
//                     <div className={styles.postDetails}>
//                         <h3>{posts.title}</h3>
//                         <p>{posts.location} | {posts.participants} | {posts.time}</p>
//                         <p>{posts.description}</p>
//                         <span>{posts.views} views</span>
//                     </div>
//                 </div>
//             ))}
//         </section>
//     );
// };
//
// export default PopularPosts;

import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styles from './style/post.module.scss';
import { ppost } from "../../util/communitydata";
import {getPost, Post} from "../../interface/posts";

interface PopularPostsProps {
    getposts: getPost[];
}

const PopularPosts: React.FC<PopularPostsProps> = ({ getposts }) => {
    const navigate = useNavigate();
    const [imageURLs, setImageURLs] = useState<string[]>([]);

    useEffect(() => {
        const urls = getposts.map((post) => {
            return post.imagePath; // 이미 URL인 경우
        });
        setImageURLs(urls);

        // 컴포넌트가 언마운트될 때 Object URLs을 해제하여 메모리 누수를 방지합니다.
        return () => {
            urls.forEach((url) => URL.revokeObjectURL(url));
        };
    }, [getposts]);

    const goToPostDetail = (id: number) => {
        navigate(`/post/${id}`);
    };

    return (
        <section className={styles.popularPosts}>
            {getposts.map((post, index) => (
                <div className={styles.post} key={post.id} onClick={() => goToPostDetail(post.id)}>
                    <img src={post.downloadUrl} alt={post.title} />
                    <div className={styles.postDetails}>
                        <h3>{post.title}</h3>
                        <p>{post.location} | {post.participants}명 모집 | {post.time}</p>
                        <p>{post.description+"..."}</p>
                        <span>{post.views} views</span>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default PopularPosts;

