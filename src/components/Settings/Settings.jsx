import React from "react";
import classes from "./settings.module.css";
import cn from 'classnames';

const Settings = (props) => {

    let changeBg = (id) => {
        props.changeBg(id)
    }
    let currentId = localStorage.getItem("bgId");
    console.log(currentId)
    return (

        <div className={classes.settings}>
            {
                props.settingsData.map(item => {
                    return <div onClick={() => changeBg(item.id)}
                                id={item.id}
                                key={item.id}
                                className={cn(classes.item, {[classes.activeBg]: item.bgActive}, {[classes.activeBg]: currentId == item.id })}>
                        <img src={item.bgUrl} alt={"bg picture" + item.id}/>
                    </div>
                })
            }
        </div>
    )
}

export default Settings;