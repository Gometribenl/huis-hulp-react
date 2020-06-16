import {UPDATE_CHORES, UPDATE_PERSONAL_CHORES} from "../actions/choreActions";

const choresReducer = (state = {chores: [], personalChores: []}, action) => {
    switch (action.type) {
        case UPDATE_CHORES:
            return (
                {...state, chores: action.chores}
            );
        case UPDATE_PERSONAL_CHORES:
            return (
                {...state, personalChores: action.chores}
            );
        default:
            return state;
    }
};

export default choresReducer
