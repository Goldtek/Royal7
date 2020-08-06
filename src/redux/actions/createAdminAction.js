import axios from "axios";
import { LOGIN_SUCCESS, STORE_USER_ERROR_MSG } from "./action-type";

const API_URL = process.env.REACT_APP_BASEURL;

export const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, user });

export const errorMessage = (message) => ({
  type: STORE_USER_ERROR_MSG,
  message,
});

// export const login = (data) => async (dispatch) => {
//   try {
//     const { email, password } = data;
//     const { data } = await axios.post(`${API_URL}/api/user/login`, {
//       email,
//       password,
//     });
//     console.log("login--", data);
//     const { user } = data;
//     dispatch(loginSuccess(user));
//   } catch (error) {
//     dispatch(errorMessage(error.message));
//   }
// };

// export const createAccount = (data) => async (dispatch) => {
//   // const { data } = await axios.post(`${API_URL}/api/school/admin`, {
//   try {
//     const { data } = await axios.post(`${API_URL}/newadmin`, {
//       schoolName: data.schoolName,
//       phone: data.phone,
//       address: data.address,
//       email: data.email,
//       about: data.about,
//       password: data.password,
//     });
//     console.log("data", data);
//     // login(data);
//   } catch (error) {
//     dispatch(errorMessage(error.message));
//   }
// };

export const createAdmin = (data) => {
  // let history = useHistory()
  return (dispatch) => {
    axios.post(`${API_URL}/newadmin`, data).then(
      (res) => {
        dispatch(CreateSuccess(res.data));
        // window.location.href = `/dashboard`;

        // return user;
        // console.log(admin);
      },
      (error) => {
        dispatch(errorMessage(error.message));
      }
    );
  };
};
