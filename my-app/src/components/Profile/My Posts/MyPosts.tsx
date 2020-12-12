import React, {KeyboardEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {ProfilePageType} from "../../../redux/state";


type PropsType = {
    state: ProfilePageType
    addPost: (m:string) => void
}




export function MyPosts(props: PropsType) {



    let postsElement = props.state.posts.map( p =>
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
            props.addPost(newPostElement.current.value)
            newPostElement.current.value = '';
        }
    }
    const onKeyPressEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter'){
            addPost()
        }
    }


    return (
        <div className={s.postBlock}>
            <h3 className={s.postBlockTitle}>My posts</h3>
            <div className={s.postBlockItem}>
                    <textarea ref={newPostElement}
                              className={s.postArea}
                              placeholder={'add post...'}
                              onKeyPress={onKeyPressEnter}
                    ></textarea>
                    <button onClick={ addPost } className={s.postBtn}>Add post</button>
            </div>

            <div className={s.posts}>

                {postsElement}

            </div>
        </div>
    )

}

