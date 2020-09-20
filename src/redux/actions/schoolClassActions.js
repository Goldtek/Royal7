import axios from "axios";

import {
  FETCH_CLASS_REQUEST,
  FETCH_CLASS_SUCCESS,
  FETCH_CLASS_FAILURE,
  //student subject
  FETCH_SUBJECT_STUDENTS_REQUEST,
  FETCH_SUBJECT_STUDENTS_SUCCESS,
  FETCH_SUBJECT_STUDENTS_FAILURE,

  //Clas Routine
  FETCH_CLASS_ROUTINE_REQUEST,
  FETCH_CLASS_ROUTINE_SUCCESS,
  FETCH_CLASS_ROUTINE_FAILURE,
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

// <----- FETCH STUDENTS IN CLASSES USING CLASSID FROM ASSIGNED TEACHERS
export const fetchStudentInClasses = (stdclass) => {
  return (dispatch) => {
    dispatch(requestStudentInClasses());
    axios
      .get(`${API_URL}/users`)
      .then((res) => {
        // response.data is the users
        // const classStudents = response.data;
        const classStudents = res.data.filter(
          (el) => el.stdclass === `${stdclass}`
        );
        dispatch(successStudentInClasses(classStudents));
      })
      .catch((error) => {
        // error.message is the error message
        const errormsg = error.message;
        dispatch(failureStudentInClasses(errormsg));
      });
  };
};

export const requestStudentInClasses = () => ({
  type: FETCH_SUBJECT_STUDENTS_REQUEST,
});
export const successStudentInClasses = (schoolClasses) => ({
  type: FETCH_SUBJECT_STUDENTS_SUCCESS,
  payload: schoolClasses,
});

export const failureStudentInClasses = (error) => {
  return {
    type: FETCH_SUBJECT_STUDENTS_FAILURE,
    payload: error,
  };
};

// <----- FETCH STUDENTS IN CLASSES USING CLASSID FROM ASSIGNED TEACHERS

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

// FETCH CLASS ROUTINES IN EACH SCHOOL
export const fetchschoolClassRoutine = () => {
  return (dispatch) => {
    dispatch(requestClassRoutine());
    axios
      .get(`${API_URL}/classRoutine`)
      .then((res) => {
        // response.data is the users
        const schoolClasses = res.data;
        dispatch(successClassRoutine(schoolClasses));
      })
      .catch((error) => {
        // error.message is the error message
        const errormsg = error.message;
        dispatch(failureClassRoutine(errormsg));
      });
  };
};

export const requestClassRoutine = () => ({
  type: FETCH_CLASS_ROUTINE_REQUEST,
});
export const successClassRoutine = (schoolClasses) => ({
  type: FETCH_CLASS_ROUTINE_SUCCESS,
  payload: schoolClasses,
});

export const failureClassRoutine = (error) => {
  return {
    type: FETCH_CLASS_ROUTINE_FAILURE,
    payload: error,
  };
};
