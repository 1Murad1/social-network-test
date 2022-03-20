import React from "react";
import classes from "./profileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusHooks from "./ProfileStatus/ProfileStatusHooks";

const ProfileInfo = ({userProfile, status, updateUserStatus}) => {
    if(!userProfile) {
        return <Preloader />
    }
    return (
        <div className={classes.profileInfo}>
            <div>
                <img src={userProfile.photos.large} alt="avatar logo" />
                <ProfileStatusHooks status={status} updateUserStatus={updateUserStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo;