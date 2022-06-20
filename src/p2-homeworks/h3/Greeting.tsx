import React, {ChangeEvent, MouseEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e:ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: string // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> =
    ({name, setNameCallback, addUser, error, totalUsers}) => {
    const inputClass = (error) ? s.error : s.someClass // need to fix with (?:)


    return ( //addUser
        <div>
             <SuperInputText error={error} onChange={setNameCallback} value={name}
                             onEnter={addUser} className={inputClass}/>

            <SuperButton onClick={addUser}>add</SuperButton>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
