import React from "react";
import s from "./../Dialogs.module.css";
import {MessagesType} from "../../../redux/state";





export const Message = (props: MessagesType) => {
    return (
        <div className={props.host === 2 ? s.msg2 : s.msg1} >
            {props.message}

        </div>
    )
}
