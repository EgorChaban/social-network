import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth.reducer";




let rootReducer = combineReducers({
   profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})


type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>


export let store = createStore(rootReducer)

//@ts-ignore
window.store = store