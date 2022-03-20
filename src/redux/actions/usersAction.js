import {
    FOLLOW,
    GET_USERS,
    SET_CURRENT_PAGE,
    SET_TOTAL_USERS_COUNT, TOGGLE_FOLLOWING_IN_PROGRESS,
    TOGGLE_IS_FETCHING,
    UNFOLLOW
} from "../actionTypes/actionTypes";
import {userApi} from "../../api/api";

export const followActionCreator = (userId) => ({type: FOLLOW, userId});
export const unFollowActionCreator = (userId) => ({type: UNFOLLOW, userId});
export const getUsersActionCreator = (users) => ({type: GET_USERS, users});
export const setCurrentPageActionCreator = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCountActionCreator = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});
export const toggleIsFetchingActionCreator = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingInProgressActionCreator = (isFetching, userId) => ({
    type: TOGGLE_FOLLOWING_IN_PROGRESS,
    isFetching,
    userId
})

export const getUsersThunkCreator = (currentPage, pageSize, friendsStatus) => {
    return async (dispatch) => {
        dispatch(toggleIsFetchingActionCreator(true))

        let data = await userApi.getUsers(currentPage, pageSize, friendsStatus)
        dispatch(toggleIsFetchingActionCreator(false))
        dispatch(getUsersActionCreator(data.items))
        dispatch(setTotalUsersCountActionCreator(data.totalCount))
    }
}

const followUnFollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingInProgressActionCreator(true, userId))
    let data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingInProgressActionCreator(false, userId))
}

export const followThunkCreator = (userId) => {
    return async (dispatch) => {
        followUnFollowFlow(dispatch, userId, userApi.follow.bind(userApi), followActionCreator)
    }
}

export const unFollowThunkCreator = (userId) => {
    return async (dispatch) => {
        followUnFollowFlow(dispatch, userId, userApi.unFollow.bind(userApi), unFollowActionCreator)
    }
}