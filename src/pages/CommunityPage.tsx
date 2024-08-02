import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/communitypage.module.scss';
import BottomBanner from '../components/BottomBanner';
import Header from '../components/communitypagecomponent/Header';
import Filter from '../components/communitypagecomponent/Filter';
import PostControl from '../components/communitypagecomponent/Write';
import Item from '../components/communitypagecomponent/Item';
import PopularPosts from "../components/communitypagecomponent/Post";
import {EmptyPost, getPost, Post} from "../interface/posts";
import axios from "axios";
import {ppost} from "../util/communitydata";
import styless from "../components/communitypagecomponent/style/header.module.scss";

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

    const [search, setSearch] = useState<string>('');
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }
    const onClick = () => {
        const input:string = search;
    }


    const [articles, setArticles] = useState<getPost[]>([])
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
    }, [articles]);

    console.log(articles);


    const navigate = useNavigate();

    const handlePostClick = (id: number) => {
        navigate(`/post/${id}`);
    };

    return (
        <div className={styles.pageContainer}>
            {/*<Header />*/}
            <header className={styless.header}>
                <nav>
                    <ul>
                        <li>플로깅 모집</li>
                        <li>자유게시판</li>
                        <li>이벤트</li>
                    </ul>
                </nav>
                <div className={styless.container}>
                    <PostControl/>
                    <div className={styless.search}>
                        <input type="text" placeholder="Search post..." onChange={onChange}/>
                        <button type="button"><span role="img" aria-label="search">🔍</span></button>
                    </div>
                </div>
            </header>
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
                    <PopularPosts getposts={articles}/>
                </div>
            </div>
            <BottomBanner/>
        </div>
    );
};

export default CommunityPage;
