import WebService from '../../util/webService';
import constant from '../../util/constant';
export const SET_MERCHANT = "SET_MERCHANT";
export const SET_STORE = "SET_STORE";

export const setMerchant = () => {
    return async dispatch => {
        let action = constant.ACTION.STORE + window._env_.APP_MERCHANT;
        try {
            let response = await WebService.get(action);
            // console.log(response);
            // if (response) {
            dispatch({
                type: SET_MERCHANT,
                payload: response
            });
            dispatch(setStore(response.code));
        } catch (error) {
        }

    };
};
export const setStore = (storeCode) => {
    return async dispatch => {
        dispatch({
            type: SET_STORE,
            payload: storeCode
        });
    }
}