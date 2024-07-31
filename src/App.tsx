import React, {useEffect, useState} from 'react';
import './App.css';
import LandingPage from "./pages/LandingPage";
import TopMenu from "./components/TopMenu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MapPage from "./pages/MapPage";
import IntroPage from "./pages/IntroPage";
import LoginPage from "./pages/LoginPage";
import NoticePage from "./pages/NoticePage";
import CommunityPage from "./pages/CommunityPage";
import CreatePostPage from "./pages/CreatePostPage";
import axios from "axios";
import NoticeDetailPage from "./pages/NoticeDetailPage";
import PostDetailPage from "./pages/PostDetailPage";
import {ppost} from "./util/communitydata";
import MyPage from "./pages/MyPage";
import EditProfilePage from "./pages/EditProfilePage";
import SignupPage from "./pages/SignupPage";

interface Post {
    title: string;
    date: string;
    time: string;
    address: string;
    people: string;
    description: string;
    place: { lat: number, lng: number };
}

function App() {
    const [selectedPlace, setSelectedPlace] = useState<{ lat: number, lng: number } | null>(null);
    const [posts, setPosts] = useState<Post[]>([]);

    const addPost = (post: Post) => {
        setPosts([...posts, post]);
    };

    const [message, setMessage] = useState('');

    return (
        <Router>
            <div className="App">
                <TopMenu />
                <Routes>
                    <Route path={`${process.env.PUBLIC_URL}/`} element={<LandingPage />} />
                    <Route path={`${process.env.PUBLIC_URL}/map`} element={<MapPage selectedPlace={selectedPlace} />} />
                    <Route path={`${process.env.PUBLIC_URL}/intro`} element={<IntroPage />} />
                    <Route path={`${process.env.PUBLIC_URL}/login`} element={<LoginPage />} />
                    <Route path={`${process.env.PUBLIC_URL}/signup`} element={<SignupPage />} />
                    <Route path={`${process.env.PUBLIC_URL}/notices`} element={<NoticePage />} />
                    <Route path={`${process.env.PUBLIC_URL}/community`} element={<CommunityPage posts={ppost} />} />
                    <Route path={`${process.env.PUBLIC_URL}/community/post`} element={<CreatePostPage setSelectedPlace={setSelectedPlace} addPost={addPost} />} />
                    <Route path="/notice/:id" element={<NoticeDetailPage />} />
                    <Route path="/post/:id" element={<PostDetailPage />} />
                    <Route path="/mypage" element={<MyPage />} />
                    <Route path="/mypage/edit" element={<EditProfilePage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
