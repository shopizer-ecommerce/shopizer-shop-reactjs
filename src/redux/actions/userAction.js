import WebService from '../../util/webService';
import constant from '../../util/constant';
import Geocode from "react-geocode";
export const SET_USER = "SET_USER";
export const SET_COUNTRY = "SET_COUNTRY";
export const SET_STATE = "SET_STATE";
export const GET_CURRENT_ADDRESS = "GET_CURRENT_ADDRESS";
Geocode.setApiKey("AIzaSyCOWHYbCCs9_t8g7oOozjTR75wNx5_xpb4");
Geocode.setLanguage("en");
export const setUser = (data) => {
    return async dispatch => {
        dispatch({
            type: SET_USER,
            payload: data
        });
    }
}
export const getCountry = () => {
    return async dispatch => {
        try {
            let action = constant.ACTION.COUNTRY;
            let response = await WebService.get(action);
            dispatch({
                type: SET_COUNTRY,
                payload: response
            });
        } catch (error) {
        }
    }
}
export const getState = (code) => {
    return async dispatch => {
        try {
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
                // const address = response.results[0].formatted_address;
                // console.log(response);
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