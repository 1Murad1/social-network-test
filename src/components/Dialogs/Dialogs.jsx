import React from "react";
import classes from "./dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {reduxForm} from "redux-form";
import {createField, Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength30 = maxLengthCreator(30);

const Dialogs = (props) => {

    let addNewMessage = (message) => {
        props.addMessage(message.messageBody)
    }


    return(
        <div className={classes.dialogs}>
            <div className={classes.dialog}>
                {props.dialogs.dialogsData.map(dialog => {
                    return (
                        <DialogItem name={dialog.name} id={dialog.id} key={dialog.id + 1} />
                    )
                })}
            </div>
            <div className={classes.messages}>
                {props.dialogs.messagesData.map(message => {
                    return(
                        <MessageItem message={message.message} key={message.id} />
                    )
                })}
            </div>
            <AddMessageReduxForm onSubmit={addNewMessage} />
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {createField("text", "messageBody", [required, maxLength30], "Enter your text", Textarea)}
            <button>Send message</button>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({
    form: 'message'
})(AddMessageForm)

export default Dialogs;