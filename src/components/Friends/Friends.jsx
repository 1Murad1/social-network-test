import React from "react";
import classes from "./friends.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "../Users/User/User";

const Friends = ({totalCount, pageSize, onCurrentPage, currentPage, ...props}) => {

    return (
        <div className={classes.users}>



            {props.usersData.map((user) => {
                return (
                   <User key={user.id}
                         user={user}
                         followingInProgress={props.followingInProgress}
                         follow={props.follow}
                         unFollow={props.unFollow} />
                )
            })}

            <Paginator totalCount={totalCount} pageSize={pageSize} onCurrentPage={onCurrentPage} currentPage={currentPage} />
        </div>
    )
};

export default Friends;