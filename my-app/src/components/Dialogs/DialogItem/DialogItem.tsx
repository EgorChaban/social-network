import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogsType} from "../../../redux/state";


export const DialogItem = (props: DialogsType) => {

    return (
        <div className={s.dialog}>



                <NavLink to={'/dialogs/' + props.id}

                         activeClassName={s.active}
                         >
                    <img src={props.img} alt="img"/>
                    <div className={s.dialogName}>{props.name}</div>
                </NavLink>


        </div>
    )
};