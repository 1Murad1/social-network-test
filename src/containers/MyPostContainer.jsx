import React from "react";
import {addPostActionCreator} from "../redux/actions/profileAction";
import MyPosts from "../components/Profile/MyPosts/MyPosts";
import {connect} from "react-redux";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        postData: state.profilePage.postData
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (postText) => {
            dispatch(addPostActionCreator(postText));
        }
    }
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(MyPosts);