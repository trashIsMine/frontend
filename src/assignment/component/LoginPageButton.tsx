import styles from "../styles/loginpage.module.scss";
import React from "react";

interface LoginPageButtonProps {
    id: string,
    value: string,
    _onClick: (e: React.MouseEvent<HTMLInputElement>) => void,
    className?: string,
}

function LoginPageButton({id, value, className, _onClick}: LoginPageButtonProps) {
    return (
        <label aria-label={id}>
            <input id={id}
                   type="button"
                   value={value}
                   onClick={_onClick}
                   className={`${styles.loginbutton} ${className}`}
            />
        </label>
    );
}

function ExtraButton({id, value, className, _onClick}: LoginPageButtonProps) {
    return (
        <label aria-label={id} className={`${styles.extrabutton} ${className}`}>
            <input id={id} type="button" value={value} onClick={_onClick}/>
        </label>
    );
}

export {LoginPageButton, ExtraButton};