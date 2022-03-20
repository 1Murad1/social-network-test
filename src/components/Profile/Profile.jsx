import React from "react";
import  classes from "./profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "../../containers/MyPostContainer";


const Profile = (props) => {

    return (
        <div className={classes.profile}>
            <ProfileInfo userProfile={props.userProfile} status={props.status} updateUserStatus={props.updateUserStatus} />
            <MyPostsContainer  />
        </div>
    )
}

export default Profile;