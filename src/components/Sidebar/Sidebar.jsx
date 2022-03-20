import React from "react";
import classes from "./sidebar.module.css";
import {NavLink} from "react-router-dom";

const Sidebar = (props) => {
    return (

        <nav className={classes.sidebar}>
            <ul>
                {props.sidebarData.map(link => {
                    return (
                        <li key={link.id}>
                            <NavLink to={link.pathName}
                                     className={({isActive}) => `${classes.item}` + (isActive ? ` ${classes.active}` : "")}>{link.linkName}</NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Sidebar;