import React from 'react'
import {AffairType} from "./HW2";
import  s from './affair.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number)=> void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => { // need to fix
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div className={s.affairWrapper}>
            <div className={s.affairName}>{props.affair.name}</div>
            <div className={s.priority}>{` priority: ${props.affair.priority}`}</div>
            <button onClick={deleteCallback}>X</button>
            <br/>
        </div>
    )
}

export default Affair
