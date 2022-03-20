import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./dialogItem.module.css"

const DialogItem = (props) => {
    return (
        <div className={classes.dialogItem}>
            <NavLink to={"/dialogs/" + props.id}  className={  ({ isActive }) => `${classes.linkDialog}` + (isActive ? ` ${classes.activeLink}` : "")}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;