import {SET_AUTH_USER_DATA} from "../actionTypes/actionTypes";
import {authApi} from "../../api/api";
import {stopSubmit} from "redux-form";


export const setAuthUserDataActionCreator = (userId, email, login, isAuth) => {
    return {
        type: SET_AUTH_USER_DATA,
        data: {
            userId: userId,
            email: email,
            login: login,
            isAuth: isAuth
        }
    }
}

export const setAuthUserDataThunkCreator = () => {
    return async (dispatch) => {
        let data = await authApi.getAuthUserData()
        if (data.resultCode === 0) {
            let {id, email, login} = data.data
            dispatch(setAuthUserDataActionCreator(id, email, login, true))
        }
    }
}

export const loginUserThunkCreator = (email, password, rememberMe) => {
    return async (dispatch) => {
        let response = await authApi.loginUser(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserDataThunkCreator())
        } else {
            let messageError = response.data.messages.length > 0 ? response.data.messages[0] : 'Email or password is wrong'
            dispatch(stopSubmit('login', {_error: messageError}))
        }
    }
}

export const logoutUserThunkCreator = () => {
    return async (dispatch) => {
        let response = await authApi.logoutUser()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserDataActionCreator(null, null, null, false))
        }
    }
}