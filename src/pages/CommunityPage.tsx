import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/communitypage.module.scss';
import BottomBanner from '../components/BottomBanner';
import Header from '../components/communitypagecomponent/Header';
import Filter from '../components/communitypagecomponent/Filter';
import PostControl from '../components/communitypagecomponent/Write';
import Item from '../components/communitypagecomponent/Item';
import PopularPosts from "../components/communitypagecomponent/Post";
import {EmptyPost, Post} from "../interface/posts";
import axios from "axios";
import {ppost} from "../util/communitydata";

interface CommunityPageProps {
    posts: Post[];
    login: boolean;
    setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const CommunityPage = ({ posts,login, setLogin }: CommunityPageProps) => {
    if (login) {
        setLogin(login);
    }
    else {
        setLogin(login);
    }

    const [articles, setArticles] = useState<Post[]>([])
    const baseUrl = "http://3.37.252.66:8080";

    useEffect(() => {
        axios.get(`${baseUrl}/index/articles`)
            .then((response) => {
                if (response.status === 200) {
                    setArticles(response.data);
                    console.log('Articles:', response.data);
                    console.log(articles);
                } else {
                    alert('Post get failed. Please try again.');
                }
            })
            .catch(error => {
                if (error.response) {
                    alert(`Error: ${error.response.data}`);
                } else {
                    alert('Error during request');
                }
            });
    }, []);

    console.log(articles);


    const navigate = useNavigate();

    const handlePostClick = (id: number) => {
        navigate(`/post/${id}`);
    };

    return (
        <div className={styles.pageContainer}>
            <Header />
            <div className={styles.mainContent}>
                {/*<Filter />*/}
                {/*<PostControl />*/}
                <div className={styles.content}>
                    {/*<div className={styles.postsGrid}>*/}
                    {/*    {posts.map((post) => (*/}
                    {/*        <div key={post.id} onClick={() => handlePostClick(post.id)} className={styles.postItem}>*/}
                    {/*            <Item post={post} />*/}
                    {/*        </div>*/}
                    {/*    ))}*/}
                    {/*</div>*/}
                    <PopularPosts posts={articles}/>
                </div>
            </div>
            <BottomBanner />
        </div>
    );
};

export default CommunityPage;
