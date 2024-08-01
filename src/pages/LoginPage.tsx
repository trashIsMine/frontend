import React, { useState } from 'react';
import styles from '../styles/loginpage.module.scss';
import axios from "axios";
import { EmptyLogin, Login } from "../interface/user";
import {useNavigate} from "react-router-dom";

function LoginPage({ login, setLogin }: { login: boolean; setLogin: React.Dispatch<React.SetStateAction<boolean>> }) {
    if (login) {
        setLogin(true);
    }
    else {
        setLogin(false);
    }
    const navigate = useNavigate();
    const [data, setData] = useState<Login>(EmptyLogin);
    const baseUrl = "http://3.37.252.66:8080";
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();  // form 태그의 기본 동작을 방지합니다.
        console.log(inputs);
        axios.post(`${baseUrl}/user/authenticate`, inputs)
            .then((response) => {
                if (response.status === 200) {
                    // alert('Login successful!');
                    setData(response.data);
                    navigate("/");
                    setLogin(true);
                    // 여기서 원하는 동작을 추가할 수 있습니다. 예: 페이지 이동 등.
                } else {
                    alert('Login failed. Please try again.');
                }
            })
            .catch(error => {
                if (error.response) {
                    alert(`Error: ${error.response.data}`);
                } else {
                    alert('Error during login');
                }
            });

        setInputs({
            username: '',
            password: ''
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.loginSection}>
                <div className={styles.loginImage}>
                    <h2>로그인</h2>
                </div>
                <div className={styles.loginForm}>
                    <div className={styles.loginFormTitle}>
                        <h4>Welcome to <span className={styles.green}>ECORUNNER</span></h4>
                        <div className={styles.loginFormTitleSignup}>
                            <h4>계정이 없으신가요? <a href="/signup" className={styles.green}>회원가입</a></h4>
                        </div>
                    </div>
                    <form className={styles.form} onSubmit={handleLogin}>
                        <label>
                            사용자이름 혹은 이메일 주소
                            <input type="text" name="username" placeholder="Username or Email Address" className={styles.input} value={inputs.username} onChange={onChange} />
                        </label>
                        <label>
                            비밀번호
                            <input type="password" name="password" placeholder="Password" className={styles.input} value={inputs.password} onChange={onChange} />
                        </label>
                        <button type="submit" className={styles.submitButton}>로그인</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
