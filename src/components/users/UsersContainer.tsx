import React from 'react'
import {connect, ConnectedProps} from "react-redux";

import {
    follow,
    setCurrentPage, setToggleFetching,
    setUsers, setTotalUsersCount,
    unfollow, toggleFolowingProgress
} from "../../redux/users-reducer";

import {AppStateType} from "../../redux/redux-store";
import {Users} from "./Users";

import {Preloader} from "../common/preloader";
import {userAPI} from "../../api/api";


export class UsersContainer extends React.Component<UserPropsType> {

    componentDidMount() {
    this.props.setToggleFetching(true)

        userAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {

                this.props.setToggleFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setToggleFetching(true)
        userAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setToggleFetching(false)
                this.props.setUsers(data.items)
            })
    }


    render() {

        return (
            <>
                { this.props.isFetching ? <Preloader /> : null }
            <Users totalUsersCount = {this.props.totalUsersCount}
                   pageSize = {this.props.pageSize}
                   currentPage = { this.props.currentPage}
                   onPageChanged = {this.onPageChanged}
                   users = {this.props.users}
                   follow = {this.props.follow}
                   unfollow = {this.props.unfollow}
                   toggleFolowingProgress = {this.props.toggleFolowingProgress}
                   followingInProgress = {this.props.followingInProgress}

            />
            </>
        )
    }
}

let mapStateToProps = (state: AppStateType) => {
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


const connector = connect(mapStateToProps, {follow, unfollow, setUsers,
    setCurrentPage, setTotalUsersCount, setToggleFetching, toggleFolowingProgress}
)

export type UserPropsType = ConnectedProps<typeof connector>

export default connector(UsersContainer)