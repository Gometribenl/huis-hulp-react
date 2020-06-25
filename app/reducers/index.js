import {combineReducers} from 'redux'
import userReducer from './userReducer';
import choresReducer from "./choresReducer";
import chatReducer from './chatReducer';

const appReducer = combineReducers({
    userReducer,
    choresReducer,
    chatReducer,
});

const rootReducer = (state, action) => {
    return appReducer(state, action)
};

export default rootReducer;
