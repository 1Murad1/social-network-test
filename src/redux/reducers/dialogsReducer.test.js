import {addMessageActionCreator, deleteMessageActionCreator} from "../actions/dialogsAction";
import dialogsReducer from "./dialogsReducer";


let state = {
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
    ]
}

test('new message should be added', () => {
    // 1 test data
    let action = addMessageActionCreator('my social network');

    // 2 action
    let newState = dialogsReducer(state, action)
    // 3 expection
    expect(newState.messagesData.length).toBe(6);
});

test('message of new message should be my social network', () => {
    // 1 test data
    let action = addMessageActionCreator('my social network');

    // 2 action
    let newState = dialogsReducer(state, action)
    // 3 expection
    expect(newState.messagesData[5].message).toBe("my social network");
});

test('after deleting length of posts should be decrement', () => {
    // 1 test data
    let action = deleteMessageActionCreator(1)

    // 2 action
    let newState = dialogsReducer(state, action)
    // 3 expection
    expect(newState.messagesData.length).toBe(4);
});


test('after deleting length  should not be decrement if id is incorrect', () => {
    // 1 test data
    let action = deleteMessageActionCreator(1000)

    // 2 action
    let newState = dialogsReducer(state, action)
    // 3 expection
    expect(newState.messagesData.length).toBe(5);
});