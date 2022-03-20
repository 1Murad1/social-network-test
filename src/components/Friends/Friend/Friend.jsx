import React from "react";
import classes from "./friend.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/user-avatar.png";

const Friend = ({user, followingInProgress, follow, unFollow, ...props}) => {

    return (
        <div className={classes.wrapperUser}>
            <div className={classes.profileUser}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto}
                         className={classes.avatarUser} alt="Avatar user"/>
                </NavLink>

                {user.followed ?
                    <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        unFollow(user.id)

                    }}
                            className={classes.activeButton}>unFollowed</button> :
                    <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                        follow(user.id)

                    }}
                            className={classes.activeButton}>Followed</button>}
            </div>
            <div className={classes.infoUser}>
                <div className={classes.rowInfo}>
                    <p>{user.name}</p>
                    <p>{user.status}</p>
                </div>
                <div className={classes.rowInfo}>
                    {/*<p>{user.location.city}</p>*/}
                    {/*<p>{user.location.country}</p>*/}
                </div>
            </div>
        </div>
    )
};

export default Friend;