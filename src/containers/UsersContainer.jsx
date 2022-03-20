import React from "react";
import Users from "../components/Users/Users";
import {connect} from "react-redux";
import {followThunkCreator, getUsersThunkCreator,
    setCurrentPageActionCreator, unFollowThunkCreator
} from "../redux/actions/usersAction";
import Preloader from "../components/common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPageSelector, getFollowingInProgressSelector, getIsFetchingSelector,
    getPageSizeSelector,
    getTotalCountSelector,
    getUsersDataSelector
} from "../redux/selectors/usersSelectors";

class UsersApiContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize, null)
    }

    onCurrentPage = (currentPage) => {
        const {pageSize} = this.props;
        this.props.setCurrentPage(currentPage);
        this.props.getUsers(currentPage, pageSize, null)
    }

    render() {
        return (
            <>
                {
                    this.props.isFetching ? <Preloader/> : <Users usersData={this.props.usersData}
                                                                  totalCount={this.props.totalCount}
                                                                  pageSize={this.props.pageSize}
                                                                  onCurrentPage={this.onCurrentPage}
                                                                  followingInProgress={this.props.followingInProgress}
                                                                  toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                                                                  currentPage={this.props.currentPage}
                                                                  unFollow={this.props.unFollow}
                                                                  follow={this.props.follow}/>
                }
            </>

        )
    }
}

let mapStateToProps = (state) => {
    return {
        usersData: getUsersDataSelector(state),
        pageSize: getPageSizeSelector(state),
        totalCount: getTotalCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        followingInProgress: getFollowingInProgressSelector(state)
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followThunkCreator(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowThunkCreator(userId))
        },
        getUsers: (currentPage, pageSize, friendsStatus) => {
            dispatch(getUsersThunkCreator(currentPage, pageSize, friendsStatus))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageActionCreator(currentPage))
        }
    }
}


export default compose(connect(mapStateToProps, mapDispatchToProps))(UsersApiContainer);