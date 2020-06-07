import axios from "axios";
import { SEND_MAIL, CONFIRM_MAIL, LOGIN_USER } from "./type";

const api_url = process.env.REACT_APP_API_URL;

export const sendMailRequest = (data) => (dispatch) => {
    try {
        return axios.post(`${api_url}/api/send/mail`, { email: data });
    } catch (error) {
        console.log(`error sending invitation ${error}`);
    }
};

export const confirmMail_1 = (data) => (dispatch) => {
    try {
        return axios.post(`${api_url}/api/admin/confirm`, { data });
    } catch (error) {
        console.log(`error confirming email ${error}`);
    }
};

export const create_account = (data) => (dispatch) => {
    try {
        return axios.post(`${api_url}/api/school/admin`, {
            schoolName: data.schoolName,
            phone: data.phone,
            address: data.address,
            email: data.email,
            about: data.about,
            password: data.password,
        });
    } catch (error) {
        console.log(`error creating school account ${error}`);
    }
};

export const loginUser = (data) => (dispatch) => {
    return axios.post(`${api_url}/api/user/login`, {
        email: data.email,
        password: data.password,
    });
};
