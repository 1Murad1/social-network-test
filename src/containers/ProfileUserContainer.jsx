import React from "react";
import Profile from "../components/Profile/Profile";
import {connect} from "react-redux";
import {
    getUserStatusThunkCreator,
    setUserProfileThunkCreator,
    updateUserStatusThunkCreator
} from "../redux/actions/profileAction";
import {useParams} from "react-router-dom";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";

class ProfileUserApiContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if(!userId) {
                this.props.history.push('/login')
            }
        }

        this.props.setUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}
                     userProfile={this.props.userProfile}
                     status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus}/>
        )
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileUserApiContainer)
let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setUserProfile: (userId) => {
            dispatch(setUserProfileThunkCreator(userId))
        },
        getUserStatus: (userId) => {
            dispatch(getUserStatusThunkCreator(userId))
        },
        updateUserStatus(status) {
            dispatch(updateUserStatusThunkCreator(status))
        }
    }
}

let WithUrlDataContainerComponent = (props) => {
    let {userId} = useParams();
    return (
        <AuthRedirectComponent userId={userId} {...props} userProfile={props.userProfile}
                                 setUserProfile={props.setUserProfile}/>
    )
}


export default compose( connect(mapStateToProps, mapDispatchToProps))(WithUrlDataContainerComponent);