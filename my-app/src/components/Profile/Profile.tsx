import React from "react";
import {MyPosts} from "./My Posts/MyPosts";
import s from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/state";

type PropsType ={
    profilePage: ProfilePageType
    dispatch : (action: ActionsTypes) => void
}

function Profile(props: PropsType) {
    return (
        <div >
            <ProfileInfo/>

            <MyPosts
                profilePage={props.profilePage}
                dispatch = {props.dispatch}
            />
        </div>
    )

}

export default Profile;