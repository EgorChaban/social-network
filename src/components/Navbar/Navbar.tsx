import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {Friends} from "./Friends";
import {RootStateType} from "../../redux/state";


type PropsType = {
    state: RootStateType
}

function Navbar(props: PropsType) {

    let friendList = props.state.sideBar
        .map(t => <Friends id={t.id} img={t.img} name={t.name}/>)


    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink exact to='/' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/item' activeClassName={s.activeLink}>Settings</NavLink>
            </div>

            <div className={s.friendsTitle}>Friends</div>
            <div className={s.friends}>
                {friendList}
            </div>
        </nav>


    )
}

export default Navbar;