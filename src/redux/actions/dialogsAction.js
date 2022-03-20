import {ADD_MESSAGE, DELETE_MESSAGE} from "../actionTypes/actionTypes";

export const addMessageActionCreator = (messageBody) => {
    return {
        type: ADD_MESSAGE,
        messageBody: messageBody
    }
}

export const deleteMessageActionCreator = (messageId) => {
    return {
        type: DELETE_MESSAGE,
        messageId: messageId
    }
}

