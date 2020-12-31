import React from "react";

import {addPostActionCreator, AddPostActionType, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreType} from "../../../redux/store";
import {StoreContext} from "../../../StoreContext";


type PropsType = {
    store: StoreType
}

export function MyPostsContainer(props: PropsType) {



    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }


    let onPostChange = (text: string) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }

    return (

        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            profilePage={props.store._state.profilePage}/>

    )

}

