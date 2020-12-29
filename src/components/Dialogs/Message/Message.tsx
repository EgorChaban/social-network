import React from "react";
import s from "./../Dialogs.module.css";
import {hostId1, MessagesType} from "../../../redux/state";





export const Message = (props: MessagesType) => {
    return (
        <div className={props.id === hostId1 ? s.msg1 : s.msg2} >
            {props.message}

        </div>
    )
}
