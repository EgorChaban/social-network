import {SideBarType} from "./store";
import {v1} from "uuid";


export type sidebarActionType = ReturnType<typeof sidebarActionCreator>

export const sidebarActionCreator = () => ({type: 'SIDEBAR-ACTION'} as const)

let initialState =
    [
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
]


export const sidebarReducer = (state: Array<SideBarType> = initialState, action: sidebarActionType) => {
    return state
}