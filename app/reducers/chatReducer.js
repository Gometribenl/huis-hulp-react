import {UPDATE_CHATROOMS} from "../actions/chatActions";

const chatReducer = (state =  {chatrooms: []}, action) => {
    switch (action.type) {
        case UPDATE_CHATROOMS:
            return (
                {...state, chatrooms: action.chatrooms}
            );
        default:
            return state;
    }
};

export default chatReducer
