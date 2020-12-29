import React, {KeyboardEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {
    ActionsTypes,
    addPostActionCreator,
    ProfilePageType,
    updateNewPostTextActionCreator
} from "../../../redux/state";


type PropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

export function MyPosts(props: PropsType) {



    let postsElement = props.profilePage.posts.map( p =>
        <Post
            key = {p.id}
            id= {p.id}
            message={p.message}
            likesCount={p.likesCount}
            img={p.img}
    />
    )

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
          if (newPostElement.current) {
              props.dispatch(addPostActionCreator())
          }
    }
    const onKeyPressEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter'){
            addPost()
        }
    }

    let onPostChange = () => {

        if(newPostElement.current){
            props.dispatch(updateNewPostTextActionCreator(newPostElement.current.value))
        }

    }

    return (
        <div className={s.postBlock}>
            <h3 className={s.postBlockTitle}>My posts</h3>
            <div className={s.postBlockItem}>
                    <textarea
                              onChange={onPostChange}
                              ref={newPostElement}
                              className={s.postArea}
                              placeholder={'add post...'}
                              onKeyPress={onKeyPressEnter}
                              value={props.profilePage.newPostText}

                    />
                    <button onClick={ addPost } className={s.postBtn}>Add post</button>
            </div>

            <div className={s.posts}>

                {postsElement}

            </div>
        </div>
    )

}

