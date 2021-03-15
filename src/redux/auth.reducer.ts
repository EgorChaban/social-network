

//ACTION CONSTANTS
const SET_USER_DATA = 'SET_USER_DATA'


let initialState: InitialAuthStateType = {
    id: 2,
    email:  'blabla@bla.bla',
    login: 'samurai',
    isAuth: false,
}

export type InitialAuthStateType = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean
}
export type SetUserDataActionType = ReturnType<typeof setAuthUserDataAC>

export type AuthActionType = SetUserDataActionType

export const authReducer = (state: InitialAuthStateType = initialState, action: AuthActionType): InitialAuthStateType => {
    switch (action.type) {
        case SET_USER_DATA:{
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }

        default:
            return state
    }
};

export const setAuthUserDataAC = (id: number, email: string, login: string) => {
    return {
        type: SET_USER_DATA,
        data: {
            id,
            email,
            login,
        }
    }
}