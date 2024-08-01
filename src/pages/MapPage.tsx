import React, { useEffect, useState } from "react";
import styles from "../styles/mappage.module.scss";
import axios from "axios";
import {getPost, Post} from "../interface/posts";

declare global {
    interface Window {
        kakao: any;
    }
}

interface MapPageProps {
    selectedPlace: { lat: number, lng: number } | null; // 예시 타입, 필요에 따라 수정
    login: boolean;
    setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

function MapPage({ selectedPlace, login, setLogin }: MapPageProps) {
    if (login) {
        setLogin(true);
    }
    else {
        setLogin(false);
    }
    const [center, setCenter] = useState<{ lat: number, lng: number }>({ lat: 33.450701, lng: 126.570667 });
    const [position, setPosition] = useState<{ lat: number, lng: number }>({ lat: 33.450701, lng: 126.570667 });
    const [posts, setPosts] = useState<getPost[]>([]);

    // useEffect(() => {
    //     const initializeMap = (latitude: number, longitude: number) => {
    //         // 지도생성
    //         const container = document.getElementById('map');
    //         const options = {
    //             center: new window.kakao.maps.LatLng(latitude, longitude),
    //             level: 3
    //         };
    //         const map = new window.kakao.maps.Map(container, options);
    //         // 여기까지
    //
    //         // 현재 위치에 마커 표시
    //         const currentMarkerPosition = new window.kakao.maps.LatLng(latitude, longitude);
    //         const currentMarker = new window.kakao.maps.Marker({
    //             position: currentMarkerPosition,
    //             title: "현재 위치"
    //         });
    //         currentMarker.setMap(map);
    //
    //         // if (selectedPlace) {
    //         //     const markerPosition = new window.kakao.maps.LatLng(selectedPlace.lat, selectedPlace.lng);
    //         //     const marker = new window.kakao.maps.Marker({
    //         //         position: markerPosition
    //         //     });
    //         //
    //         //     const iwContent = '<div style="padding:5px;">선택된 장소</div>',
    //         //         iwRemoveable = true;
    //         //
    //         //     const infowindow = new window.kakao.maps.InfoWindow({
    //         //         content: iwContent,
    //         //         removable: iwRemoveable
    //         //     });
    //         //
    //         //     marker.setMap(map);
    //         //
    //         //     window.kakao.maps.event.addListener(marker, 'click', function () {
    //         //         infowindow.open(map, marker);
    //         //     });
    //         // }
    //     };
    //
    //     navigator.geolocation.getCurrentPosition((pos) => {
    //         const latitude = pos.coords.latitude;
    //         const longitude = pos.coords.longitude;
    //         setCenter({ lat: latitude, lng: longitude });
    //         setPosition({ lat: latitude, lng: longitude });
    //         initializeMap(latitude, longitude);
    //     });
    //
    //     const watchId = navigator.geolocation.watchPosition((pos) => {
    //         const latitude = pos.coords.latitude;
    //         const longitude = pos.coords.longitude;
    //         setPosition({ lat: latitude, lng: longitude });
    //     });
    //
    //     return () => {
    //         navigator.geolocation.clearWatch(watchId);
    //     };
    // }, [selectedPlace, position]);
    //
    // useEffect(() => {
    //     if (position.lat !== 0 && position.lng !== 0) {
    //         const container = document.getElementById('map');
    //         const options = {
    //             center: new window.kakao.maps.LatLng(position.lat, position.lng),
    //             level: 3
    //         };
    //         const map = new window.kakao.maps.Map(container, options);
    //
    //         const currentMarkerPosition = new window.kakao.maps.LatLng(position.lat, position.lng);
    //         const currentMarker = new window.kakao.maps.Marker({
    //             position: currentMarkerPosition,
    //             title: "현재 위치"
    //         });
    //         currentMarker.setMap(map);
    //     }
    // }, [position]);

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
        // 사용자의 현재 위치를 가져오는 함수
        const getCurrentLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const latitude = position.coords.latitude;
                        const longitude = position.coords.longitude;

                        const mapContainer = document.getElementById('map'); // 지도를 표시할 div
                        const mapOption = {
                            center: new window.kakao.maps.LatLng(latitude, longitude), // 사용자의 현재 위치로 중심좌표 설정
                            level: 3 // 지도의 확대 레벨
                        };

                        // 지도를 표시할 div와 지도 옵션으로 지도를 생성합니다
                        const map = new window.kakao.maps.Map(mapContainer, mapOption);

                        // 현재 위치에 마커를 표시합니다
                        const markerPosition = new window.kakao.maps.LatLng(latitude, longitude);
                        const marker = new window.kakao.maps.Marker({
                            position: markerPosition
                        });

                        // 마커를 지도 위에 표시합니다
                        marker.setMap(map);

                        // posts.map((post) => {
                        //     const
                        // })
                    },
                    (error) => {
                        console.error('Error retrieving location:', error);
                    }
                );
            } else {
                console.error('Geolocation is not supported by this browser.');
            }


        };

        fetchPosts();
        getCurrentLocation();
    }, []); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때만 실행

    console.log(posts)
    return (
        <div id="map" className={styles.map}>
        </div>
    );
}

export default MapPage;


