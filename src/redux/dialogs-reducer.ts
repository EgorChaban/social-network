import {
    DialogsPageType,
    MessagesType,
} from "./store";
import {v1} from "uuid";

const hostId1 = v1()
const hostId2 = v1()

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


export type addMessageActionType = ReturnType<typeof addMessageActionCreator>
export type UpdateNewMessageActionType = ReturnType<typeof onMessageChangeActionCreator>


export const addMessageActionCreator = () => ({type: ADD_MESSAGE}as const)
export const onMessageChangeActionCreator = (msg: string) =>( {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMsg: msg
}as const)


let initialState = {
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
}

export const dialogsReducer = (state: DialogsPageType = initialState, action:addMessageActionType | UpdateNewMessageActionType) => {



    switch (action.type) {

        case ADD_MESSAGE:
            const newMessage: MessagesType = {
                id: hostId1,
                message: state.newMessageText
            }
            return {
                ...state,
                newMessageText : '',
                messages: [newMessage, ...state.messages]
            }


        case UPDATE_NEW_MESSAGE_TEXT:
            return{
                ...state,
            newMessageText: action.newMsg
            }

        default:
            return {
               ...state
            }
    }
    return {
        ...state
    }
    }