import axios from 'axios';
import constant from './constant.js'

const BASE_URL = constant.BASE_URL + constant.API_VERSION;
axios.defaults.baseURL = BASE_URL

export default class WebService {


    static async post(action, params) {
        let response = await axios.post(action, params)
        return response.data
    }
    static async put(action, params) {
        let response = await axios.put(action, params)
        return response.data
    }
    static async get(action) {
        let response = await axios.get(action)
        return response.data
    }
    static async delete(action) {
        let response = await axios.delete(action)
        return response.data
    }
    static async patch(action, params) {
        let response = await axios.patch(action, params)
        return response.data
    }


}

// axios.interceptors.request.use(async (config) => {
//     // Do something before request is sent
//     config.baseURL = BASE_URL;
//     const token = await getStoredData("token");
//     config.headers.common['Authorization'] = token ? token : '';
//     return config;
// }, (error) => {
//     // Do something with request error
//     return Promise.reject(error);
// });