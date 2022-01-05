import WebService from '../../util/webService';
import constant from '../../util/constant';
import Geocode from "react-geocode";
// import { changeLanguage } from 'redux-multilanguage';
export const SET_USER = "SET_USER";
export const SET_COUNTRY = "SET_COUNTRY";
export const SET_SHIPPING_COUNTRY = "SET_SHIPPING_COUNTRY";
export const SET_STATE = "SET_STATE";
export const SET_SHIP_STATE = "SET_SHIP_STATE";
export const GET_CURRENT_ADDRESS = "GET_CURRENT_ADDRESS";
Geocode.setApiKey(window._env_.APP_MAP_API_KEY);
Geocode.setLanguage("en");
export const setUser = (data) => {
    return async dispatch => {
        dispatch({
            type: SET_USER,
            payload: data
        });
    }
}
export const getCountry = (lang) => {
    return async dispatch => {
        try {
            let action = constant.ACTION.COUNTRY + '?store=' + window._env_.APP_MERCHANT + '&lang=' + lang;
            let response = await WebService.get(action);
            dispatch({
                type: SET_COUNTRY,
                payload: response
            });
        } catch (error) {
        }
    }
}

export const getShippingCountry = (lang) => {
    return async dispatch => {
        try {
            let action = constant.ACTION.SHIPPING_COUNTRY + '?store=' + window._env_.APP_MERCHANT + '&lang=' + lang;
            let response = await WebService.get(action);
            dispatch({
                type: SET_SHIPPING_COUNTRY,
                payload: response
            });
        } catch (error) {
        }
    }
}


export const getState = (code) => {
    return async dispatch => {
        try {
            console.log('Calling get state');
            let action = constant.ACTION.ZONES + '?code=' + code;
            let response = await WebService.get(action);
            dispatch({
                type: SET_STATE,
                payload: response
            });
        } catch (error) {
        }
    }
}
export const getShippingState = (code) => {
    return async dispatch => {
        try {
            let action = constant.ACTION.ZONES + '?code=' + code;
            let response = await WebService.get(action);
            dispatch({
                type: SET_SHIP_STATE,
                payload: response
            });
        } catch (error) {
        }
    }
}
export const getCurrentLocation = () => {
    return async dispatch => {
        const location = window.navigator && window.navigator.geolocation
        // console.log(location, 'getCurrentLocation')
        if (location) {
            location.getCurrentPosition((position) => {
                // console.log(position)
                dispatch(getCurrentAddress(position.coords.latitude, position.coords.longitude))
            }, (error) => {
                console.log(error)
            })
        }
    }
}
export const getCurrentAddress = (lat, long) => {
    return async dispatch => {
        Geocode.fromLatLng(lat, long).then(
            response => {
                dispatch({
                    type: GET_CURRENT_ADDRESS,
                    payload: response.results
                });
            },
            error => {
                console.error(error);
            }
        );
    }
}