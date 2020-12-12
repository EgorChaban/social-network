import {rerenderEntireTree} from "../render";
import {v1} from "uuid";

const selfAvatar = 'https://www.meme-arsenal.com/memes/c651160ee5a293f357522fdd83ddbf64.jpg'

export type MessagesType = {
    id: string
    message: string
}
export const hostId1 = v1()
export const hostId2 = v1()
export type  DialogsType = {
    id: string
    name: string
    img: string
}
export type DialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
}

export type PostType = {
    id: string
    message: string
    likesCount: number
    img: string
}
export type ProfilePageType = {
    posts: Array<PostType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sideBar: Array<SideBarType>
}

export type SideBarType = {
    id: string
    img: string
    name: string
}


export let state: RootStateType = {

sideBar: [
            {id: v1(), name: 'Dimych', img: 'https://png.pngtree.com/png-vector/20191116/ourlarge/pngtree-businessman-avatar-icon-vector-download-vector-user-icon-avatar-silhouette-social-png-image_1991050.jpg'},
            {id: v1(), name: 'Andrey', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3enUqMY0Q7ro2iTlw90Z3A9b0JRl1cXtXAoBdYOfrvJWBi6V1M4KPfrX7htT1fTOPLtbfjpelIQ8wObM4tVzuCwZ8kdteGqS9UQ&usqp=CAU&ec=45732304'},
            {id: v1(), name: 'Sveta', img: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX33495464.jpg'},
            {id: v1(), name: 'Sasha', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeHap6MHS88DOJ02HgOdYogpj44m1lhUDDZliU2L9vX_F9NXSjJGabh8xbYb9QgArwdLBBSRUw5g1otvcxm7gflsDUUZOZnAULrQ&usqp=CAU&ec=45732304'},
            {id: v1(), name: 'Victor', img: 'https://png.pngtree.com/png-clipart/20190924/original/pngtree-business-people-avatar-icon-user-profile-free-vector-png-image_4815126.jpg'},
            {id: v1(), name: 'Valera', img: 'https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg'},
       ],

    profilePage: {
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

    },
    dialogsPage: {
        messages: [
            {id: hostId1, message: 'How your it-kamasutra'},
            {id: hostId2, message: 'Hi'},

        ],
        dialogs: [
            {id: v1(), name: 'Dimych', img: 'https://png.pngtree.com/png-vector/20191116/ourlarge/pngtree-businessman-avatar-icon-vector-download-vector-user-icon-avatar-silhouette-social-png-image_1991050.jpg'},
            {id: v1(), name: 'Andrey', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3enUqMY0Q7ro2iTlw90Z3A9b0JRl1cXtXAoBdYOfrvJWBi6V1M4KPfrX7htT1fTOPLtbfjpelIQ8wObM4tVzuCwZ8kdteGqS9UQ&usqp=CAU&ec=45732304'},
            {id: v1(), name: 'Sveta', img: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX33495464.jpg'},
            {id: v1(), name: 'Sasha', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeHap6MHS88DOJ02HgOdYogpj44m1lhUDDZliU2L9vX_F9NXSjJGabh8xbYb9QgArwdLBBSRUw5g1otvcxm7gflsDUUZOZnAULrQ&usqp=CAU&ec=45732304'},
            {id: v1(), name: 'Victor', img: 'https://png.pngtree.com/png-clipart/20190924/original/pngtree-business-people-avatar-icon-user-profile-free-vector-png-image_4815126.jpg'},
            {id: v1(), name: 'Valera', img: 'https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg'},
        ],
    },
}
export const addPost = (postMessage: string) => {

    const newPost: PostType = {
        id: v1(),
        message: postMessage,
        likesCount: 0,
        img: selfAvatar
    }
    state.profilePage.posts.unshift(newPost)
    rerenderEntireTree(state)
}




export const addMessage = (MessageMsg: string) => {
    const newMessage: MessagesType = {
        id: state.dialogsPage.messages[0].id === hostId1 ? hostId2 : hostId1,
        message: MessageMsg
    }
    state.dialogsPage.messages.unshift(newMessage)
    rerenderEntireTree(state)
}

