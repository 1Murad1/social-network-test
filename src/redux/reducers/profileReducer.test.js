import {addPostActionCreator, deletePostActionCreator} from "../actions/profileAction";
import profileReducer from "./profileReducer";
import React from "react";

let state =  {
    postData: [
        {
            id: 1,
            messagePost: "Hello, my name is Murad!",
            likes: 30
        },
        {
            id: 2,
            messagePost: "Hello, my name is Murad!",
            likes: 20
        },
        {
            id: 3,
            messagePost: "Hello, my name is Kate!",
            likes: 3
        }
    ]
};

test('new post should be added', () => {
    // 1 test data
    let action = addPostActionCreator('my social network');

    // 2 action
    let newState = profileReducer(state, action)
    // 3 expection
    expect(newState.postData.length).toBe(4);
});

test('message of new post should be my social network', () => {
    // 1 test data
    let action = addPostActionCreator('my social network');

    // 2 action
    let newState = profileReducer(state, action)
    // 3 expection
    expect(newState.postData[3].messagePost).toBe("my social network");
});

test('after deleting length of posts should be decrement', () => {
    // 1 test data
    let action = deletePostActionCreator(1)

    // 2 action
    let newState = profileReducer(state, action)
    // 3 expection
    expect(newState.postData.length).toBe(2);
});


test('after deleting length  should not be decrement if id is incorrect', () => {
    // 1 test data
    let action = deletePostActionCreator(1000)

    // 2 action
    let newState = profileReducer(state, action)
    // 3 expection
    expect(newState.postData.length).toBe(3);
});