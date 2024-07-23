import React, {useState} from "react";

const UseStateInput = () => {
    const [name, setName] = useState<string>("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName((name)=> name=e.target.value)
    }

    const onClick = () => {
        setName('')
    }

    return(
        <div style={{marginTop: 50, marginLeft:30}}>
            <input style={{marginRight: 15, marginBottom: 20}} onChange={onChange} value={name} type={'text'}/>
            <button onClick={onClick}>초기화</button>
            <h1>
                이름 : {name}
            </h1>
        </div>
    )
}

export default UseStateInput