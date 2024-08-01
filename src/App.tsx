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
import { Post } from "./interface/posts";


function App() {
    const [selectedPlace, setSelectedPlace] = useState<{ lat: number, lng: number } | null>(null);
    const [posts, setPosts] = useState<Post[]>([]);
    // Fetch posts and store them in the state
    useEffect(() => {
        const fetchPosts = async () => {
            axios.get(`http://3.37.252.66:8080/index/articles`)
                .then((response) => {
                    if (response.status === 200) {
                        setPosts(response.data);
                        // console.log('Articles:', response.data);
                        // console.log(articles);
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
        };

        fetchPosts();
    }, []);

    const addPost = (post: Post) => {
        setPosts([...posts, post]);
    };

    const [message, setMessage] = useState('');
    const [login, setLogin] = useState<boolean>(false);

    return (
        <Router>
            <div className="App">
                <TopMenu login={login} setLogin={setLogin}/>
                <Routes>
                    <Route path={`${process.env.PUBLIC_URL}/`} element={<LandingPage login={login} setLogin={setLogin}/>} />
                    <Route path={`${process.env.PUBLIC_URL}/map`} element={<MapPage selectedPlace={selectedPlace} login={login} setLogin={setLogin}/>} />
                    <Route path={`${process.env.PUBLIC_URL}/intro`} element={<IntroPage login={login} setLogin={setLogin}/>} />
                    <Route path={`${process.env.PUBLIC_URL}/login`} element={<LoginPage login={login} setLogin={setLogin}/>} />
                    <Route path={`${process.env.PUBLIC_URL}/signup`} element={<SignupPage login={login} setLogin={setLogin}/>} />
                    <Route path={`${process.env.PUBLIC_URL}/notices`} element={<NoticePage login={login} setLogin={setLogin}/>} />
                    <Route path={`${process.env.PUBLIC_URL}/community`} element={<CommunityPage posts={ppost} login={login} setLogin={setLogin}/>} />
                    <Route path={`${process.env.PUBLIC_URL}/community/post`} element={<CreatePostPage setSelectedPlace={setSelectedPlace} addPost={addPost} login={login} setLogin={setLogin}/>} />
                    <Route path="/notice/:id" element={<NoticeDetailPage login={login} setLogin={setLogin}/>} />
                    <Route path="/post/:id" element={<PostDetailPage posts={posts} login={login} setLogin={setLogin}/>} />
                    <Route path="/mypage" element={<MyPage login={login} setLogin={setLogin}/>} />
                    <Route path="/mypage/edit" element={<EditProfilePage login={login} setLogin={setLogin}/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
