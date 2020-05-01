import { SEND_MAIL, CONFIRM_MAIL, LOGIN_USER } from './type'
import axios from 'axios';

var api_url = process.env.REACT_APP_API_URL;


export const sendMailRequest = (data) => dispatch => {
    return axios.post(`${api_url}/api/send/mail`, {email: data});
}

export const confirmMail_1 = data => dispatch => {
    return axios.post(`${api_url}/api/admin/confirm`, {data});
}

export const create_account = data => dispatch => {
    return axios.post(`${api_url}/api/school/admin`, {
        schoolName: data.schoolName,
        phone: data.phone,
        address: data.address,
        email: data.email,
        about: data.about,
        password: data.password
    })
}

export const loginUser = (data) => dispatch => {
    return axios.post(`${api_url}/api/user/login`, {email:data.email, password:data.password})
}