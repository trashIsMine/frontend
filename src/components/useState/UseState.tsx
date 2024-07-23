import React, {useState} from "react";

const UseState = () => {
    const user: string[]  = ["김한결", "박사성", "이지선"];
    const [value, setValue] = useState<number>(0)

    const change = () => {
        setValue((value+1)%3);
        console.log(`이름 : ${user[value]}`);
    }

    return(
        <div>
            <h1><b>당신의 이름은 {user[value]}입니다.</b></h1>
            <button onClick={change}>이름 변경</button>
        </div>
    )
}

export default UseState