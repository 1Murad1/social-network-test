import React from "react";
import {connect} from "react-redux";
import Settings from "../components/Settings/Settings";
import {changeBackgroundActionCreator} from "../redux/actions/settingsAction";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        settingsData: state.settingsPage.settingsData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeBg: (id) => {
            dispatch(changeBackgroundActionCreator(id))
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(Settings);