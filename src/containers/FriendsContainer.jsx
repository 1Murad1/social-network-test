import React from "react";
import {connect} from "react-redux";
import {followThunkCreator, getUsersThunkCreator,
    setCurrentPageActionCreator, unFollowThunkCreator
} from "../redux/actions/usersAction";
import Preloader from "../components/common/Preloader/Preloader";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";
import Friends from "../components/Friends/Friends";

class FriendsApiContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {currentPage, pageSize, friendsStatus} = this.props;
        this.props.getUsers(currentPage, pageSize, friendsStatus)
    }

    onCurrentPage = (currentPage) => {
        const {pageSize, friendsStatus} = this.props;
        this.props.setCurrentPage(currentPage);
        this.props.getUsers(currentPage, pageSize, friendsStatus)
    }

    render() {

        return (
            <>
                {
                    this.props.isFetching ? <Preloader/> : <Friends usersData={this.props.usersData}
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
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        friendsStatus: state.usersPage.friendsStatus
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


export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(FriendsApiContainer);