import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";




let rootReducer = combineReducers({
   profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
})


type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>


export let store = createStore(rootReducer)