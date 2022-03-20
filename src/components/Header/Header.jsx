import React from "react";
import classes from "./header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <NavLink to='/profile'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Blue-Dot-Network_logo_1.png" className="logo" alt="logo social network" />
            </NavLink>
            <div className={classes.authorization}>
                {
                    props.isAuth
                        ? <div>{props.login} <button onClick={props.logOut}>Logout</button></div>
                        :   <NavLink to='/login' className={classes.itemLink}>Login</NavLink>
                }

            </div>
        </header>
    )
}

export default Header;