import React, {ChangeEvent, MouseEvent, useState} from 'react'
import Greeting from './Greeting'
import {localStateType} from "./HW3";

type GreetingContainerPropsType = {
    users: localStateType // need to fix any
    addUserCallback: (name: string)=> void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e:ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix

    }
    const addUser = () => {
            if (name){
                setError('')
                addUserCallback(name)
                setName('')
                alert(`Привет,${name} проверяешь домашку?`) // need to fix
            }else{
                setError('Поле не может быть пустым!')
            }
    }

    const totalUsers = ` кол-во людей, которые прошли мимо меня: {~${users.length}~} ` // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
