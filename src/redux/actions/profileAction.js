import {
    ADD_POST, DELETE_POST,
    GET_USER_STATUS,
    SET_USER_PROFILE
} from "../actionTypes/actionTypes";
import {profileApi} from "../../api/api";

export const addPostActionCreator = (postText) => ({type: ADD_POST, postText});
export const deletePostActionCreator = (postId) => ({type: DELETE_POST, postId});
export const setUserProfileActionCreator = (userProfile) => ({type: SET_USER_PROFILE, userProfile});
export const getUserStatusActionCreator = (status) => ({type: GET_USER_STATUS, status});

export const setUserProfileThunkCreator = (userId) => {
    return async (dispatch) => {
        let data = await profileApi.getUserProfile(userId)
        dispatch(setUserProfileActionCreator(data))
    }
}

export const getUserStatusThunkCreator = (userId) => {
    return async (dispatch) => {
        let response = await profileApi.getUserStatus(userId)
        dispatch(getUserStatusActionCreator(response.data))
    }
}

export const updateUserStatusThunkCreator = (status) => {
    return async (dispatch) => {
        let response = await profileApi.updateUserStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(getUserStatusActionCreator(status))
        }
    }

}