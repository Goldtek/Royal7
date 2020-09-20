import {
  FETCH_CLASS_REQUEST,
  FETCH_CLASS_SUCCESS,
  FETCH_CLASS_FAILURE,
  FETCH_SUBJECT_STUDENTS_REQUEST,
  FETCH_SUBJECT_STUDENTS_SUCCESS,
  FETCH_SUBJECT_STUDENTS_FAILURE,

  //fetch class routine
  FETCH_CLASS_ROUTINE_REQUEST,
  FETCH_CLASS_ROUTINE_SUCCESS,
  FETCH_CLASS_ROUTINE_FAILURE,
} from "../actions/action-types";
//here the reducer is going to evaluate any action that has been committed such as fetching and creating posts

const initialState = {
  loading: false,
  error: null,
  schoolClasses: [],
  classStudents: [],
  classRoutines: [],
  schoolClass: {},
};

export const schoolClassReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLASS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CLASS_SUCCESS:
      return {
        ...state,
        loading: false,
        schoolClasses: action.payload,
        error: null,
      };
    case FETCH_CLASS_FAILURE:
      return {
        ...state,
        loading: false,
        schoolClasses: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export const classStudentsReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUBJECT_STUDENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUBJECT_STUDENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        classStudents: action.payload,
        error: null,
      };
    case FETCH_SUBJECT_STUDENTS_FAILURE:
      return {
        ...state,
        loading: false,
        classStudents: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export const classRoutines = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLASS_ROUTINE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CLASS_ROUTINE_SUCCESS:
      return {
        ...state,
        loading: false,
        classRoutines: action.payload,
        error: null,
      };
    case FETCH_CLASS_ROUTINE_FAILURE:
      return {
        ...state,
        loading: false,
        classRoutines: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
