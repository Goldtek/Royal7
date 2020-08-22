import axios from "axios";

import {
  FETCH_SUBJECTS_REQUEST,
  FETCH_SUBJECTS_SUCCESS,
  FETCH_SUBJECTS_FAILURE,
} from "./action-types";

const API_URL = process.env.REACT_APP_BASEURL;
// FETCH STUDENT ALL:::::::::::::::::::::::::::

export const fetchSchoolSubjects = () => {
  return (dispatch) => {
    dispatch(request());
    axios
      .get(`${API_URL}/subjects`)
      .then((response) => {
        // response.data is the users
        const subjects = response.data;
        dispatch(success(subjects));
      })
      .catch((error) => {
        // error.message is the error message
        const errormsg = error.message;
        dispatch(failure(errormsg));
      });
  };
};

export const deleteSubject = (id) => {
  return (dispatch) => {
    //   console.log(id);
    dispatch(request(id));
    axios
      .delete(`${API_URL}/subjects/${id}`)
      .then((res) => {
        dispatch(fetchSchoolSubjects());
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
  type: FETCH_SUBJECTS_REQUEST,
});
export const success = (subjects) => ({
  type: FETCH_SUBJECTS_SUCCESS,
  payload: subjects,
});

export const failure = (error) => {
  return {
    type: FETCH_SUBJECTS_FAILURE,
    payload: error,
  };
};
