import React from "react";
import s from './Navbar.module.css'
import {SideBarType} from "../../redux/state";

export function Friends(props: SideBarType){

    return(
    <div key={props.id} className={s.friendsWrapp}>
        <img src={props.img} alt="img" className={s.friendsImg}/>
        <div className={s.friendsName}> {props.name}</div>
    </div>)

}