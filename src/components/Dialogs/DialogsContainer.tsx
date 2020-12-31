import React, {KeyboardEvent} from "react";

import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StoreType} from "../../redux/store";


type PropsType = {
    store: StoreType
}


export const DialogsContainer = (props: PropsType) => {

    const addMessage = () => {
            props.store.dispatch(addMessageActionCreator())
    }

    let onMessageChange = (message: string) => {
            props.store.dispatch(onMessageChangeActionCreator(message))
    }

    return (
        <Dialogs  addMessage={addMessage} onMessageChange={onMessageChange}
        dialogs={props.store._state.dialogsPage}/>
    )
}