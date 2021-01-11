import React from "react";

import {addPostActionCreator,  updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";

import {connect} from "react-redux";
import {ActionsTypes, ProfilePageType} from "../../../redux/store";
import {AppStateType} from "../../../redux/redux-store";


type mapStateToPropsType = {
    profilePage : ProfilePageType

}

type mapDispatchToPropsType = {
    addPost : () => void
    updateNewPostText: (text:string) => void
}

export let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return{
        profilePage: state.profilePage
    }
}

export let mapDispatchToProps = (dispatch: (action: ActionsTypes) => void): mapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text:string) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
    }
}

export const MyPostsContainer= connect(mapStateToProps, mapDispatchToProps)(MyPosts)

