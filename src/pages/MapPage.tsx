import React, { useEffect, useState } from "react";
import styles from "../styles/mappage.module.scss";

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

    useEffect(() => {
        const initializeMap = (latitude: number, longitude: number) => {
            // 지도생성
            const container = document.getElementById('map');
            const options = {
                center: new window.kakao.maps.LatLng(latitude, longitude),
                level: 3
            };
            const map = new window.kakao.maps.Map(container, options);
            // 여기까지

            // 현재 위치에 마커 표시
            const currentMarkerPosition = new window.kakao.maps.LatLng(latitude, longitude);
            const currentMarker = new window.kakao.maps.Marker({
                position: currentMarkerPosition,
                title: "현재 위치"
            });
            currentMarker.setMap(map);

            if (selectedPlace) {
                const markerPosition = new window.kakao.maps.LatLng(selectedPlace.lat, selectedPlace.lng);
                const marker = new window.kakao.maps.Marker({
                    position: markerPosition
                });

                const iwContent = '<div style="padding:5px;">선택된 장소</div>',
                    iwRemoveable = true;

                const infowindow = new window.kakao.maps.InfoWindow({
                    content: iwContent,
                    removable: iwRemoveable
                });

                marker.setMap(map);

                window.kakao.maps.event.addListener(marker, 'click', function () {
                    infowindow.open(map, marker);
                });
            }
        };

        navigator.geolocation.getCurrentPosition((pos) => {
            const latitude = pos.coords.latitude;
            const longitude = pos.coords.longitude;
            setCenter({ lat: latitude, lng: longitude });
            setPosition({ lat: latitude, lng: longitude });
            initializeMap(latitude, longitude);
        });

        const watchId = navigator.geolocation.watchPosition((pos) => {
            const latitude = pos.coords.latitude;
            const longitude = pos.coords.longitude;
            setPosition({ lat: latitude, lng: longitude });
        });

        return () => {
            navigator.geolocation.clearWatch(watchId);
        };
    }, [selectedPlace, position]);

    useEffect(() => {
        if (position.lat !== 0 && position.lng !== 0) {
            const container = document.getElementById('map');
            const options = {
                center: new window.kakao.maps.LatLng(position.lat, position.lng),
                level: 3
            };
            const map = new window.kakao.maps.Map(container, options);

            const currentMarkerPosition = new window.kakao.maps.LatLng(position.lat, position.lng);
            const currentMarker = new window.kakao.maps.Marker({
                position: currentMarkerPosition,
                title: "현재 위치"
            });
            currentMarker.setMap(map);
        }
    }, [position]);

    return (
        <div id="map" className={styles.map}>
        </div>
    );
}

export default MapPage;


