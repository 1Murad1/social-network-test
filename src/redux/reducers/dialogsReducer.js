import {ADD_MESSAGE, DELETE_MESSAGE} from "../actionTypes/actionTypes";

let initialState = {
    dialogsData: [
        {
            id: 1,
            name: "Алина"
        },
        {
            id: 2,
            name: "Амина"
        },
        {
            id: 3,
            name: "Сабина"
        },
        {
            id: 4,
            name: "Андрей"
        },
        {
            id: 5,
            name: "Саня"
        }
    ],
    messagesData: [
        {
            id: 1,
            message: "Привет, меня зовут Алина!"
        },
        {
            id: 2,
            message: "Как тебя зовут?"
        },
        {
            id: 3,
            message: "Как твои дела?"
        },
        {
            id: 4,
            message: "Буду работать над проэктом"
        },
        {
            id: 5,
            message: "Позвони мне"
        }
    ],
    newMessageText: "Hello, I am the best!"
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 6,
                message: action.messageBody
            }
            return  {
                ...state,
                messagesData: [...state.messagesData, newMessage]
            };
        }
        case DELETE_MESSAGE: {
            return {
                ...state,
                messagesData: state.messagesData.filter(message => message.id !== action.messageId)
            }
        }
        default:
            return state
    }
}



export default dialogsReducer;