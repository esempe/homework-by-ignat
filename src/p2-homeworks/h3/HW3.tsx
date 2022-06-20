import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}
export type localStateType = Array<UserType>
// уровень работы с глобальными данными
function HW3() {
    let [users, setUsers] = useState<localStateType>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix
        let newUser:UserType ={
            _id: v1(),
            name:name,
        } //[newUser,...users]
        setUsers([newUser,...users]) // need to fix
    }
    console.log(users)
    return (
        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <SuperButton onClick={()=>console.log(users)}>test</SuperButton>
            <GreetingContainer users={users}
                               addUserCallback={addUserCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
