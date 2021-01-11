import React from "react";

import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";


import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ActionsTypes, DialogsPageType} from "../../redux/store";

type mapDispatchToPropsType = {
    addMessage: () => void
    onMessageChange: (message: string) => void
}
type mapStateToPropsType = {
    dialogsPage: DialogsPageType
}

let mapStateToProps = (state: AppStateType):  mapStateToPropsType=> {

    return{
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch : (action: ActionsTypes) => void): mapDispatchToPropsType=> {
    return {
        addMessage : () => {
            dispatch(addMessageActionCreator())
        },
        onMessageChange : (message: string) => {
            dispatch(onMessageChangeActionCreator(message))
        }
    }
}


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)