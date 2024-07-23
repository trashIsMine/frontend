import React, {useState} from "react";
import Hello, {HelloProps} from '../components/Hello';
import Wrapper from "../components/Wrapper";

const ListPage = () => {
    const [name, setName] = useState<string>("");
    const [color, setColor] = useState<string>("");
    const [isSpecial, setIsSpecial] = useState<boolean>(false);
    const [items, setItmes] = useState<HelloProps[]>(
        [{
            name: "김의수",
            color: 'black',
            isSpecial: true,
        }]
    );

    const setNameHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }


    const setColorHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value)
    }

    const setCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsSpecial(e.target.checked)
    }

    const itemRegister = () => {
        const newItem: HelloProps = {
            name,
            color,
            isSpecial,
        };
        setItmes([...items, newItem]);
        // 입력 필드 초기화
        setName("");
        setColor("");
        setIsSpecial(false);
    }

    return (
        <>
            <Wrapper>
                {items.map((item, index) => (
                    /**
                     * gpt
                     */
                    <Hello
                        key={index}
                        name={item.name}
                        color={item.color}
                        isSpecial={item.isSpecial}
                    />
                ))}
            </Wrapper>

            <label aria-label="이름">
                <input id="이름" placeholder="이름 입력" value={name} onChange={setNameHandle}
                       style={{width: 150, marginRight: 15}}/>{/*input 완성 시키기*/}
            </label>
            <label aria-label="색">
                <input id="색" placeholder="색상 입력" value={color} onChange={setColorHandle}
                       style={{width: 150, marginRight: 15}}/>{/*input 완성 시키기*/}
            </label>
            <label>
                <input type="checkbox" checked={isSpecial} onChange={setCheck}/>{/*gpt*/}
                {isSpecial ? '보여준다' : '안보여준다'}
            </label>
            <button onClick={itemRegister}>추가{/*gpt*/}</button>
        </>
    );
}

export default ListPage