import axios from "axios";

import {
  FETCH_TEACHERS_SUCCESS,
  FETCH_TEACHERS_REQUEST,
  FETCH_TEACHERS_FAILURE,
  FETCH_SINGLE_TEACHER_REQUEST,
  FETCH_SINGLE_TEACHER_SUCCESS,
  FETCH_SINGLE_TEACHER_FAILURE,
} from "./action-types";

const API_URL = process.env.REACT_APP_BASEURL;

// FETCH ALL TEACHER ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
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
        dispatch(success(teachersList));
      })
      .catch((error) => {
        // error.message is the error message
        const errormsg = error.message;
        dispatch(failure(errormsg));
      });
  };
};

export const request = () => ({ type: FETCH_TEACHERS_REQUEST });

export const success = (teachersList) => ({
  type: FETCH_TEACHERS_SUCCESS,
  payload: teachersList,
});

export const failure = (error) => {
  return {
    type: FETCH_TEACHERS_FAILURE,
    payload: error,
  };
};
// FETCH ALL TEACHER ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// FETCH SINGLE TEACHER ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
export const fetchSingleTeacher = (id) => {
  return (dispatch) => {
    dispatch(singleRequest(id));
    axios
      .get(`${API_URL}/users/${id}`)
      .then((res) => {
        const teacher = res.data;
        console.log(res);
        dispatch(singleSuccess(teacher));
      })
      .catch((error) => {
        // error.message is the error message
        const errormsg = error.message;
        dispatch(singleFailure(errormsg));
      });
  };
};

export const singleRequest = () => ({ type: FETCH_SINGLE_TEACHER_REQUEST });

export const singleSuccess = (teacher) => ({
  type: FETCH_SINGLE_TEACHER_SUCCESS,
  payload: teacher,
});

export const singleFailure = (error) => {
  return {
    type: FETCH_SINGLE_TEACHER_FAILURE,
    payload: error,
  };
};
// FETCH SINGLE TEACHER ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// UPDATE TEACHER INFORMATION ::::::::::::::::::::::::::::::::::::::::::::::::
export const updateTeacher = (userDetails) => {
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
        idno: userDetails.idno,
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
        dispatch(fetchSingleTeacher(userId));
        dispatch(fetchTeachers());
      })
      .catch((error) => {
        // error.message is the error message
        const errormsg = error.message;
        dispatch(failure(errormsg));
      });
  };
};

// UPDATE TEACHER INFORMATION ::::::::::::::::::::::::::::::::::::::::::::::::

// DELETE STUDENT :::::::::::::::::::::::::::::::::::::::::::
export const deleteTeacher = (id) => {
  return (dispatch) => {
    console.log(id);
    dispatch(request(id));
    axios
      .delete(`${API_URL}/users/${id}`)
      .then((res) => {
        dispatch(fetchTeachers());
        // console.log(res);
      })
      .catch((error) => {
        // error.message is the error message
        const errormsg = error.message;
        dispatch(failure(errormsg));
      });
  };
};
// DELETE TEACHER :::::::::::::::::::::::::::::::::::::::::::::::
