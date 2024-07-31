import React, {useState} from 'react';
import TopMenu from '../components/TopMenu'

function SignupPage() {
    const [ email, setEmail ] = useState("");
    const [ nickname, setNickname ] = useState("");
    const [ contact, setContact ] = useState("");
    const [ password, setPassword ] = useState("");

    const emailChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const nicknameChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNickname(e.target.value);
    }

    const contactChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContact(e.target.value);
    }

    const passwordChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    return (
        <div className="container">
                <div className="login-section">
                    <div className="login-image">
                        <h2>회원가입</h2>
                        <img src="unsplash_cLaaxa4DSnc-removebg-preview 1.png" alt="Plant" className="plant-image"/>
                    </div>

                    <div className="signup-form">
                        <div className="login-form__title">
                            <h4>Welcome to <span className="green">ECORUNNER</span></h4>
                            <div className="login-form__title__signup">
                                <h4>계정이 있으신가요?</h4>
                                <a className="green">로그인</a>
                            </div>
                        </div>
                        <h3>회원가입</h3>
                        <form>
                            <label>
                                사용자이름 혹은 이메일을 입력해주세요.
                                <input type="text" name="username" placeholder="Username or Email Address" onChange={emailChanged} />
                            </label>
                            <div className="login-form__twice">
                                <label>
                                    사용자 이름
                                    <input type="text" name="nickname" placeholder="User Name" onChange={nicknameChanged} />
                                </label>
                                <label>
                                    전화번호
                                    <input type="text" name="contactnum" placeholder="Contact Number" onChange={contactChanged}/>
                                </label>
                            </div>
                            <label>
                                비밀번호
                                <input type="password" name="password" placeholder="Password" onChange={passwordChanged} />
                            </label>
                            <button type="submit" className="submit-button">회원가입</button>
                        </form>
                    </div>
                </div>
        </div>
    );
}

export default SignupPage;