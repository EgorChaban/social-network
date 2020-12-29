import React, {KeyboardEvent} from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {ActionsTypes, addMessageActionCreator, DialogsPageType, onMessageChangeActionCreator} from "../../redux/state";


type PropsType = {
    state: DialogsPageType
    dispatch: (action: ActionsTypes) => void
}


export const Dialogs = (props: PropsType) => {


    let dialogsElement = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} img={d.img}/>);


    let messagesElement = props.state.messages
        .map(m => <Message
            message={m.message}
            id={m.id}
        />)

    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        if (newMessageElement.current) {
            props.dispatch(addMessageActionCreator())

        }
    }
    const onKeyPressEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if(e.key === 'Enter'){
            addMessage()
        }
    }

    let onMessageChange = () => {

        if (newMessageElement.current) {
            props.dispatch(onMessageChangeActionCreator(newMessageElement.current.value))
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElement}

            </div>
            <div className={s.messages}>

                <div className={s.addMessage}>
                    <button className={s.btnMessage} onClick={addMessage}>Send</button>
                    <textarea
                              onChange={onMessageChange}
                              className={s.areaMessage}
                              placeholder='message'
                              ref={newMessageElement}
                              onKeyPress={onKeyPressEnter}
                              value={props.state.newMessageText}
                    />
                </div>
                {messagesElement}

            </div>
        </div>
    )
}