import {CHANGE_BACKGROUND} from "../actionTypes/actionTypes";

export const changeBackgroundActionCreator = (bgId) => ({type: CHANGE_BACKGROUND, id: bgId})