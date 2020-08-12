import axios from "axios";

import {
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_REQUEST,
  FETCH_STUDENTS_FAILURE,
} from "./action-types";

const API_URL = process.env.REACT_APP_BASEURL;

export const fetchStudents = () => {
  return (dispatch) => {
    dispatch(request());
    axios
      .get(`${API_URL}/users`)
      .then((response) => {
        // response.data is the users
        const studentLists = response.data.filter(
          (el) => el.role === "Student"
        );
        // const studentLists = response.data;
        dispatch(sucess(studentLists));
      })
      .catch((error) => {
        // error.message is the error message
        const errormsg = error.message;
        dispatch(failure(errormsg));
      });
  };
};

export const request = () => ({ type: FETCH_STUDENTS_REQUEST });

export const sucess = (studentLists) => ({
  type: FETCH_STUDENTS_SUCCESS,
  payload: studentLists,
});

export const failure = (error) => {
  return {
    type: FETCH_STUDENTS_FAILURE,
    payload: error,
  };
};
