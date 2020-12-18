export const SET_USER = "SET_USER";

export const setUser = (data) => {
    return async dispatch => {
        dispatch({
            type: SET_USER,
            payload: data
        });
    }
}