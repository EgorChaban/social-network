import {v1} from "uuid";
import {
    PostType, ProfilePageType, ProfileType,
    selfAvatar,
} from "./store";

//ACTION CONSTANTS
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = 'SET_USER_PROFILE'


let initialState = {
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
    newPostText: '',
    profile: {} as ProfileType
}
export type ProfileActionType =
    AddPostActionType
    | UpdateNewPostActionType
    | setUserProfileType


export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type UpdateNewPostActionType = ReturnType<typeof updateNewPostTextActionCreator>
export type setUserProfileType = ReturnType<typeof setUserProfile>


export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0,
                img: selfAvatar
            }
            return {
                ...state,
                newPostText: '',
                posts: [newPost, ...state.posts]
            }

        }
        case UPDATE_NEW_POST: {
            return {
                ...state,
                newPostText: action.newText
            }
        }

        case SET_USER_PROFILE: {
            return{...state, profile: action.profile}
        }

        default:
            return {...state}
    }

};

export const addPostActionCreator = () => ({type: ADD_POST} as const)

export const updateNewPostTextActionCreator = (text: string) => ({
    type: UPDATE_NEW_POST,
    newText: text
} as const)

export const setUserProfile = (profile: ProfileType) => ({
       type: SET_USER_PROFILE,
        profile
} as const)