import {
    FOLLOW,
    GET_USERS,
    SET_CURRENT_PAGE,
    SET_TOTAL_USERS_COUNT, TOGGLE_FOLLOWING_IN_PROGRESS,
    TOGGLE_IS_FETCHING,
    UNFOLLOW
} from "../actionTypes/actionTypes";
import {updateObjectInArray} from "../../utils/objectHelpers";

let initialState = {
    usersData: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    friendsStatus: true
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                usersData: updateObjectInArray(state.usersData, action.userId, "id", {followed: true})
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                usersData:  updateObjectInArray(state.usersData, action.userId, "id", {followed: false})
            }
        }
        case GET_USERS: {
            return {
                ...state, usersData: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state, totalCount: action.totalCount
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case TOGGLE_FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}



export default usersReducer;