import React from "react";
import classes from "./myPosts.module.css";
import Post from "./Post/Post";
import {reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {createField, Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {createField("text", "postText", [required, maxLength10], "Enter your post text", Textarea)}
            <button>Add post</button>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm({
    form: 'addPost'
})(AddNewPostForm)

const MyPosts = React.memo(props => {

    let addNewPost = (postText) => {
        props.addPost(postText.postText)
    }


    return (
        <div className={classes.myPost}>
            My posts
            <AddNewPostReduxForm onSubmit={addNewPost}/>
            <div className={classes.posts}>
                {props.postData.map(post => {
                    return (
                        <Post message={post.messagePost} likesCount={post.likes} key={post.id}/>
                    )
                })}
            </div>
        </div>
    )


})


export default MyPosts;