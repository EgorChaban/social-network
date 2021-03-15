import preloader from "../../assets/images/Preloader.gif";
import s from "../users/Users.module.css";
import React from "react";

export let Preloader = () => {
    return (

        <img src={preloader} className={s.preloader}/>
    )
}