import { SET_USER, SET_COUNTRY, SET_SHIPPING_COUNTRY, SET_STATE, GET_CURRENT_ADDRESS, SET_SHIP_STATE } from "../actions/userAction";

const initState = {
    userData: '',
    country: [],
    shipCountry: [],
    state: [],
    shipState: [],
    currentAddress: []
};

const userReducer = (state = initState, action) => {
    if (action.type === SET_USER) {
        return {
            ...state,
            userData: action.payload
        };
    }
    if (action.type === SET_COUNTRY) {
        return {
            ...state,
            country: action.payload
        };
    }
    if (action.type === SET_SHIPPING_COUNTRY) {
        return {
            ...state,
            shipCountry: action.payload
        };
    }
    if (action.type === SET_STATE) {
        return {
            ...state,
            state: action.payload
        };
    }
    if (action.type === GET_CURRENT_ADDRESS) {
        return {
            ...state,
            currentAddress: action.payload
        };
    }
    if (action.type === SET_SHIP_STATE) {
        return {
            ...state,
            shipState: action.payload
        };
    }

    return state;
};

export default userReducer;
