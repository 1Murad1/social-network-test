import {INITIALIZED_SUCCESS} from "../actionTypes/actionTypes";
import {setAuthUserDataThunkCreator} from "./authAction";

export const setInitializedActionCreator = () => {
    return {
        type: INITIALIZED_SUCCESS
    }
}

export const setInitializedThunkCreator = () => {
    return (dispatch) => {
        let promise = dispatch(setAuthUserDataThunkCreator())
        Promise.all([promise])
            .then(() => {
                dispatch(setInitializedActionCreator())
            })
    }
}