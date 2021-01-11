import React from "react";
import Navbar from "./Navbar";
import {connect} from "react-redux";
import {SideBarType} from "../../redux/store";
import {AppStateType} from "../../redux/redux-store";


type MapStateToPropsType = {
    navbar: Array<SideBarType>
}


let MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return { navbar : state.sideBar}
}


export const NavbarContainer = connect(MapStateToProps)(Navbar)