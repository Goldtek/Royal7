import { SEND_MAIL, CONFIRM_MAIL } from './type'
import axios from 'axios';

var api_url = process.env.REACT_APP_API_URL;


export const sendMailRequest = (data) => dispatch => {
    return axios.post(`${api_url}/api/send/mail`, {email: data});
}

export const confirmMail_1 = data => dispatch => {
    return axios.post(`${api_url}/api/admin/confirm`, {data});
}