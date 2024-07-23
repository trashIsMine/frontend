import React, {useEffect} from "react";
import {User} from "./UseEffectDeps";

interface UserPhoneProps{
    user: User;
    onRemove: (id:string)=>void;
}

const UserPhone = ({user, onRemove,}: UserPhoneProps) => {

    useEffect(() => {
        console.log("값 변경");
        console.log(user);
        return ()=>{
            console.log("값 변경 전")
            console.log(user);
        }
    }, [user]);

    return(
        <div>
            <b
                style={{
                    cursor: 'pointer',
                }}
            >
                {user.user}
            </b>
            &nbsp;
            <span>({user.phone})</span>
            <button onClick={() => onRemove && onRemove(user.id)}>삭제</button>
        </div>
    )
}

export default UserPhone