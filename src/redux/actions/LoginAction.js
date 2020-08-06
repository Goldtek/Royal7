import axios from "axios";

import { LOGIN_SUCCESS, STORE_USER_ERROR_MSG, LOG_OUT } from "./action-type";

const API_URL = process.env.REACT_APP_BASEURL;

export const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, user });

export const errorMessage = (message) => ({
  type: STORE_USER_ERROR_MSG,
  message,
});

export const userLogin = (data) => {
  return (dispatch) => {
    axios.post(`${API_URL}/users`, data).then(
      (user) => {
        dispatch(loginSuccess(user.data));
        window.location.href = `/dashboard`;
        return user;
      },
      (error) => {
        dispatch(errorMessage(error.message));
      }
    );
  };
};

//NOT IN USE AT THE MOMENT ******
export const userLogout = () => {
  // remove user from local storage to log user out
  // localStorage.removeItem('user');
  return { type: LOG_OUT };
};
//NOT IN USE AT THE MOMENT ******
