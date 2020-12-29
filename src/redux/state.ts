import {v1} from "uuid";
let selfAvatar = 'https://www.meme-arsenal.com/memes/c651160ee5a293f357522fdd83ddbf64.jpg';




// DIALOGS
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
    newMessageText: string
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
}
/// PROFILE
export type PostType = {
    id: string
    message: string
    likesCount: number
    img: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
// ROOT
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sideBar: Array<SideBarType>
}
// SIDEBAR
export type SideBarType = {
    id: string
    img: string
    name: string
}
// STORE
export type StoreType = {
    _state: RootStateType
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
    // addMessage: () => void
    // updateNewMessageText: (newMsg: string) => void
    _callSubscriber: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch:(action: ActionsTypes) => void
}



//ACTION CONSTANTS
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POSt-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

//ACTION TYPES
type AddPostActionType = ReturnType<typeof addPostActionCreator>
type UpdateNewPostActionType = ReturnType<typeof updateNewPostTextActionCreator>
type addMessageActionType = ReturnType<typeof addMessageActionCreator>
type UpdateNewMessageActionType = ReturnType<typeof updateNewPostTextActionCreator>

export type ActionsTypes = AddPostActionType | UpdateNewPostActionType
    | addMessageActionType | UpdateNewMessageActionType



export let store: StoreType = {
    _state: {

        sideBar: [
            {
                id: v1(),
                name: 'Dimych',
                img: 'https://png.pngtree.com/png-vector/20191116/ourlarge/pngtree-businessman-avatar-icon-vector-download-vector-user-icon-avatar-silhouette-social-png-image_1991050.jpg'
            },
            {
                id: v1(),
                name: 'Andrey',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3enUqMY0Q7ro2iTlw90Z3A9b0JRl1cXtXAoBdYOfrvJWBi6V1M4KPfrX7htT1fTOPLtbfjpelIQ8wObM4tVzuCwZ8kdteGqS9UQ&usqp=CAU&ec=45732304'
            },
            {id: v1(), name: 'Sveta', img: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX33495464.jpg'},
            {
                id: v1(),
                name: 'Sasha',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeHap6MHS88DOJ02HgOdYogpj44m1lhUDDZliU2L9vX_F9NXSjJGabh8xbYb9QgArwdLBBSRUw5g1otvcxm7gflsDUUZOZnAULrQ&usqp=CAU&ec=45732304'
            },
            {
                id: v1(),
                name: 'Victor',
                img: 'https://png.pngtree.com/png-clipart/20190924/original/pngtree-business-people-avatar-icon-user-profile-free-vector-png-image_4815126.jpg'
            },
            {
                id: v1(),
                name: 'Valera',
                img: 'https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg'
            },
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
            newPostText: ''

        },
        dialogsPage: {
            newMessageText: '',
            messages: [
                {id: hostId1, message: 'How your it-kamasutra'},
                {id: hostId2, message: 'Hi'},

            ],
            dialogs: [
                {
                    id: v1(),
                    name: 'Dimych',
                    img: 'https://png.pngtree.com/png-vector/20191116/ourlarge/pngtree-businessman-avatar-icon-vector-download-vector-user-icon-avatar-silhouette-social-png-image_1991050.jpg'
                },
                {
                    id: v1(),
                    name: 'Andrey',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3enUqMY0Q7ro2iTlw90Z3A9b0JRl1cXtXAoBdYOfrvJWBi6V1M4KPfrX7htT1fTOPLtbfjpelIQ8wObM4tVzuCwZ8kdteGqS9UQ&usqp=CAU&ec=45732304'
                },
                {id: v1(), name: 'Sveta', img: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX33495464.jpg'},
                {
                    id: v1(),
                    name: 'Sasha',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeHap6MHS88DOJ02HgOdYogpj44m1lhUDDZliU2L9vX_F9NXSjJGabh8xbYb9QgArwdLBBSRUw5g1otvcxm7gflsDUUZOZnAULrQ&usqp=CAU&ec=45732304'
                },
                {
                    id: v1(),
                    name: 'Victor',
                    img: 'https://png.pngtree.com/png-clipart/20190924/original/pngtree-business-people-avatar-icon-user-profile-free-vector-png-image_4815126.jpg'
                },
                {
                    id: v1(),
                    name: 'Valera',
                    img: 'https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg'
                },
            ],
        },
    },
    _callSubscriber() {
        console.log('State  changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },



    dispatch(action: any){
        //POST
        if (action.type === ADD_POST) {
            const newPost: PostType = {
                id: v1(),
                message: this._state.profilePage.newPostText,
                likesCount: 0,
                img: selfAvatar
            }
            this._state.profilePage.posts.unshift(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        }
        else if (action.type === UPDATE_NEW_POST){
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        }
        //MESSAGE
        else if(action.type === ADD_MESSAGE) {
            const newMessage: MessagesType = {
                id: hostId1,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.unshift(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber()
        }
        else if(action.type === UPDATE_NEW_MESSAGE_TEXT){
            this._state.dialogsPage.newMessageText = action.newMsg
            this._callSubscriber()
        }
    }

}

//ACTION CREATORS
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string) => ({
        type: UPDATE_NEW_POST,
        newText: text
})

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})


export const onMessageChangeActionCreator = (msg: string) =>( {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMsg: msg
})



