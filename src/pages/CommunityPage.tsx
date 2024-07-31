import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/communitypage.module.scss';
import BottomBanner from '../components/BottomBanner';
import Header from '../components/communitypagecomponent/Header';
import Filter from '../components/communitypagecomponent/Filter';
import PostControl from '../components/communitypagecomponent/Write';
import Item from '../components/communitypagecomponent/Item';
import { Post } from "../interface/posts";

interface CommunityPageProps {
    posts: Post[];
}

const CommunityPage = ({ posts }: CommunityPageProps) => {
    const navigate = useNavigate();

    const handlePostClick = (id: number) => {
        navigate(`/post/${id}`);
    };

    return (
        <div className={styles.pageContainer}>
            <Header />
            <div className={styles.mainContent}>
                <Filter />
                <div className={styles.content}>
                    <PostControl />
                    {posts.map((post) => (
                        <div key={post.id} onClick={() => handlePostClick(post.id)}>
                            <Item post={post} />
                        </div>
                    ))}
                </div>
            </div>
            <BottomBanner />
        </div>
    );
};

export default CommunityPage;
