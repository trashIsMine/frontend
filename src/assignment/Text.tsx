import React from "react";

interface Textprops{
    text: string;
    color: string;
}

function Text({...props}:Textprops) {
    return (<div style={{color: props.color}}>
        {props.text}
    </div>
    );
}

export default Text;