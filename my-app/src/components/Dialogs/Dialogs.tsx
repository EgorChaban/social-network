import React from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";


type PropsType = {
    state: DialogsPageType
}


export const Dialogs = (props: PropsType) => {



    let dialogsElement = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} img = {d.img}/>);


    let messagesElement = props.state.messages
        .map(m => <Message
            message={m.message}
            id={m.id}
            host={m.host}

        />)

    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        alert(newMessageElement.current?.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElement}

            </div>
            <div className={s.messages}>

                <div className={s.addMessage}>
                    <button className={s.btnMessage} onClick={addMessage}>Send</button>
                    <textarea className={s.areaMessage} placeholder='message' ref={newMessageElement}></textarea>
                </div>
                {messagesElement}

            </div>
        </div>
    )
}