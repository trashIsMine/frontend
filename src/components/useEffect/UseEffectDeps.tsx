import React, {useState} from "react";
import UserPhone from "./UserPhone";

// 모델
export interface User{
    id: string,
    user: string,
    phone: string,
}


const UseEffectDeps = () => {
    const initialUsers: User[] = [
        {
            id: "1",
            user: "홍길동",
            phone: "010-1111-2222"
        },
        {
            id: "2",
            user: "임꺽정",
            phone: "010-2222-3333"
        },
        {
            id: "3",
            user: "세종대왕",
            phone: "010-3333-4444"
        }
    ];

    const [userName, setUserName] = useState<string>("");

    const [phone, setPhone] = useState<string>("");

    const [users, setUsers] = useState<User[]>(initialUsers);

    const setNameHandler = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setUserName(e.target.value);
    }

    const setPhoneHandler = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setPhone(e.target.value);
    }

    const onRegister = () => {
        const id: string = (users.length+1).toString();
        const user: User = {
            id: id,
            user: userName,
            phone: phone,
        }
        setUsers([...users, user]);
    }

    const onRemove = (id: string) => {
        setUsers(users.filter(user => user.id !== id));
    }

    return (
        <div>
            <div>
                <input onChange={setNameHandler} value={userName}/>
                <input onChange={setPhoneHandler} value={phone}/>
                <button onClick={onRegister}>등록</button>
            </div>
            {users.map((user) => (
                <UserPhone key={user.id} user={user} onRemove={onRemove}/>
            ))}
        </div>
    )
}

export default UseEffectDeps