import axios from "axios";

import {
  FETCH_CLASS_REQUEST,
  FETCH_CLASS_SUCCESS,
  FETCH_CLASS_FAILURE,
} from "./action-types";

const API_URL = process.env.REACT_APP_BASEURL;
// FETCH STUDENT ALL:::::::::::::::::::::::::::

export const fetchschoolClasses = () => {
  return (dispatch) => {
    dispatch(request());
    axios
      .get(`${API_URL}/schoolClasses`)
      .then((response) => {
        // response.data is the users
        const schoolClasses = response.data;
        dispatch(success(schoolClasses));
      })
      .catch((error) => {
        // error.message is the error message
        const errormsg = error.message;
        dispatch(failure(errormsg));
      });
  };
};

export const deleteClass = (id) => {
  return (dispatch) => {
    //   console.log(id);
    dispatch(request(id));
    axios
      .delete(`${API_URL}/schoolClasses/${id}`)
      .then((res) => {
        dispatch(fetchschoolClasses());
        // console.log(res);
      })
      .catch((error) => {
        // error.message is the error message
        const errormsg = error.message;
        dispatch(failure(errormsg));
      });
  };
};

export const request = () => ({
  type: FETCH_CLASS_REQUEST,
});
export const success = (schoolClasses) => ({
  type: FETCH_CLASS_SUCCESS,
  payload: schoolClasses,
});

export const failure = (error) => {
  return {
    type: FETCH_CLASS_FAILURE,
    payload: error,
  };
};
