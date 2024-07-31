import React, { useState } from "react";
import styles from "../styles/loginpage.module.scss";
import Wrapper from "../component/Wrapper";
import TextInput from "./TextInput";
import LoginCheckBox from "./LoginCheckBox";
import { LoginPageButton, ExtraButton } from "./LoginPageButton";
import axios from "axios";
import {EmptySignUp, SignUp} from "../../interface/user";

function SignupPage() {
    const [data, setData] = useState<SignUp>(EmptySignUp)
    const baseUrl = "http://3.37.252.66:8080";
    const [inputs, setInputs] = useState({
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
        const { value, id } = e.target;
        setInputs({
            ...inputs,
            [id]: value,
        });
    };

    const onAuthorityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setInputs({
            ...inputs,
            authorityDtoSet: [{ authorityName: value }]
        });
    };

    const SignupOnClick = () => {
        axios.post(`${baseUrl}/articles/create`, {
            'title': '박사성',
            'content': '조민혁',
        })
            .then((response) => {
                if (response.status === 200) {
                    // const {username, name} = response.data
                    alert(response.data);
                    // setData(response.data);
                    console.log(data);
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

    const extraOnClick = () => { };

    return (
        <div className={styles.loginpage}>
            <div>
                <h1>DeamHome</h1>
            </div>

            <div>
                <Wrapper>
                    <div className={styles.inwrapper}>
                        <div>
                            <div>
                                <TextInput id={"username"} placeholder={"아이디"} value={username} onChange={onChange} />
                                <TextInput className={styles.input} id={"password"} placeholder={"비밀번호"} value={password} onChange={onChange} />
                                <TextInput id={"name"} placeholder={"이름"} value={name} onChange={onChange} />
                                <TextInput id={"email"} placeholder={"이메일"} value={email} onChange={onChange} />
                                <TextInput id={"birth"} placeholder={"생년월일"} value={birth} onChange={onChange} />
                                <TextInput id={"introduction"} placeholder={"소개"} value={introduction} onChange={onChange} />
                                <TextInput id={"gender"} placeholder={"성별"} value={gender} onChange={onChange} />
                                <TextInput id={"authorityName"} placeholder={"권한"} value={authorityDtoSet[0].authorityName} onChange={onAuthorityChange} />
                            </div>

                            <div>
                                <LoginCheckBox id={"간편로그인"} text={"간편 로그인 정보 저장"} />
                            </div>
                        </div>

                        <div>
                            <LoginPageButton id={"회원가입"} value={"회원가입"} _onClick={SignupOnClick} />
                        </div>

                        <div className={styles.container}>
                            <div className={styles.left}>
                                <ExtraButton id={"로그인"} value={"로그인"} _onClick={extraOnClick} />
                            </div>
                            <div className={styles.right}>
                                <ExtraButton id={"계정찾기"} value={"계정찾기"} _onClick={extraOnClick} />
                                <ExtraButton id={"비밀번호찾기"} value={"비밀번호 찾기"} _onClick={extraOnClick} />
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </div>
        </div>
    );
}

export default SignupPage;
