import {createSelector} from "reselect";

const getUsersData = (state) => {
    return state.usersPage.usersData
}

export const getUsersDataSelector = createSelector(getUsersData, (usersData) => {
    return usersData.filter(user => true)
})

export const getPageSizeSelector = (state) => {
    return state.usersPage.pageSize
}

export const getTotalCountSelector = (state) => {
    return state.usersPage.totalCount
}

export const getCurrentPageSelector = (state) => {
    return state.usersPage.currentPage
}

export const getIsFetchingSelector = (state) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgressSelector = (state) => {
    return state.usersPage.followingInProgress
}