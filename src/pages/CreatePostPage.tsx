// import React, { useState, useEffect } from 'react';
// import styles from '../styles/createpostpage.module.scss';
// import { Post } from "../interface/posts";
// import {useNavigate} from "react-router-dom";
// import axios from "axios";
//
// declare global {
//     interface Window {
//         kakao: any;
//     }
// }
//
// interface CreatePostPageProps {
//     setSelectedPlace: (place: { lat: number, lng: number } | null) => void;
//     addPost: (post: Post) => void;
//     login: boolean;
//     setLogin: React.Dispatch<React.SetStateAction<boolean>>;
// }
//
// function CreatePostPage({ setSelectedPlace, addPost, login, setLogin }: CreatePostPageProps) {
//     if (login) {
//         setLogin(true);
//     }
//     else {
//         setLogin(false);
//     }
//
//     const navigate = useNavigate();
//     const baseUrl = 'http://3.37.252.66:8080';
//     const [inputs, setInputs] = useState<Post>({
//         id: 0,
//         title: '',
//         location: '',
//         participants: '',
//         date: '',
//         time: '',
//         views: 0,
//         description: '',
//         content: '',
//         // imgSrc: '',
//         imageFile:'',
//
//         lat: 0,
//         lng: 0
//     });
//
//     const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//         const { value, name } = e.target;
//
//         // 숫자 필드에 대한 추가 처리
//         if (name === 'id' || name === 'views') {
//             setInputs({
//                 ...inputs,
//                 [name]: parseInt(value),
//             });
//         } else if (name === 'lat' || name === 'lng') {
//             setInputs({
//                 ...inputs,
//                 [name]: parseFloat(value)
//             });
//         } else {
//             setInputs({
//                 ...inputs,
//                 [name]: value,
//             });
//         }
//     };
//
//     const [places, setPlaces] = useState<any[]>([]);
//     const [selectedPlace, setSelectedPlaceState] = useState<any>(null);
//
//     useEffect(() => {
//         if (!inputs.location || !window.kakao || !window.kakao.maps) return;
//
//         const ps = new window.kakao.maps.services.Places();
//         ps.keywordSearch(inputs.location, (data: any[], status: any) => {
//             if (status === window.kakao.maps.services.Status.OK) {
//                 setPlaces(data);
//             }
//         });
//     }, [inputs.location]);
//
//     useEffect(() => {
//         if (!selectedPlace || !window.kakao || !window.kakao.maps) return;
//
//         const container = document.getElementById('map');
//         const options = {
//             center: new window.kakao.maps.LatLng(selectedPlace.y, selectedPlace.x),
//             level: 3,
//         };
//         const map = new window.kakao.maps.Map(container, options);
//         const markerPosition = new window.kakao.maps.LatLng(selectedPlace.y, selectedPlace.x);
//         const marker = new window.kakao.maps.Marker({
//             position: markerPosition,
//         });
//         marker.setMap(map);
//     }, [selectedPlace]);
//
//     const handleSelect = (place: any) => {
//         setSelectedPlaceState(place);
//         setSelectedPlace({ lat: place.y, lng: place.x });
//         setInputs({
//             ...inputs,
//             location: place.address_name,
//             lat: parseFloat(place.y),
//             lng: parseFloat(place.x)
//         });
//         setPlaces([]);
//     };
//
//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         // if (!selectedPlace) {
//         //     alert('장소를 선택해주세요.');
//         //     return;
//         // }
//         console.log(inputs)
//         addPost(inputs);
//
//         axios.post(`${baseUrl}/index/articles/create`, inputs)
//             .then((response) => {
//                 if (response.status === 200) {
//                     alert('Post successful!');
//                     navigate('/community')
//                     // setData(response.data);
//                     // 여기서 원하는 동작을 추가할 수 있습니다. 예: 페이지 이동 등.
//                 } else {
//                     alert('Post failed. Please try again.');
//                 }
//             })
//             .catch(error => {
//                 if (error.response) {
//                     alert(`Error: ${error.response.data}`);
//                 } else {
//                     alert('Error during Post');
//                 }
//             });
//
//
//
//         // axios.post(`http://3.37.252.66:8080/index/articles/create`, inputs)
//         //     .then((response) => {
//         //         if (response.status === 200) {
//         //             alert('Post successful!');
//         //             navigate('/community');
//         //             // 필요한 다른 동작을 추가하세요.
//         //         } else {
//         //             alert('Post failed. Please try again.');
//         //         }
//         //     })
//         //     .catch(error => {
//         //         if (error.response) {
//         //             // 서버가 응답을 주었으나 에러 코드가 있는 경우
//         //             alert(`Error: ${error.response.status} - ${error.response.data}`);
//         //         } else if (error.request) {
//         //             // 요청이 이루어졌으나 응답을 받지 못한 경우
//         //             alert(`No response received from server. ${error.response}`);
//         //         } else {
//         //             // 요청 설정 중에 오류가 발생한 경우
//         //             alert(`Error: ${error.message}`);
//         //         }
//         //     });
//
//         // 폼 초기화
//         setInputs({
//             id: 0,
//             title: '',
//             location: '',
//             participants: '',
//             date: '',
//             time: '',
//             views: 0,
//             description: '',
//             content: '',
//             // imgSrc: '',
//             imageFile:'',
//             lat: 0,
//             lng: 0
//         });
//         setSelectedPlace(null);
//     };
//
//     // // 이미지 파일을 저장하기 위한 상태
//     // const [selectedFile, setSelectedFile] = useState<File | null>(null);
//     // const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
//     //
//     // // 이미지 파일 변경 처리
//     // // 이미지 파일 변경 처리
//     // const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     //     if (e.target.files && e.target.files[0]) {
//     //         const file = e.target.files[0];
//     //         setSelectedFile(file);
//     //
//     //         // 이미지 미리보기 URL 생성
//     //         const previewUrl = URL.createObjectURL(file);
//     //         setImagePreviewUrl(previewUrl);
//     //         setInputs({
//     //             ...inputs,
//     //             imgSrc: imagePreviewUrl;
//     //         })
//     //     }
//     // };
//
//
//     return (
//         <div className={styles.pageContainer}>
//             <div className={styles.formContainer}>
//                 <form onSubmit={handleSubmit}>
//                     <div className={styles.formGroup}>
//                         <label htmlFor="title">제목</label>
//                         <input
//                             type="text"
//                             id="title"
//                             name="title"
//                             placeholder="제목"
//                             value={inputs.title}
//                             onChange={onChange}
//                         />
//                     </div>
//                     <div className={styles.formGroup}>
//                         <label htmlFor="imagedata">이미지 파일</label>
//                         <input type="file"
//                                // id="imgSrc"
//                                // name="imgSrc"
//                                id="imagedata"
//                                name="imagedata"
//                                placeholder="이미지 파일을 선택해주세요."
//                                // value={inputs.imgSrc}
//                                value={inputs.imageFile}
//                                // onChange={onChange}
//                                 onChange={onChange}
//                         />
//                     </div>
//                     <div className={styles.formGroup}>
//                         <label htmlFor="date">날짜</label>
//                         <input
//                             type="date"
//                             id="date"
//                             name="date"
//                             placeholder="날짜"
//                             value={inputs.date}
//                             onChange={onChange}
//                         />
//                     </div>
//                     <div className={styles.formGroup}>
//                         <label htmlFor="time">시간</label>
//                         <input
//                             type="time"
//                             id="time"
//                             name="time"
//                             placeholder="시간"
//                             value={inputs.time}
//                             onChange={onChange}
//                         />
//                     </div>
//                     <div className={styles.formGroup}>
//                         <label htmlFor="location">장소</label>
//                         <input
//                             type="text"
//                             id="location"
//                             name="location"
//                             placeholder="주소로 검색하세요."
//                             value={inputs.location}
//                             onChange={onChange}
//                         />
//                         {places.length > 0 && (
//                             <div className={styles.autocompleteDropdownContainer}>
//                                 {places.map((place) => (
//                                     <div
//                                         key={place.id}
//                                         className={styles.suggestionItem}
//                                         onClick={() => handleSelect(place)}>
//                                         {place.place_name} ({place.address_name})
//                                     </div>
//                                 ))}
//                             </div>
//                         )}
//                     </div>
//                     <div id="map" className={styles.map}></div>
//                     <div className={styles.formGroup}>
//                         <label htmlFor="participants">인원 수</label>
//                         <select
//                             id="participants"
//                             name="participants"
//                             className={styles.select}
//                             value={inputs.participants}
//                             onChange={onChange}
//                         >
//                             <option value="" disabled>인원 수</option>
//                             <option value="1">1명</option>
//                             <option value="2">2명</option>
//                             <option value="3">3명</option>
//                             <option value="4">4명</option>
//                             <option value="5">5명</option>
//                             <option value="6">6명</option>
//                             <option value="7">7명</option>
//                             <option value="8">8명</option>
//                             <option value="9">9명</option>
//                             <option value="10">10명 이상</option>
//                         </select>
//                     </div>
//                     <div className={styles.formGroup}>
//                         <label htmlFor="description">자세한 설명</label>
//                         <textarea
//                             id="description"
//                             name="description"
//                             placeholder="자세한 설명을 입력해주세요."
//                             value={inputs.description}
//                             onChange={onChange}
//                         />
//                     </div>
//                     <div className={styles.buttonGroup}>
//                         <button type="submit" className={styles.submitButton}>작성완료 ➔</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }
//
// export default CreatePostPage;
//
//




import React, { useState, useEffect } from 'react';
import styles from '../styles/createpostpage.module.scss';
import {getPost, Post} from "../interface/posts";
import { useNavigate } from "react-router-dom";
import axios from "axios";

declare global {
    interface Window {
        kakao: any;
    }
}

interface CreatePostPageProps {
    setSelectedPlace: (place: { lat: number, lng: number } | null) => void;
    login: boolean;
    setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

function CreatePostPage({ setSelectedPlace, login, setLogin }: CreatePostPageProps) {
    if (login) {
        setLogin(true);
    } else {
        setLogin(false);
    }

    const navigate = useNavigate();
    const baseUrl = 'http://3.37.252.66:8080';
    const [inputs, setInputs] = useState<Post>({
        id: 0,
        title: '',
        location: '',
        participants: '',
        date: '',
        time: '',
        views: 0,
        description: '',
        content: '',
        imageFile: '',
        lat: 0,
        lng: 0
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { value, name } = e.target;

        if (name === 'id' || name === 'views') {
            setInputs({
                ...inputs,
                [name]: parseInt(value),
            });
        } else if (name === 'lat' || name === 'lng') {
            setInputs({
                ...inputs,
                [name]: parseFloat(value)
            });
        } else {
            setInputs({
                ...inputs,
                [name]: value,
            });
        }
    };

    const [places, setPlaces] = useState<any[]>([]);
    const [selectedPlace, setSelectedPlaceState] = useState<any>(null);

    useEffect(() => {
        if (!inputs.location || !window.kakao || !window.kakao.maps) return;

        const ps = new window.kakao.maps.services.Places();
        ps.keywordSearch(inputs.location, (data: any[], status: any) => {
            if (status === window.kakao.maps.services.Status.OK) {
                setPlaces(data);
            }
        });
    }, [inputs.location]);

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
        setInputs({
            ...inputs,
            location: place.address_name,
            lat: parseFloat(place.y),
            lng: parseFloat(place.x)
            // lat: place.y,
            // lng: place.x
        });
        setPlaces([]);
    };



    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const data = new FormData();
        data.append('title', inputs.title);
        data.append('location', inputs.location);
        data.append('participants', inputs.participants);
        data.append('date', inputs.date);
        data.append('time', inputs.time);
        data.append('description', inputs.content.length>30 ? inputs.content.slice(0,30) : inputs.content);
        data.append('content', inputs.content);
        data.append('lat', inputs.lat.toString());
        data.append('lng', inputs.lng.toString());

        console.log(inputs.lng.toString())
        console.log(inputs.lat.toString())

        if (selectedFile) {
            data.append('imageFile', selectedFile);
        }

        axios.post(`${baseUrl}/index/articles/create`, data)
            .then((response) => {
                if (response.status === 200) {
                    // alert('Post successful!');
                    navigate('/community');
                } else {
                    alert('Post failed. Please try again.');
                }
            })
            .catch(error => {
                if (error.response) {
                    alert(`Error: ${error.response.data}`);
                } else {
                    alert('Error during Post');
                }
            });

        setInputs({
            id: 0,
            title: '',
            location: '',
            participants: '',
            date: '',
            time: '',
            views: 0,
            description: '',
            content: '',
            imageFile: '',
            lat: 0,
            lng: 0
        });
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
                            name="title"
                            placeholder="제목"
                            value={inputs.title}
                            onChange={onChange}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="imagedata">이미지 파일</label>
                        <input
                            type="file"
                            id="imagedata"
                            name="imagedata"
                            onChange={onFileChange}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="date">날짜</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            placeholder="날짜"
                            value={inputs.date}
                            onChange={onChange}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="time">시간</label>
                        <input
                            type="time"
                            id="time"
                            name="time"
                            placeholder="시간"
                            value={inputs.time}
                            onChange={onChange}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="location">장소</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            placeholder="주소로 검색하세요."
                            value={inputs.location}
                            onChange={onChange}
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
                        <label htmlFor="participants">인원 수</label>
                        <select
                            id="participants"
                            name="participants"
                            className={styles.select}
                            value={inputs.participants}
                            onChange={onChange}
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
                        <label htmlFor="content">자세한 설명</label>
                        <textarea
                            id="content"
                            name="content"
                            placeholder="자세한 설명을 입력해주세요."
                            value={inputs.content}
                            onChange={onChange}
                        />
                    </div>
                    <div className={styles.buttonGroup}>
                        <button type="submit" className={styles.submitButton}>작성완료 ➔</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreatePostPage;


