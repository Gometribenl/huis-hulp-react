import {SET_TOKEN, SET_USER_DATA} from "./userActions";
import {UPDATE_CHORES, UPDATE_PERSONAL_CHORES} from "./choreActions";
import {UPDATE_CHATROOMS} from "./chatActions"

export const setToken = (token) => ({
    type: SET_TOKEN,
    token
});

export const updateChores = (chores) => ({
    type: UPDATE_CHORES,
    chores
});

export const updatePersonalChores = (chores) => ({
    type: UPDATE_PERSONAL_CHORES,
    chores
});

export const setUserData = (userData) => ({
    type: SET_USER_DATA,
    userData
});

export const initChatReducer = (chatrooms) => ({
    type: UPDATE_CHATROOMS,
    chatrooms
});

