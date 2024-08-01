import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/signuppage.module.scss';
import axios from "axios";
import { SignUp, EmptySignUp } from '../interface/user'; // 필요에 따라 경로 조정

function SignupPage() {
    const [data, setData] = useState<SignUp>(EmptySignUp);
    const baseUrl = "http://3.37.252.66:8080";
    const [inputs, setInputs] = useState<SignUp>({
        username: '',
        password: '',
        name: '',
        email: '',
        birth: '',
        introduction: '',
        gender: '',
        authorityDtoSet: [{ authorityName: '' }]
    });

    const { username, password, name, email, birth, introduction, gender, authorityDtoSet } = inputs;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        axios.post(`${baseUrl}/user/signup`, inputs)
            .then((response) => {
                if (response.status === 200) {
                    alert('Signup successful!');
                    setData(response.data);
                } else {
                    alert('Signup failed. Please try again.');
                }
            })
            .catch(error => {
                if (error.response) {
                    alert(`Error: ${error.response.data}`);
                } else {
                    alert('Error during signup');
                }
            });

        setInputs({
            username: '',
            password: '',
            name: '',
            email: '',
            birth: '',
            introduction: '',
            gender: '',
            authorityDtoSet: [{ authorityName: '' }]
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.signupSection}>
                <h2>회원가입</h2>
                <form className={styles.form} onSubmit={handleSignup}>
                    <label>
                        사용자 이름
                        <input type="text" name="username" placeholder="Username" className={styles.input} value={username} onChange={onChange} />
                    </label>
                    <label>
                        비밀번호
                        <input type="password" name="password" placeholder="Password" className={styles.input} value={password} onChange={onChange} />
                    </label>
                    <label>
                        이름
                        <input type="text" name="name" placeholder="Name" className={styles.input} value={name} onChange={onChange} />
                    </label>
                    <label>
                        이메일 주소
                        <input type="email" name="email" placeholder="Email" className={styles.input} value={email} onChange={onChange} />
                    </label>
                    <label>
                        생년월일
                        <input type="text" name="birth" placeholder="Birth" className={styles.input} value={birth} onChange={onChange} />
                    </label>
                    <label>
                        자기소개
                        <input type="text" name="introduction" placeholder="Introduction" className={styles.input} value={introduction} onChange={onChange} />
                    </label>
                    <label>
                        성별
                        <input type="text" name="gender" placeholder="Gender" className={styles.input} value={gender} onChange={onChange} />
                    </label>
                    <button type="submit" className={styles.submitButton}>회원가입</button>
                </form>
                <div className={styles.loginLink}>
                    <p>계정이 있으신가요? <Link to="/login" className={styles.green}>로그인</Link></p>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;
