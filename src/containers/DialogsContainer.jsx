import React from "react";
import {
    addMessageActionCreator
} from "../redux/actions/dialogsAction";
import Dialogs from "../components/Dialogs/Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";



let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (messageBody) => {
            dispatch(addMessageActionCreator(messageBody));
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);