import axios from "axios";

import WebService from '../../util/webService';
import constant from '../../util/constant';
export const SET_MERCHANT = "SET_MERCHANT";

export const setMerchant = () => {
    return async dispatch => {
        let action = constant.ACTION.STORE + constant.ACTION.DEFAULT;
        try {
            let response = await WebService.get(action);
            // console.log(response);
            // if (response) {
            dispatch({
                type: SET_MERCHANT,
                payload: response
            });
            // setMerchant(response)
            // }
        } catch (error) {
        }

    };
};
