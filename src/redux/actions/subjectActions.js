import axios from "axios";

import {
  FETCH_SUBJECTS_REQUEST,
  FETCH_SUBJECTS_SUCCESS,
  FETCH_SUBJECTS_FAILURE,
  FETCH_ASSIGNED_SUBJECTS_REQUEST,
  FETCH_ASSIGNED_SUBJECTS_SUCCESS,
  FETCH_ASSIGNED_SUBJECTS_FAILURE,
} from "./action-types";

const API_URL = process.env.REACT_APP_BASEURL;
// FETCH STUDENT ALL:::::::::::::::::::::::::::

export const fetchSchoolSubjects = () => {
  return (dispatch) => {
    dispatch(request());
    axios
      .get(`${API_URL}/schoolSubjects`)
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
      .delete(`${API_URL}/schoolSubjects/${id}`)
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

// ----- FETCH ASSIGNED SUBJECT
export const assignedSubjects = (id) => {
  return (dispatch) => {
    //   console.log(id);
    dispatch(requestAssigned());
    axios
      .get(`${API_URL}/assignedTeachers`)
      .then((res) => {
        dispatch(fetchSchoolSubjects());
        // console.log(res);
        const data = res.data.filter((el) => el.userId === `${id}`);
        dispatch(successAssigned(data));
      })
      .catch((error) => {
        // error.message is the error message
        const errormsg = error.message;
        dispatch(failureAssigned(errormsg));
      });
  };
};

export const requestAssigned = () => ({
  type: FETCH_ASSIGNED_SUBJECTS_REQUEST,
});
export const successAssigned = (assignedSubjects) => ({
  type: FETCH_ASSIGNED_SUBJECTS_SUCCESS,
  payload: assignedSubjects,
});

export const failureAssigned = (error) => {
  return {
    type: FETCH_ASSIGNED_SUBJECTS_FAILURE,
    payload: error,
  };
};
