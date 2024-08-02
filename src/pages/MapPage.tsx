// import React, { useEffect, useState } from "react";
// import styles from "../styles/mappage.module.scss";
// import ReactDOMServer from "react-dom/server";
// import axios from "axios";
// import { getPost } from "../interface/posts";
// import flat from "../images/flat.png";
// import MarkerContent from "../components/markercontent";
//
// declare global {
//     interface Window {
//         kakao: any;
//     }
// }
//
// interface MapPageProps {
//     selectedPlace: { lat: number; lng: number } | null;
//     login: boolean;
//     setLogin: React.Dispatch<React.SetStateAction<boolean>>;
// }
//
// function MapPage({ selectedPlace, login, setLogin }: MapPageProps) {
//     const [center, setCenter] = useState<{ lat: number; lng: number }>({
//         lat: 33.450701,
//         lng: 126.570667,
//     });
//     const [posts, setPosts] = useState<getPost[]>([]);
//
//     useEffect(() => {
//         const fetchPosts = async () => {
//             try {
//                 const response = await axios.get("http://3.37.252.66:8080/index/articles");
//                 if (response.status === 200) {
//                     setPosts(response.data);
//                 } else {
//                     alert("Post get failed. Please try again.");
//                 }
//             } catch (error) {
//                 if (axios.isAxiosError(error) && error.response) {
//                     alert(`Error: ${error.response.data}`);
//                 } else {
//                     alert("Error during request");
//                 }
//             }
//         };
//
//         fetchPosts();
//     }, []);
//
//     useEffect(() => {
//         const getCurrentLocation = () => {
//             if (navigator.geolocation) {
//                 navigator.geolocation.getCurrentPosition(
//                     (position) => {
//                         const latitude = position.coords.latitude;
//                         const longitude = position.coords.longitude;
//                         setCenter({ lat: latitude, lng: longitude });
//
//                         initializeMap(latitude, longitude);
//                     },
//                     (error) => {
//                         console.error("Error retrieving location:", error);
//                     }
//                 );
//             } else {
//                 console.error("Geolocation is not supported by this browser.");
//             }
//         };
//
//         const initializeMap = (latitude: number, longitude: number) => {
//             const mapContainer = document.getElementById("map");
//             const mapOption = {
//                 center: new window.kakao.maps.LatLng(latitude, longitude),
//                 level: 3,
//             };
//
//             const map = new window.kakao.maps.Map(mapContainer, mapOption);
//
//             const currentMarkerPosition = new window.kakao.maps.LatLng(latitude, longitude);
//             const currentMarker = new window.kakao.maps.Marker({
//                 position: currentMarkerPosition,
//                 title: "현재 위치",
//             });
//             currentMarker.setMap(map);
//             const imageSrc = flat, // 마커이미지의 주소입니다
//                 imageSize = new window.kakao.maps.Size(40, 40), // 마커이미지의 크기입니다
//                 imageOption = {offset: new window.kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
//             const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
//
//             posts.map((post) => {
//                 console.log(typeof(post.lat), typeof(post.lng))
//                 if (typeof post.lat === "string" && typeof post.lng === "string") {
//                     const postMarkerPosition = new window.kakao.maps.LatLng(parseFloat(post.lat), parseFloat(post.lng));
//                     const postMarker = new window.kakao.maps.Marker({
//                         position: postMarkerPosition,
//                         title: post.title, // 포스트 제목을 마커 타이틀로 설정
//                         image: markerImage
//                     });
//
//                     const iwContent = ReactDOMServer.renderToString(<MarkerContent post={post} />); // 인포윈도우 내용
//                     const infoWindow = new window.kakao.maps.InfoWindow({
//                         content: iwContent, // 인포윈도우 내용
//                         removable: true, // 인포윈도우 닫기 버튼 표시
//                     });
//
//                     postMarker.setMap(map);
//
//                     // 마커 클릭 시 인포윈도우 표시
//                     window.kakao.maps.event.addListener(postMarker, "click", function () {
//                         infoWindow.open(map, postMarker);
//                     });
//                 }
//             });
//         };
//
//         // 지도와 마커를 초기화합니다.
//         if (posts.length > 0) {
//             getCurrentLocation();
//         }
//     }, [posts]);
//
//     return <div id="map" className={styles.map}></div>;
// }
//
// export default MapPage;


import React, { useEffect, useState } from "react";
import styles from "../styles/mappage.module.scss";
import ReactDOMServer from "react-dom/server";
import axios from "axios";
import {EmptygetPost, getPost} from "../interface/posts";
import flat from "../images/flat.png";
import pickup from "../images/pickup.png";
import marker from "../images/marker.png";
import MarkerContent from "../components/markercontent";
import DetailPanel from "../components/DetailPannel";  // 상세 정보 패널 컴포넌트

declare global {
    interface Window {
        kakao: any;
    }
}

interface MapPageProps {
    selectedPlace: { lat: number; lng: number } | null;
    login: boolean;
    setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

function MapPage({ selectedPlace, login, setLogin }: MapPageProps) {
    const [center, setCenter] = useState<{ lat: number; lng: number }>({ lat: 33.450701, lng: 126.570667 });
    const [posts, setPosts] = useState<getPost[]>([]);
    const [selectedPost, setSelectedPost] = useState<getPost | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get("http://3.37.252.66:8080/index/articles");
                if (response.status === 200) {
                    setPosts(response.data);
                } else {
                    alert("Post get failed. Please try again.");
                }
            } catch (error) {
                if (axios.isAxiosError(error) && error.response) {
                    alert(`Error: ${error.response.data}`);
                } else {
                    alert("Error during request");
                }
            }
        };

        fetchPosts();
    }, []);

    useEffect(() => {
        const getCurrentLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const latitude = position.coords.latitude;
                        const longitude = position.coords.longitude;
                        setCenter({ lat: latitude, lng: longitude });
                        initializeMap(latitude, longitude);
                    },
                    (error) => {
                        console.error("Error retrieving location:", error);
                    }
                );
            } else {
                console.error("Geolocation is not supported by this browser.");
            }
        };

        const initializeMap = (latitude: number, longitude: number) => {
            const mapContainer = document.getElementById("map");
            const mapOption = {
                center: new window.kakao.maps.LatLng(latitude, longitude),
                level: 3,
            };
            const map = new window.kakao.maps.Map(mapContainer, mapOption);
            const markerImage = new window.kakao.maps.MarkerImage(marker, new window.kakao.maps.Size(30, 40), {offset: new window.kakao.maps.Point(27, 69)});


            posts.map((post) => {
                console.log(typeof(post.lat), typeof(post.lng))
                if (typeof post.lat === "string" && typeof post.lng === "string") {
                    const postMarkerPosition = new window.kakao.maps.LatLng(parseFloat(post.lat), parseFloat(post.lng));
                    const postMarker = new window.kakao.maps.Marker({
                        position: postMarkerPosition,
                        title: post.title, // 포스트 제목을 마커 타이틀로 설정
                        image: markerImage
                    });

                    const onClose = () => {
                        // infoWindow.close();
                        // console.log("InfoWindow closed for post:", post.id);
                        // 추가적인 로직
                        setSelectedPost(null);
                    };

                    const iwContent = ReactDOMServer.renderToString(<MarkerContent post={post} onClose={onClose}/>); // 인포윈도우 내용
                    const infoWindow = new window.kakao.maps.InfoWindow({
                        content: iwContent, // 인포윈도우 내용
                        removable: true, // 인포윈도우 닫기 버튼 표시
                    });

                    postMarker.setMap(map);

                    // 마커 클릭 시 인포윈도우 표시
                    window.kakao.maps.event.addListener(postMarker, "click", function () {
                        infoWindow.open(map, postMarker);
                        setSelectedPost(post);
                    });
                }
            });
        };

        if (posts.length > 0) {
            getCurrentLocation();
        }
        // initializeMap();
    }, [posts]);

    return (
        <div id="map" className={styles.map}>
            {selectedPost && <DetailPanel post={selectedPost} />}
        </div>
    );
}

export default MapPage;
