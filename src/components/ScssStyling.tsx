import React from "react";
import "./styles/ScssStyling.scss"

const ScssStyling = () => {
    return (
        <div className="container">
            <div className="header">
                <h1 className="title">Hello, SCSS!</h1>
            </div>
            <div className="content">
                <p>This is a paragraph.</p>
                <p>This is another paragraph.</p>
            </div>
            <button className="button action">버튼 확인</button>
        </div>
    );
}

export default ScssStyling