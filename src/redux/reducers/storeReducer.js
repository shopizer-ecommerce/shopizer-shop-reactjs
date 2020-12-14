import { SET_MERCHANT } from "../actions/storeAction";
import { SET_STORE } from "../actions/storeAction";

const initState = {
    merchant: '',
    defaultStore: ''
};

const storeReducer = (state = initState, action) => {
    if (action.type === SET_MERCHANT) {
        return {
            ...state,
            merchant: action.payload
        };
    }
    if (action.type === SET_STORE) {
        return {
            ...state,
            defaultStore: action.payload
        };
    }

    return state;
};

export default storeReducer;
