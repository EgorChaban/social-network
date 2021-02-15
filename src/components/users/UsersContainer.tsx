import React from 'react'
import {connect, ConnectedProps} from "react-redux";
import {Users} from "./Users";
import {
    followAC,
    InitialUsersStateType,
    setCurrentPageAC,
    setUsersAC, setUsersTotalCountAC,
    unfollowAC,
    UsersActionType
} from "../../redux/users-reducer";
import {UsersType} from "../../redux/store";
import {AppStateType} from "../../redux/redux-store";



let mapStateToProps = (state: AppStateType) => {
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch: ( action: UsersActionType) => void) => {
    return{
        follow: ( userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users:Array<UsersType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount:number) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

export type UserPropsType = ConnectedProps<typeof connector>

export default connector(Users)