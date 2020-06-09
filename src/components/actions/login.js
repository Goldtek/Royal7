import axios from 'axios';
import { LOGIN_SUCCESS, STORE_USER_ERROR_MSG } from './action-type';


const api_url = process.env.REACT_APP_BASEURL;


export const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, user });

export const errorMessage = (message) => ({ type: STORE_USER_ERROR_MSG, message });

export const login = data => async (dispatch) => {
    try {
      const { email, password } = data;
      const { data } = await axios.post(`${api_url}/api/user/login`, {email,password});
      console.log('login--', data);
      const { user } = data;
      dispatch(loginSuccess(user));
    } catch (error) {
      dispatch(errorMessage(error.message));
    }
};

export const create_account = data => async (dispatch) => {
    try {
        const { data } = await axios.post(`${api_url}/api/school/admin`, {
            schoolName: data.schoolName,
            phone: data.phone,
            address: data.address,
            email: data.email,
            about: data.about,
            password: data.password
        });
        console.log('datta', data);
        login(data);
    } catch (error) {
        dispatch(errorMessage(error.message));
    }
}