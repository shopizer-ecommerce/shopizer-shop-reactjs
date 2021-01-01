import { SET_CONTENT_ID } from "../actions/contentAction";

const initState = {
    contentId: ''
};

const contentReducer = (state = initState, action) => {
    if (action.type === SET_CONTENT_ID) {
        return {
            ...state,
            contentId: action.payload
        };
    }

    return state;
};

export default contentReducer;
