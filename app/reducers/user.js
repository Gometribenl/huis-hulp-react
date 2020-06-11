const user = (state = {token: 1}, action) => {

    switch (action.type) {
        case 'SET_TOKEN':
            return (
                {token: action.d}
            );
        default:
            return state
    }
};

export default user
