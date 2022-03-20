import React from "react";
import {getUsersActionCreator} from "../actions/usersAction";
import usersReducer from "./usersReducer";

let state = {
    usersData: []
}

test("after get users length array should more zero", () => {
    // 1 test data
    let action = getUsersActionCreator([
        {
            id: 1,
            name: "Andrew",
            old: 23
        },
        {
            id: 2,
            name: "Max",
            old: 43
        },
        {
            id: 3,
            name: "Any",
            old: 33
        }
    ]);

    // 2 action
    let newState = usersReducer(state, action)
    // 3 expection
    expect(newState.usersData.length).toBe(3);
})