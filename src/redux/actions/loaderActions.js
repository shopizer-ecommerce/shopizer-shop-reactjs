// import WebService from '../../util/webService';
// import constant from '../../util/constant';
export const SET_LOADER = "SET_LOADER";

export const setLoader = (isValue) => {
    return dispatch => {
        dispatch({
            type: SET_LOADER,
            payload: isValue
        });
    };
};
