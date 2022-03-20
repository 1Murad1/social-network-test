import React from "react";
import classes from "./post.module.css";

const Post = (props) => {

    return (
        <div className={classes.post}>
           <div className={classes.avatar}>
               <img src="https://media.istockphoto.com/vectors/male-avatar-icon-or-portrait-handsome-young-man-face-with-beard-vector-id1143511824?k=20&m=1143511824&s=170667a&w=0&h=OjcgBMRpj82IXTItixtv6aIbeP9vny0lCqg0eY6ZONQ=" alt="avatar" />
               <p className={classes.message}>{props.message}</p>
           </div>
            <div className="likes">
                <p><span>like</span> <span>{props.likesCount}</span></p>
            </div>

        </div>
    )
}

export default Post;