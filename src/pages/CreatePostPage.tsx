import React, { useState, useEffect } from 'react';
import styles from '../styles/createpostpage.module.scss';

declare global {
    interface Window {
        kakao: any;
    }
}

interface CreatePostPageProps {
    setSelectedPlace: (place: { lat: number, lng: number } | null) => void;
    addPost: (post: Post) => void;
}

interface Post {
    title: string;
    date: string;
    time: string;
    address: string;
    people: string;
    description: string;
    place: { lat: number, lng: number };
}

function CreatePostPage({ setSelectedPlace, addPost }: CreatePostPageProps) {
    const [address, setAddress] = useState<string>('');
    const [places, setPlaces] = useState<any[]>([]);
    const [selectedPlace, setSelectedPlaceState] = useState<any>(null);
    const [title, setTitle] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [time, setTime] = useState<string>('');
    const [people, setPeople] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    useEffect(() => {
        if (!address || !window.kakao || !window.kakao.maps) return;

        const ps = new window.kakao.maps.services.Places();
        ps.keywordSearch(address, (data: any[], status: any) => {
            if (status === window.kakao.maps.services.Status.OK) {
                setPlaces(data);
            }
        });
    }, [address]);

    useEffect(() => {
        if (!selectedPlace || !window.kakao || !window.kakao.maps) return;

        const container = document.getElementById('map');
        const options = {
            center: new window.kakao.maps.LatLng(selectedPlace.y, selectedPlace.x),
            level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);
        const markerPosition = new window.kakao.maps.LatLng(selectedPlace.y, selectedPlace.x);
        const marker = new window.kakao.maps.Marker({
            position: markerPosition,
        });
        marker.setMap(map);
    }, [selectedPlace]);

    const handleSelect = (place: any) => {
        setSelectedPlaceState(place);
        setSelectedPlace({ lat: place.y, lng: place.x });
        setAddress(place.address_name);
        setPlaces([]);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedPlace) {
            alert('장소를 선택해주세요.');
            return;
        }

        const newPost: Post = {
            title,
            date,
            time,
            address,
            people,
            description,
            place: selectedPlace,
        };

        addPost(newPost);

        // 폼 초기화
        setTitle('');
        setDate('');
        setTime('');
        setAddress('');
        setPeople('');
        setDescription('');
        setSelectedPlace(null);
    };

    return (
        <div className={styles.pageContainer}>
            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="title">제목</label>
                        <input
                            type="text"
                            id="title"
                            placeholder="제목"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="date">날짜</label>
                        <input
                            type="date"
                            id="date"
                            placeholder="날짜"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="time">시간</label>
                        <input
                            type="time"
                            id="time"
                            placeholder="시간"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="location">장소</label>
                        <input
                            type="text"
                            id="location"
                            placeholder="주소로 검색하세요."
                            value={address}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}
                        />
                        {places.length > 0 && (
                            <div className={styles.autocompleteDropdownContainer}>
                                {places.map((place) => (
                                    <div
                                        key={place.id}
                                        className={styles.suggestionItem}
                                        onClick={() => handleSelect(place)}>
                                        {place.place_name} ({place.address_name})
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div id="map" className={styles.map}></div>
                    <div className={styles.formGroup}>
                        <label htmlFor="people">인원 수</label>
                        <select
                            id="people"
                            className={styles.select}
                            value={people}
                            onChange={(e) => setPeople(e.target.value)}
                        >
                            <option value="" disabled>인원 수</option>
                            <option value="1">1명</option>
                            <option value="2">2명</option>
                            <option value="3">3명</option>
                            <option value="4">4명</option>
                            <option value="5">5명</option>
                            <option value="6">6명</option>
                            <option value="7">7명</option>
                            <option value="8">8명</option>
                            <option value="9">9명</option>
                            <option value="10">10명 이상</option>
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="description">자세한 설명</label>
                        <textarea
                            id="description"
                            placeholder="자세한 설명을 입력해주세요."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className={styles.buttonGroup}>
                        <button type="submit" className={styles.submitButton} onClick={handleSubmit}>작성완료 ➔</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreatePostPage;
