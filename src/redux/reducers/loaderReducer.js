import { SET_LOADER } from "../actions/loaderActions";

const initState = {
    isLoading: false
};

const loaderReducer = (state = initState, action) => {
    if (action.type === SET_LOADER) {
        return {
            ...state,
            isLoading: action.payload
        };
    }

    return state;
};

export default loaderReducer;
