import React, {useEffect, useState} from "react";

const UnMount = () => {
    useEffect(() => {
        console.log('컴포넌트 마운트')
        return () => {
            console.log('컴포넌트 언마운트')
        }
    }, [])
    return (
        <div>
            <h1>안녕하세요.</h1>
        </div>
    )
}

const UseEffect = () => {
    const [isValue, setIsValue] = useState<boolean>(false);
    const [value, setValue] = useState<string>("마운트");
    const handlerEvent = () => {
        setIsValue((prev) => !prev);
        setValue((prev) => `${prev === "마운트" ? "언마운트" : "마운트"}`)
    }

    return (
        <div>
            {/*조건부랜더링*/}
            {isValue && <UnMount/>}
            <div>
                <h1>React useEffect</h1>
                <button onClick={handlerEvent}>{value}</button>
            </div>
        </div>
    )
}

export default UseEffect;