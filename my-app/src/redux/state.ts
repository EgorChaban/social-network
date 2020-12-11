import {rerenderEntireTree} from "../render";

const selfAvatar = 'https://www.meme-arsenal.com/memes/c651160ee5a293f357522fdd83ddbf64.jpg'

export type MessagesType = {
    id: number
    host: number
    message: string

}
export type  DialogsType = {
    id: number
    name: string
    img: string
}
export type DialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
}

export type PostType = {
    id: number
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
    id: number
    img: string
    name: string
}


export let state: RootStateType = {

sideBar: [
            {id: 1, name: 'Dimych', img: 'https://png.pngtree.com/png-vector/20191116/ourlarge/pngtree-businessman-avatar-icon-vector-download-vector-user-icon-avatar-silhouette-social-png-image_1991050.jpg'},
            {id: 2, name: 'Andrey', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3enUqMY0Q7ro2iTlw90Z3A9b0JRl1cXtXAoBdYOfrvJWBi6V1M4KPfrX7htT1fTOPLtbfjpelIQ8wObM4tVzuCwZ8kdteGqS9UQ&usqp=CAU&ec=45732304'},
            {id: 3, name: 'Sveta', img: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX33495464.jpg'},
            {id: 4, name: 'Sasha', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeHap6MHS88DOJ02HgOdYogpj44m1lhUDDZliU2L9vX_F9NXSjJGabh8xbYb9QgArwdLBBSRUw5g1otvcxm7gflsDUUZOZnAULrQ&usqp=CAU&ec=45732304'},
            {id: 5, name: 'Victor', img: 'https://png.pngtree.com/png-clipart/20190924/original/pngtree-business-people-avatar-icon-user-profile-free-vector-png-image_4815126.jpg'},
            {id: 6, name: 'Valera', img: 'https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg'},
       ],

    profilePage: {
        posts: [
            {
                id: 1,
                message: 'Hi, how are you',
                likesCount: 15,
                img: selfAvatar
            },
            {
                id: 2,
                message: 'Its my first post!',
                likesCount: 10,
                img: selfAvatar
            },
            {
                id: 3,
                message: 'YOYOYOOYO!',
                likesCount: 25,
                img: selfAvatar
            },
            {
                id: 4,
                message: 'dada',
                likesCount: 25,
                img: selfAvatar
            },
        ],

    },
    dialogsPage: {
        messages: [
            {id: 1, host: 1, message: 'Hi'},
            {id: 2, host: 2, message: 'How your it-kamasutra'},
            {id: 3, host: 1, message: 'Yo'},
            {id: 4, host: 2, message: 'YoYOYO'},
        ],
        dialogs: [
            {id: 1, name: 'Dimych', img: 'https://png.pngtree.com/png-vector/20191116/ourlarge/pngtree-businessman-avatar-icon-vector-download-vector-user-icon-avatar-silhouette-social-png-image_1991050.jpg'},
            {id: 2, name: 'Andrey', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3enUqMY0Q7ro2iTlw90Z3A9b0JRl1cXtXAoBdYOfrvJWBi6V1M4KPfrX7htT1fTOPLtbfjpelIQ8wObM4tVzuCwZ8kdteGqS9UQ&usqp=CAU&ec=45732304'},
            {id: 3, name: 'Sveta', img: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX33495464.jpg'},
            {id: 4, name: 'Sasha', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeHap6MHS88DOJ02HgOdYogpj44m1lhUDDZliU2L9vX_F9NXSjJGabh8xbYb9QgArwdLBBSRUw5g1otvcxm7gflsDUUZOZnAULrQ&usqp=CAU&ec=45732304'},
            {id: 5, name: 'Victor', img: 'https://png.pngtree.com/png-clipart/20190924/original/pngtree-business-people-avatar-icon-user-profile-free-vector-png-image_4815126.jpg'},
            {id: 6, name: 'Valera', img: 'https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg'},
        ],
    },
}
export const addPost = (postMessage: string) => {

    const newPost: PostType = {
        id: 5,
        message: postMessage,
        likesCount: 0,
        img: "https://i.pinimg.com/236x/11/70/25/1170255c5a3a52a2e91a6ba7fb2590a1.jpg",
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

