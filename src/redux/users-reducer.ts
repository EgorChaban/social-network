
import {UsersType} from "./store";


//ACTION CONSTANTS
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT ="SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOOGLE_IS_FOLOWING_PROGRESS = 'TOOGLE_IS_FOLOWING_PROGRESS'

let initialState: InitialUsersStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 4,
    isFetching: false,
    followingInProgress: []
}

export type InitialUsersStateType = {
    users: Array<UsersType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<string>

}

export type UsersActionType =
    FollowActionType
    | UnfollowActionType
    | SetUsersActionType
    | setCurrentPageACType
    | setUsersTotalCountACType
    | setToggleFetchingACType
    |toggleFolowingProgressACType

export type FollowActionType = ReturnType<typeof follow>
export type UnfollowActionType = ReturnType<typeof unfollow>
export type SetUsersActionType = ReturnType<typeof setUsers>
export type setCurrentPageACType = ReturnType<typeof setCurrentPage>
export type setUsersTotalCountACType = ReturnType<typeof setTotalUsersCount>
export type setToggleFetchingACType = ReturnType<typeof setToggleFetching>
export type toggleFolowingProgressACType = ReturnType<typeof toggleFolowingProgress>


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

        case TOGGLE_IS_FETCHING:{
            return{ ...state, isFetching: action.isFetching }
        }
        case TOOGLE_IS_FOLOWING_PROGRESS: {
            return { ...state,
                followingInProgress: action.isFetching
                    ? [ ...state.followingInProgress, action.userId]
                    : [ ...state.followingInProgress.filter(id => id != action.userId) ]
            }
        }

        default:
            return state
    }
};

export const follow = (userId: string) => ({
    type: FOLLOW,
    userId
} as const)

export const unfollow = (userId: string) => ({
    type: UNFOLLOW,
    userId
} as const)

export const setUsers = (users: Array<UsersType>) => ({
    type: SET_USERS,
    users
} as const)

export const setCurrentPage = (currentPage: number) => ({
    type: SET_CURRENT_PAGE,
    currentPage
} as const)
export const setTotalUsersCount = (totalCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount
} as const)
export const setToggleFetching = (isFetching: boolean) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
} as const)
export const toggleFolowingProgress = (isFetching: boolean, userId: string) => ({
    type: TOOGLE_IS_FOLOWING_PROGRESS,
    isFetching, userId
} as const)
