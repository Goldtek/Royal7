import axios from "axios";

import {
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_REQUEST,
  FETCH_STUDENTS_FAILURE,
  // DELETE_STUDENT_REQUEST,
  // DELETE_STUDENT_SUCCESS,
  // DELETE_STUDENT_FAILURE,
  FETCH_SINGLE_STUDENT_FAILURE,
  FETCH_SINGLE_STUDENT_SUCCESS,
  FETCH_SINGLE_STUDENT_REQUEST,

  //STUDENT ASSESSMENT ACTION
  FETCH_STUDENT_ASSESSMENT_REQUEST,
  FETCH_STUDENT_ASSESSMENT_SUCCESS,
  FETCH_STUDENT_ASSESSMENT_FAILURE,
} from "./action-types";

const API_URL = process.env.REACT_APP_BASEURL;
// FETCH STUDENT ALL:::::::::::::::::::::::::::

export const fetchStudents = () => {
  return (dispatch) => {
    dispatch(request());
    axios
      .get(`${API_URL}/users`)
      .then((response) => {
        // response.data is the users
        const students = response.data.filter((el) => el.role === "Student");
        // const student = response.data;
        dispatch(success(students));
      })
      .catch((error) => {
        // error.message is the error message
        const errormsg = error.message;
        dispatch(failure(errormsg));
      });
  };
};

export const request = () => ({ type: FETCH_STUDENTS_REQUEST });

export const success = (students) => ({
  type: FETCH_STUDENTS_SUCCESS,
  payload: students,
});

export const failure = (error) => {
  return {
    type: FETCH_STUDENTS_FAILURE,
    payload: error,
  };
};

// FETCH STUDENT ALL:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// FETCH SINGLE STUDENT :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
export const fetchSingleStudent = (id) => {
  return (dispatch) => {
    dispatch(singleRequest(id));
    axios
      .get(`${API_URL}/users/${id}`)
      .then((res) => {
        const student = res.data;
        dispatch(singleSuccess(student));
      })
      .catch((error) => {
        // error.message is the error message
        const errormsg = error.message;
        dispatch(singleFailure(errormsg));
      });
  };
};

export const singleRequest = () => ({ type: FETCH_SINGLE_STUDENT_REQUEST });
export const singleSuccess = (student) => ({
  type: FETCH_SINGLE_STUDENT_SUCCESS,
  payload: student,
});

export const singleFailure = (error) => {
  return {
    type: FETCH_SINGLE_STUDENT_FAILURE,
    payload: error,
  };
};

// FETCH SINGLE STUDENT ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// DELETE STUDENT ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
export const deleteStudent = (id) => {
  return (dispatch) => {
    dispatch(request(id));
    axios
      .delete(`${API_URL}/users/${id}`)
      .then((res) => {
        dispatch(fetchStudents());
        // console.log(res);
      })
      .catch((error) => {
        // error.message is the error message
        const errormsg = error.message;
        dispatch(failure(errormsg));
      });
  };
};
// DELETE STUDENT ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// UPDATE STUDENT INFORMATION ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
export const updateStudent = (userDetails) => {
  const { userId } = userDetails;
  return (dispatch) => {
    dispatch(request());
    axios({
      method: "patch",
      url: `${API_URL}/users/${userId}`,
      data: {
        firstName: userDetails.firstName,
        middleName: userDetails.middleName,
        lastName: userDetails.lastName,
        email: userDetails.email,
        dob: userDetails.dob,
        admissionId: userDetails.admissionId,
        stdlcass: userDetails.stdlcass,
        bloodgrp: userDetails.bloodgrp,
        gender: userDetails.gender,
        phone: userDetails.phone,
        shortbio: userDetails.shortbio,
        updated: Date.now(),
      },
    })
      .then((res) => {
        console.log(res);
        dispatch(fetchSingleStudent(userId));
        dispatch(fetchStudents());
      })
      .catch((error) => {
        // error.message is the error message
        const errormsg = error.message;
        dispatch(failure(errormsg));
      });
  };
};

// UPDATE STUDENT INFORMATION ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// FETCH STUDENT ASSESSMENT ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// FETCH STUDENT ASSESSMENT :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
export const fetchStudentAssessments = (stdID) => {
  return (dispatch) => {
    dispatch(requestAssessment());
    axios
      .get(`${API_URL}/ClassAssessment`)
      .then((res) => {
        // response.data is the users
        const studentAssessment = res.data.filter(
          (el) => el.studentId === stdID
        );
        // console.warn(students);
        dispatch(successAssessment(studentAssessment));
      })
      .catch((error) => {
        // error.message is the error message
        const errormsg = error.message;
        dispatch(failureAssessment(errormsg));
      });
  };
};

export const requestAssessment = () => ({
  type: FETCH_STUDENT_ASSESSMENT_REQUEST,
});

export const successAssessment = (studentAssessment) => ({
  type: FETCH_STUDENT_ASSESSMENT_SUCCESS,
  payload: studentAssessment,
});

export const failureAssessment = (error) => {
  return {
    type: FETCH_STUDENT_ASSESSMENT_FAILURE,
    payload: error,
  };
};
