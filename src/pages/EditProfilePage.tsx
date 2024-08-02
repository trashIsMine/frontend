import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 가져오기
import styles from '../styles/editprofilepage.module.scss';

const EditProfilePage = () => {
    const navigate = useNavigate(); // useNavigate 훅 사용
    const [profile, setProfile] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        phone: '',
        city: '',
        state: '',
        password: ''
    });

    const [profileImage, setProfileImage] = useState<File | null>(null); // 이미지 상태 추가
    const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(null); // 이미지 미리보기 상태 추가

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setProfile(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        if (file) {
            setProfileImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Save profile logic here
        console.log('Profile saved', profile);
        if (profileImage) {
            console.log('Profile image:', profileImage);
        }
    };

    const handleCancel = () => {
        navigate(-1); // 이전 페이지로 이동
    };

    return (
        <div className={styles.pageContainer}>
            <h1>Edit profile</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="profileImage">프로필 이미지</label>
                    <input type="file" id="profileImage" name="profileImage" accept="image/*"
                           onChange={handleFileChange}/>
                    {imagePreview &&
                        <img src={imagePreview as string} alt="Profile preview" className={styles.imagePreview}/>}
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="lastName">성</label>
                    <input type="text" id="lastName" name="lastName" value={profile.lastName} onChange={handleChange}
                           placeholder="성을 입력하세요"/>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="firstName">이름</label>
                    <input type="text" id="firstName" name="firstName" value={profile.firstName} onChange={handleChange}
                           placeholder="이름을 입력하세요"/>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">이메일</label>
                    <input type="email" id="email" name="email" value={profile.email} onChange={handleChange}
                           placeholder="이메일을 입력하세요"/>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="address">주소</label>
                    <input type="text" id="address" name="address" value={profile.address} onChange={handleChange}
                           placeholder="주소를 입력하세요"/>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="phone">전화번호</label>
                    <input type="text" id="phone" name="phone" value={profile.phone} onChange={handleChange}
                           placeholder="전화번호를 입력하세요"/>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="city">시, 군, 구</label>
                    <input type="text" id="city" name="city" value={profile.city} onChange={handleChange}
                           placeholder="시, 군, 구를 입력하세요"/>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="state">도</label>
                    <input type="text" id="state" name="state" value={profile.state} onChange={handleChange}
                           placeholder="도를 입력하세요"/>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">비밀번호</label>
                    <input type="password" id="password" name="password" value={profile.password}
                           onChange={handleChange} placeholder="비밀번호를 입력하세요"/>
                </div>
                <div className={styles.buttonGroup}>
                    <button type="button" className={styles.cancelButton} onClick={handleCancel}>Cancel</button>
                    <button type="submit" className={styles.saveButton}>Save</button>
                </div>
            </form>
        </div>
    );
};

export default EditProfilePage;
