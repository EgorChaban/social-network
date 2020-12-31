import {v1} from "uuid";
import {
    PostType, ProfilePageType,
    selfAvatar,
} from "./store";

//ACTION CONSTANTS
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POSt-TEXT";

let initialState= {
        posts: [
            {
                id: v1(),
                message: 'Hi, how are you',
                likesCount: 15,
                img: selfAvatar
            },
            {
                id: v1(),
                message: 'Its my first post!',
                likesCount: 10,
                img: selfAvatar
            },
            {
                id: v1(),
                message: 'YOYOYOOYO!',
                likesCount: 25,
                img: selfAvatar
            },
            {
                id: v1(),
                message: 'dada',
                likesCount: 25,
                img: selfAvatar
            },
        ],
        newPostText: ''
    }

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type UpdateNewPostActionType = ReturnType<typeof updateNewPostTextActionCreator>

export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const updateNewPostTextActionCreator = (text: string) => ({
    type: UPDATE_NEW_POST,
    newText: text
}as const )

export const profileReducer = (state: ProfilePageType = initialState, action: AddPostActionType | UpdateNewPostActionType) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0,
                img: selfAvatar
            }
            state.posts = [newPost, ...state.posts]
            state.newPostText = ''
            return {...state}
        }
        case UPDATE_NEW_POST: {
            state.newPostText = action.newText
            return {...state}
        }
        default:
            return {...state}
    }
    return {
        ...state
    }

};