import React from "react";
import classes from "./users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";


const Users = ({totalCount, pageSize, onCurrentPage, currentPage, ...props}) => {

    return (
        <div className={classes.users}>



            {props.usersData.map((user) => {
                return (
                    <User user={user}
                          unFollow={props.unFollow}
                          follow={props.follow}
                          followingInProgress={props.followingInProgress}
                          key={user.id} />
                )
            })}

            <Paginator totalCount={totalCount} pageSize={pageSize} onCurrentPage={onCurrentPage} currentPage={currentPage}  />
        </div>
    )
}

export default Users;