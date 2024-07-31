import React from 'react';
import styles from './style/post.module.scss';
import {ppost} from "../../util/communitydata";

export interface Post {
    title: string;
    location: string;
    participants: string;
    time: string;
    views: number;
    image: string;
    description: string;
}

const PopularPosts = () => {
    // return (
    //     // <section className={styles.popularPosts}>
    //     //     {/*<h2 className={styles.h2}>인기글</h2>*/}
    //     //     {posts.map((post, index) => (
    //     //         <div className={styles.post} key={index}>
    //     //             {/*<img src={post.imgSrc} alt={post.title} />*/}
    //     //             <div className={styles.postDetails}>
    //     //                 <h3>{post.title}</h3>
    //     //                 <p>{post.location} | {post.participants} | {post.time}</p>
    //     //                 <p>{post.description}</p>
    //     //                 <span>{post.views} views</span>
    //     //             </div>
    //     //         </div>
    //     //     ))}
    //     // </section>
    //     null
    // );
    return null;
};

export default PopularPosts;
