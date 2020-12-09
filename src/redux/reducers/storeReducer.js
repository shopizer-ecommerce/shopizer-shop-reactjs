import { SET_MERCHANT } from "../actions/storeAction";

const initState = {
    merchant: ''
};

const storeReducer = (state = initState, action) => {
    if (action.type === SET_MERCHANT) {
        return {
            ...state,
            merchant: action.payload
        };
    }

    return state;
};

export default storeReducer;
