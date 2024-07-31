import styles from "../styles/loginpage.module.scss";
import React from "react";

interface LoginCheckBoxProps {
    id: string;
    text: string;
    className?: string;
}

function LoginCheckBox({id, text, className} : LoginCheckBoxProps) {
    return (
        <label aria-label={id} className={`${styles.checkbox} ${className}`}>
            <input id={id} type="checkbox" />{text}
        </label>
    );
}

export default LoginCheckBox;