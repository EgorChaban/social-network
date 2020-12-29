import React from "react";
import s from './Post.module.css';
import {PostType} from "../../../../redux/state";




function Post(props: PostType) {
    return (

        <div className={s.item} >
            <img src={props.img} alt="" className={s.itemImg}/>
            <div className={s.textWrap}>
                <div className={s.textPost}>
                    {props.message}
                </div>


                <div className={s.likePost}><img src="https://pngimg.com/uploads/like/like_PNG51.png" alt="like" className={s.likeImg}/> {props.likesCount}</div>
            </div>
        </div>

    )

}

export default Post;