import classNames from "classnames";
import React from "react";
import "./Button.scss";

interface ButtonProps{
    children?: React.ReactNode;
    size: "large" | "medium" | "small";
    color: "blue" | "pink" | "gray";
    outline?: boolean;
}

const Button = ({ children, size, color, outline}: ButtonProps) => {
    return (
        <button className={classNames("Button", size, color, {outline})}>
            Button
        </button>
    );
};

Button.defaultProps = {
    size: "medium",
    color: "gray",
};
export default Button;