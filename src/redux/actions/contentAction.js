export const SET_CONTENT_ID = "SET_CONTENT_ID";

export const setContent = (isValue) => {
    return dispatch => {
        dispatch({
            type: SET_CONTENT_ID,
            payload: isValue
        });
    };
};
