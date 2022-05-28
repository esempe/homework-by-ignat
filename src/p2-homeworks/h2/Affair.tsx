import React from 'react'
import {AffairType} from "./HW2";

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
        <div>
            <button onClick={deleteCallback}>X</button>
            {props.affair.name}
            {` priority: ${props.affair.priority}`}
            <br/>
        </div>
    )
}

export default Affair
