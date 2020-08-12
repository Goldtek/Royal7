import axios from "axios";

import {
  FETCH_TEACHERS_SUCCESS,
  FETCH_TEACHERS_REQUEST,
  FETCH_TEACHERS_FAILURE,
} from "./action-types";

const API_URL = process.env.REACT_APP_BASEURL;

export const fetchTeachers = () => {
  return (dispatch) => {
    dispatch(request());
    axios
      .get(`${API_URL}/users`)
      .then((response) => {
        // response.data is the users
        const teachersList = response.data.filter(
          (el) => el.role === "Teacher"
        );
        // const teachersList = response.data;
        dispatch(sucess(teachersList));
      })
      .catch((error) => {
        // error.message is the error message
        const errormsg = error.message;
        dispatch(failure(errormsg));
      });
  };
};

export const request = () => ({ type: FETCH_TEACHERS_REQUEST });

export const sucess = (teachersList) => ({
  type: FETCH_TEACHERS_SUCCESS,
  payload: teachersList,
});

export const failure = (error) => {
  return {
    type: FETCH_TEACHERS_FAILURE,
    payload: error,
  };
};
