import React, { useState } from 'react';
import TopMenu from '../components/TopMenu'
import styles from '../styles/loginpage.module.scss';

function LoginPage() {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const emailChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const passwordChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    return (
        <div className={styles.container}>
            <div className={styles.loginSection}>
                <div className={styles.loginImage}>
                    <h2>로그인</h2>
                    {/*<img src="unsplash_cLaaxa4DSnc-removebg-preview 1.png" alt="Plant" className="plant-image"/>*/}
                </div>
                <div className={styles.loginForm}>
                    <div className={styles.loginForm__title}>
                        <h4>Welcome to <span className={styles.green}>ECORUNNER</span></h4>
                        <div className={styles.loginForm__title__signup}>
                            <h4>계정이 없으신가요?</h4>
                            <a className={styles.green}>회원가입</a>
                        </div>
                    </div>
                    <h3>로그인</h3>
                    <form>
                        <label>
                            사용자이름 혹은 이메일 주소
                            <input type="text" name="username" placeholder="Username or Email Address" onChange={emailChanged}/>
                        </label>
                        <label>
                            비밀번호
                            <input type="password" name="password" placeholder="Password" onChange={passwordChanged} />
                        </label>
                        <button type="submit" className={styles.submitButton}>로그인</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;