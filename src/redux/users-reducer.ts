
import {UsersPageType, UsersType} from "./store";
import {AppStateType} from "./redux-store";

//ACTION CONSTANTS
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT ="SET_TOTAL_USERS_COUNT"

let initialState: InitialUsersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 4
}

export type InitialUsersStateType = {
    users: Array<UsersType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
}

export type UsersActionType =
    FollowActionType
    | UnfollowActionType
    | SetUsersActionType
    | setCurrentPageACType
    | setUsersTotalCountACType

export type FollowActionType = ReturnType<typeof followAC>
export type UnfollowActionType = ReturnType<typeof unfollowAC>
export type SetUsersActionType = ReturnType<typeof setUsersAC>
export type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export type setUsersTotalCountACType = ReturnType<typeof setUsersTotalCountAC>


export const usersReducer = (state: InitialUsersStateType = initialState, action: UsersActionType): InitialUsersStateType => {
    switch (action.type) {
        case FOLLOW:{
            return {

                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case SET_USERS: {

            return {
                ...state, users: action.users
            }
        }

        case SET_CURRENT_PAGE: {
            return{ ...state, currentPage: action.currentPage}
        }

        case SET_TOTAL_USERS_COUNT:{
            return{ ...state, totalUsersCount: action.totalCount}
        }

        default:
            return state
    }
};

export const followAC = (userId: string) => ({
    type: FOLLOW,
    userId
} as const)

export const unfollowAC = (userId: string) => ({
    type: UNFOLLOW,
    userId
} as const)

export const setUsersAC = (users: Array<UsersType>) => ({
    type: SET_USERS,
    users
} as const)

export const setCurrentPageAC = (currentPage: number) => ({
    type: SET_CURRENT_PAGE,
    currentPage
} as const)
export const setUsersTotalCountAC = (totalCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount
} as const)
