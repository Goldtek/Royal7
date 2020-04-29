import { SEND_MAIL } from './types'
import axios from 'axios';

var api_url = process.env.REACT_APP_API_URL;


export const sendMailRequest = (data) => dispatch => {
    return axios.post(`${api_url}/api/send/mail`, {email: data});
}