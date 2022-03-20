import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import sidebarReducer from "./reducers/sidebarReducer";
import friendsReducer from "./reducers/friendsReducer";
import usersReducer from "./reducers/usersReducer";
import settingsReducer from "./reducers/settingsReducer";
import authReducer from "./reducers/authReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./reducers/appReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    friendsPage: friendsReducer,
    usersPage: usersReducer,
    settingsPage: settingsReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;
export default store;