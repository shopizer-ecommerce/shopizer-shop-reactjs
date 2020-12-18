import { SET_USER } from "../actions/userAction";

const initState = {
    userData: ''
};

const userReducer = (state = initState, action) => {
    if (action.type === SET_USER) {
        return {
            ...state,
            userData: action.payload
        };
    }

    return state;
};

export default userReducer;
