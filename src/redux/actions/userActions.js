import axios from "axios";
import { alertActions } from "./";
// import { history } from "../../_helpers";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "./action-types";

const API_URL = process.env.REACT_APP_BASEURL;
export const errorMessage = (message) => ({
  type: LOGIN_FAILURE,
  message,
});

export function userLogin(data) {
  return (dispatch) => {
    dispatch(request(data.email));

    axios.get(`${API_URL}/users`, data).then(
      (users) => {
        const usrfilter = users.data.find((user) => user.email === data.email);
        if (usrfilter && usrfilter.password === data.password) {
          dispatch(success(usrfilter));
          window.location.href = `/dashboard`;
          return usrfilter;
        } else if (usrfilter && usrfilter.password !== data.password) {
          dispatch(failure("Error"));
          dispatch(alertActions.error("Login Error"));
        }
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };
}

// export function create_account(data) {
//   return (dispatch) => {
//     dispatch(request());

//     axios.post(`${API_URL}/users`, data).then(
//       (user) => {
//         // dispatch(userLogin(user));
//         console.log(user);
//       },
//       (error) => {
//         dispatch(failure(error.toString()));
//         dispatch(alertActions.error(error.toString()));
//       }
//     );
//   };
// }

// export const create_account = (data) => async (dispatch) => {
//   try {
//     const { data } = await axios.post(`${API_URL}/admin`, {
//       schoolName: data.schoolName,
//       phone: data.phone,
//       address: data.address,
//       email: data.email,
//       about: data.about,
//       password: data.password,
//     });
//     console.log("datta", data);
//     // login(data);
//   } catch (error) {
//     dispatch(errorMessage(error.message));
//   }
// };

function request() {
  return { type: LOGIN_REQUEST };
}
// function success(user) {
//   return { type: LOGIN_SUCCESS, user };
// }
export const success = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});
// function failure(error) {
//   return { type: LOGIN_FAILURE, error };
// }

export const failure = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
};
export const userLogout = () => {
  // remove user from local storage to log user out
  // localStorage.removeItem('user');
  return { type: LOGOUT };
};

// import axios from "axios";

// import {
//   LOGIN_REQUEST,
//   LOGIN_SUCCESS,
//   LOGIN_FAILURE,
//   LOGOUT,
// } from "./action-type";

// const API_URL = process.env.REACT_APP_BASEURL;

// export const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, user });

// export const errorMessage = (message) => ({
//   type: LOGIN_FAILURE,
//   message,
// });

// export const userLogin = (data) => {
//   return (dispatch) => {
//     axios.post(`${API_URL}/users`, data).then(
//       (user) => {
//         dispatch(loginSuccess(user.data));
//         window.location.href = `/dashboard`;
//         return user;
//       },
//       (error) => {
//         dispatch(errorMessage(error.message));
//       }
//     );
//   };
// };

// //NOT IN USE AT THE MOMENT ******
// export const userLogout = () => {
//   // remove user from local storage to log user out
//   // localStorage.removeItem('user');
//   return { type: LOGOUT };
// };
// //NOT IN USE AT THE MOMENT ******
