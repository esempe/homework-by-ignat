import React from 'react'
import style from './Message.module.css'

type MessageTypeProps = {
    avatar: string;
    name: string;
    message: string;
    time: string;
}

function Message(props: MessageTypeProps) {
    return (
        <div className={style.globalWrapper}>
            <div className={style.messageWrapper}>
                <div className={style.avatarWrapper}>
                    <img src={props.avatar} alt=""/>
                </div>
                <div className={style.messageBody}>
                    <div className={style.messageName}>
                        {props.name}
                    </div>
                    <div className={style.messageText}>
                        {props.message}
                    </div>
                    <div className={style.messageTimeBlock}>
                        <span className={style.messageTime}>
                            {props.time}
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Message
