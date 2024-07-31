import React, { useEffect, useState } from "react";
import styles from "../styles/mappage.module.scss";

declare global {
    interface Window {
        kakao: any;
    }
}

interface MapPageProps {
    selectedPlace: { lat: number, lng: number } | null;
}

function MapPage({ selectedPlace }: MapPageProps) {
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

    return (
        <div id="map" className={styles.map}>
        </div>
    );
}

export default MapPage;

// import React, { useEffect, useState } from "react";
// import styles from "../styles/mappage.module.scss";
//
// declare global {
//     interface Window {
//         kakao: any;
//     }
// }
//
// interface MapPageProps {
//     selectedPlace: { lat: number, lng: number } | null;
// }
//
// function MapPage({ selectedPlace }: MapPageProps) {
//     const [center, setCenter] = useState<{ lat: number, lng: number }>({ lat: 33.450701, lng: 126.570667 });
//     const [position, setPosition] = useState<{ lat: number, lng: number }>({ lat: 33.450701, lng: 126.570667 });
//     const [keyword, setKeyword] = useState<string>('');
//     const [places, setPlaces] = useState<any[]>([]);
//     const [pagination, setPagination] = useState<any>(null);
//
//     useEffect(() => {
//         const initializeMap = (latitude: number, longitude: number) => {
//             const container = document.getElementById('map');
//             const options = {
//                 center: new window.kakao.maps.LatLng(latitude, longitude),
//                 level: 3
//             };
//             const map = new window.kakao.maps.Map(container, options);
//
//             const currentMarkerPosition = new window.kakao.maps.LatLng(latitude, longitude);
//             const currentMarker = new window.kakao.maps.Marker({
//                 position: currentMarkerPosition,
//                 title: "현재 위치"
//             });
//             currentMarker.setMap(map);
//
//             if (selectedPlace) {
//                 const markerPosition = new window.kakao.maps.LatLng(selectedPlace.lat, selectedPlace.lng);
//                 const marker = new window.kakao.maps.Marker({
//                     position: markerPosition
//                 });
//
//                 const iwContent = '<div style="padding:5px;">선택된 장소</div>';
//                 const infowindow = new window.kakao.maps.InfoWindow({
//                     content: iwContent,
//                     removable: true
//                 });
//
//                 marker.setMap(map);
//
//                 window.kakao.maps.event.addListener(marker, 'click', function () {
//                     infowindow.open(map, marker);
//                 });
//             }
//
//             // 장소 검색 객체를 생성합니다
//             const ps = new window.kakao.maps.services.Places();
//
//             // 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
//             const infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });
//
//             // 검색 결과 목록과 마커를 표출하는 함수입니다
//             const displayPlaces = (places: any[]) => {
//                 const listEl = document.getElementById('placesList');
//                 const bounds = new window.kakao.maps.LatLngBounds();
//
//                 // 검색 결과 목록에 추가된 항목들을 제거합니다
//                 if (listEl) {
//                     removeAllChildNods(listEl);
//                 }
//
//                 // 지도에 표시되고 있는 마커를 제거합니다
//                 removeMarker();
//
//                 for (let i = 0; i < places.length; i++) {
//                     // 마커를 생성하고 지도에 표시합니다
//                     const placePosition = new window.kakao.maps.LatLng(places[i].y, places[i].x);
//                     const marker = addMarker(placePosition, i);
//                     const itemEl = getListItem(i, places[i]);
//
//                     bounds.extend(placePosition);
//
//                     // 마커와 검색결과 항목에 mouseover 했을때
//                     // 해당 장소에 인포윈도우에 장소명을 표시합니다
//                     // mouseout 했을 때는 인포윈도우를 닫습니다
//                     (function (marker, title) {
//                         window.kakao.maps.event.addListener(marker, 'mouseover', function () {
//                             displayInfowindow(marker, title);
//                         });
//
//                         window.kakao.maps.event.addListener(marker, 'mouseout', function () {
//                             infowindow.close();
//                         });
//
//                         itemEl.onmouseover = function () {
//                             displayInfowindow(marker, title);
//                         };
//
//                         itemEl.onmouseout = function () {
//                             infowindow.close();
//                         };
//                     })(marker, places[i].place_name);
//
//                     if (listEl) {
//                         listEl.appendChild(itemEl);
//                     }
//                 }
//
//                 // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
//                 map.setBounds(bounds);
//             };
//
//             // 검색 결과 목록 하단에 페이지번호를 표시는 함수입니다
//             const displayPagination = (pagination: any) => {
//                 const paginationEl = document.getElementById('pagination');
//                 const fragment = document.createDocumentFragment();
//
//                 // 기존에 추가된 페이지번호를 삭제합니다
//                 if (paginationEl) {
//                     while (paginationEl.hasChildNodes()) {
//                         if (paginationEl.lastChild) {
//                             paginationEl.removeChild(paginationEl.lastChild);
//                         }
//                     }
//                 }
//
//                 for (let i = 1; i <= pagination.last; i++) {
//                     const el = document.createElement('a');
//                     el.href = "#";
//                     el.innerHTML = i.toString();
//
//                     if (i === pagination.current) {
//                         el.className = 'on';
//                     } else {
//                         el.onclick = (function (i) {
//                             return function () {
//                                 pagination.gotoPage(i);
//                             }
//                         })(i);
//                     }
//
//                     fragment.appendChild(el);
//                 }
//                 if (paginationEl) {
//                     paginationEl.appendChild(fragment);
//                 }
//             };
//
//             // 키워드 검색을 요청하는 함수입니다
//             const searchPlaces = () => {
//                 if (!keyword.replace(/^\s+|\s+$/g, '')) {
//                     alert('키워드를 입력해주세요!');
//                     return false;
//                 }
//
//                 // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
//                 ps.keywordSearch(keyword, (data: any[], status: any, pagination: any) => {
//                     if (status === window.kakao.maps.services.Status.OK) {
//                         displayPlaces(data);
//                         setPagination(pagination);
//                     } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
//                         alert('검색 결과가 존재하지 않습니다.');
//                     } else if (status === window.kakao.maps.services.Status.ERROR) {
//                         alert('검색 결과 중 오류가 발생했습니다.');
//                     }
//                 });
//             };
//
//             // 검색결과 항목을 Element로 반환하는 함수입니다
//             const getListItem = (index: number, places: any) => {
//                 const el = document.createElement('li');
//                 let itemStr = '<span class="markerbg marker_' + (index + 1) + '"></span>' +
//                     '<div class="info">' +
//                     '   <h5>' + places.place_name + '</h5>';
//
//                 if (places.road_address_name) {
//                     itemStr += '    <span>' + places.road_address_name + '</span>' +
//                         '   <span class="jibun gray">' + places.address_name + '</span>';
//                 } else {
//                     itemStr += '    <span>' + places.address_name + '</span>';
//                 }
//
//                 itemStr += '  <span class="tel">' + places.phone + '</span>' +
//                     '</div>';
//
//                 el.innerHTML = itemStr;
//                 el.className = 'item';
//
//                 return el;
//             };
//
//             // 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
//             const addMarker = (position: any, idx: number) => {
//                 const imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png';
//                 const imageSize = new window.kakao.maps.Size(36, 37);
//                 const imgOptions = {
//                     spriteSize: new window.kakao.maps.Size(36, 691),
//                     spriteOrigin: new window.kakao.maps.Point(0, (idx * 46) + 10),
//                     offset: new window.kakao.maps.Point(13, 37)
//                 };
//                 const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions);
//                 const marker = new window.kakao.maps.Marker({
//                     position: position,
//                     image: markerImage
//                 });
//
//                 marker.setMap(map);
//                 markers.push(marker);
//
//                 return marker;
//             };
//
//             // 지도 위에 표시되고 있는 마커를 모두 제거합니다
//             const removeMarker = () => {
//                 for (let i = 0; i < markers.length; i++) {
//                     markers[i].setMap(null);
//                 }
//                 markers.length = 0; // 배열 초기화
//             };
//
//             // 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수입니다
//             // 인포윈도우에 장소명을 표시합니다
//             const displayInfowindow = (marker: any, title: string) => {
//                 const content = '<div style="padding:5px;z-index:1;">' + title + '</div>';
//
//                 infowindow.setContent(content);
//                 infowindow.open(map, marker);
//             };
//
//             // 검색결과 목록의 자식 Element를 제거하는 함수입니다
//             const removeAllChildNods = (el: any) => {
//                 while (el.hasChildNodes()) {
//                     el.removeChild(el.lastChild!); // null 아님 단언 사용
//                 }
//             };
//
//             const markers: any[] = [];
//         };
//
//         navigator.geolocation.getCurrentPosition((pos) => {
//             const latitude = pos.coords.latitude;
//             const longitude = pos.coords.longitude;
//             setCenter({ lat: latitude, lng: longitude });
//             setPosition({ lat: latitude, lng: longitude });
//             initializeMap(latitude, longitude);
//         });
//
//         const watchId = navigator.geolocation.watchPosition((pos) => {
//             const latitude = pos.coords.latitude;
//             const longitude = pos.coords.longitude;
//             setPosition({ lat: latitude, lng: longitude });
//         });
//
//         return () => {
//             navigator.geolocation.clearWatch(watchId);
//         };
//     }, [selectedPlace, keyword]);
//
//     useEffect(() => {
//         if (position.lat !== 0 && position.lng !== 0) {
//             const container = document.getElementById('map');
//             const options = {
//                 center: new window.kakao.maps.LatLng(position.lat, position.lng),
//                 level: 3
//             };
//             const map = new window.kakao.maps.Map(container, options);
//
//             const currentMarkerPosition = new window.kakao.maps.LatLng(position.lat, position.lng);
//             const currentMarker = new window.kakao.maps.Marker({
//                 position: currentMarkerPosition,
//                 title: "현재 위치"
//             });
//             currentMarker.setMap(map);
//         }
//     }, [position]);
//
//     return (
//         <div className={styles.mapPage}>
//             <div className={styles.searchContainer}>
//                 <input
//                     type="text"
//                     id="keyword"
//                     placeholder="검색어를 입력하세요"
//                     value={keyword}
//                     onChange={(e) => setKeyword(e.target.value)}
//                 />
//                 <button id="searchButton">검색</button>
//             </div>
//             <div id="map" className={styles.map}></div>
//             <div id="menu_wrap" className={styles.menuWrap}>
//                 <ul id="placesList" className={styles.placesList}></ul>
//                 <div id="pagination" className={styles.pagination}></div>
//             </div>
//         </div>
//     );
// }
//
// export default MapPage;
