import React from "react";
import {connect} from "react-redux";
import Header from "../components/Header/Header";
import {logoutUserThunkCreator} from "../redux/actions/authAction";
import {compose} from "redux";

class HeaderApiContainer extends React.Component {

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => {
            dispatch(logoutUserThunkCreator())
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(HeaderApiContainer);