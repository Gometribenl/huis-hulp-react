import {SET_TOKEN} from "./authActions";

export const setToken = (token) => ({
    type: SET_TOKEN,
    token
});
