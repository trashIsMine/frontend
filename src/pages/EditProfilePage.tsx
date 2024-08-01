import React, { useState } from 'react';
import styles from '../styles/editprofilepage.module.scss';

const EditProfilePage = ({ login, setLogin }: { login: boolean; setLogin: React.Dispatch<React.SetStateAction<boolean>> }) => {
    if (login) {
        setLogin(true);
    }
    else {
        setLogin(false);
    }
    const [profile, setProfile] = useState({
        firstName: 'Mehrab',
        lastName: 'Bozorgi',
        email: 'Mehrabbozorgi.business@gmail.com',
        address: '33062 Zboncak isle',
        phone: '58077.79',
        city: 'Mehrab',
        state: 'Bozorgi',
        password: 'sbdfbnd65sfdfvb s'
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setProfile(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Save profile logic here
        console.log('Profile saved', profile);
    };

    return (
        <div className={styles.pageContainer}>
            <h1>Edit profile</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="firstName">이름</label>
                    <input type="text" id="firstName" name="firstName" value={profile.firstName} onChange={handleChange} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="lastName">성</label>
                    <input type="text" id="lastName" name="lastName" value={profile.lastName} onChange={handleChange} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">이메일</label>
                    <input type="email" id="email" name="email" value={profile.email} onChange={handleChange} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="address">주소</label>
                    <input type="text" id="address" name="address" value={profile.address} onChange={handleChange} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="phone">전화번호</label>
                    <input type="text" id="phone" name="phone" value={profile.phone} onChange={handleChange} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="city">시, 군, 구</label>
                    <input type="text" id="city" name="city" value={profile.city} onChange={handleChange} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="state">도</label>
                    <input type="text" id="state" name="state" value={profile.state} onChange={handleChange} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">비밀번호</label>
                    <input type="password" id="password" name="password" value={profile.password} onChange={handleChange} />
                </div>
                <div className={styles.buttonGroup}>
                    <button type="button" className={styles.cancelButton}>Cancel</button>
                    <button type="submit" className={styles.saveButton}>Save</button>
                </div>
            </form>
        </div>
    );
};

export default EditProfilePage;
