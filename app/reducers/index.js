import {combineReducers} from 'redux'
import userReducer from './userReducer';
import choresReducer from "./choresReducer";

const appReducer = combineReducers({
    userReducer,
    choresReducer,
});

const rootReducer = (state, action) => {
    return appReducer(state, action)
};

export default rootReducer;
