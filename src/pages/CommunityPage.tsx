import React from 'react';
import Filter from '../components/communitypagecomponent/Filter';
import PopularPosts from '../components/communitypagecomponent/Post';
import PostControl from '../components/communitypagecomponent/Write';
import styles from '../styles/communitypage.module.scss';
import BottomBanner from '../components/BottomBanner';
import Header from '../components/communitypagecomponent/Header';

const CommunityPage: React.FC = () => {
    return (
        <div className={styles.pageContainer}>
            <Header />
            <div className={styles.mainContent}>
                <Filter />
                <div className={styles.content}>
                    <PostControl />
                    <PopularPosts />
                </div>
            </div>
            <BottomBanner />
        </div>
    );
};

export default CommunityPage;
