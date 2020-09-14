import axios from "axios";

import {
  FETCH_EXAMS_TABLE_REQUEST,
  FETCH_EXAMS_TABLE_SUCCESS,
  FETCH_EXAMS_TABLE_FAILURE,
  FETCH_EXAM_SESSION_TABLE_REQUEST,
  FETCH_EXAM_SESSION_TABLE_SUCCESS,
  FETCH_EXAM_SESSION_TABLE_FAILURE,

  // Exam session table
} from "./action-types";

const API_URL = process.env.REACT_APP_BASEURL;

//  <--  EXAM SESSION TABLE :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::-->
// FETCH EXAM SESSION TABLE ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
export const fetchExamSessionLists = () => {
  return (dispatch) => {
    dispatch(request());
    axios
      .get(`${API_URL}/examSessions`)
      .then((response) => {
        // response.data is the table list
        const data = response.data;
        // console.log(examSessionLists);
        dispatch(success(data));
      })
      .catch((error) => {
        // error.message is the error message
        const errormsg = error.message;
        dispatch(failure(errormsg));
      });
  };
};

export const request = () => ({
  type: FETCH_EXAM_SESSION_TABLE_REQUEST,
  loading: false,
});

export const success = (data) => ({
  type: FETCH_EXAM_SESSION_TABLE_SUCCESS,
  loading: false,
  error: null,
  payload: data,
});

export const failure = (error) => {
  return {
    type: FETCH_EXAM_SESSION_TABLE_FAILURE,
    payload: error,
    loading: false,
  };
};
// FETCH EXAM SESION TABLE ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// DELETE EXAM  SESSION TABLE

export const deleteExamSessionTable = (id) => {
  return (dispatch) => {
    // console.log(id);
    dispatch(request(id));
    axios
      .delete(`${API_URL}/examSessions/${id}`)
      .then(() => {
        dispatch(fetchExamSessionLists());
        // console.log(res);
      })
      .catch((error) => {
        // error.message is the error message
        const errormsg = error.message;
        dispatch(failure(errormsg));
      });
  };
};

//  <--  EXAM SESSION TABLE :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::-->

// EXAM TIME TABLE ;::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// UPDATE EXAM TIME TABLE :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
export const updateExamSessionTables = (examSessionObj) => {
  const {
    id,
    examName,
    examClass,
    examDate,
    startTime,
    stopTime,
    teacher,
    description,
    subject,
  } = examSessionObj;

  return (dispatch) => {
    dispatch(request());
    axios({
      method: "patch",
      url: `${API_URL}/examSessions/${id}`,
      data: {
        examName,
        examClass,
        examDate,
        startTime,
        stopTime,
        teacher,
        description,
        subject,
        updated: Date.now(),
      },
    })
      .then((res) => {
        dispatch(fetchExamSessionLists());
      })
      .catch((error) => {
        // error.message is the error message
        const errormsg = error.message;
        dispatch(failure(errormsg));
      });
  };
};
// UPDATE EXAM TIME TABLE :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// EXAM TIME TABLE ;::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// FETCH SESSION TIME TABLE ------>

export const fetchExamTimeTable = (id) => {
  return (dispatch) => {
    dispatch(examFetchRequest(id));
    axios
      .get(`${API_URL}/examTables`)
      .then((res) => {
        // response.data is the table list

        const data = res.data.filter((el) => el.session === `${id}`);
        // console.log(data);
        dispatch(examFetchSuccess(data));
      })
      .catch((error) => {
        // error.message is the error message
        const errormsg = error.message;
        dispatch(examFetchFailure(errormsg));
      });
  };
};

export const examFetchRequest = () => ({
  type: FETCH_EXAMS_TABLE_REQUEST,
  loading: false,
});

export const examFetchSuccess = (data) => ({
  type: FETCH_EXAMS_TABLE_SUCCESS,
  loading: false,
  error: null,
  payload: data,
});

export const examFetchFailure = (error) => {
  return {
    type: FETCH_EXAMS_TABLE_FAILURE,
    payload: error,
    loading: false,
  };
};
//
// FETCH SESSION TIME TABLE ------>
