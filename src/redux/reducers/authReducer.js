import {SET_AUTH_USER_DATA} from "../actionTypes/actionTypes";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        default:
            return state;
    }
}



export default authReducer;