import React from "react";
import {connect} from "react-redux";
import Sidebar from "../components/Sidebar/Sidebar";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        sidebarData: state.sidebar.sidebarData
    }
};

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(Sidebar);