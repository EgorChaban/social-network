import React from "react";
import {MyPosts} from "./My Posts/MyPosts";
import s from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";
import {PostType} from "../../redux/state";

type PropsType ={
    state: ProfilePageType
    addPost:(m: string) => void
}

function Profile(props: PropsType) {
    return (
        <div >
            <ProfileInfo/>

            <MyPosts state={props.state}
                     addPost = {props.addPost}
            />
        </div>
    )

}

export default Profile;