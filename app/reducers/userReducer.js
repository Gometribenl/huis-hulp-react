import {SET_TOKEN, SET_USER_DATA} from "../actions/userActions";

const userReducer = (state = {token: null, user: {}}, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return (
                {...state, token: action.token}
            );
        case SET_USER_DATA:
            return (
                {...state, user: action.userData}
            );
        default:
            return state;
    }
};

export default userReducer
