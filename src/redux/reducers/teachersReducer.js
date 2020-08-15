import {
  FETCH_TEACHERS_SUCCESS,
  FETCH_TEACHERS_REQUEST,
  FETCH_TEACHERS_FAILURE,
  FETCH_SINGLE_TEACHER_REQUEST,
  FETCH_SINGLE_TEACHER_SUCCESS,
  FETCH_SINGLE_TEACHER_FAILURE,
  DELETE_TEACHER_REQUEST,
  DELETE_TEACHER_SUCCESS,
  DELETE_TEACHER_FAILURE,
} from "../actions/action-types";
//here the reducer is going to evaluate any action that has been committed such as fetching and creating posts

const initialState = {
  loading: false,
  error: "",
  teachers: [],
  teacher: {},
};

export const allTeachersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TEACHERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TEACHERS_SUCCESS:
      return {
        ...state,
        loading: false,
        teachers: action.payload,
        error: "",
      };
    case FETCH_TEACHERS_FAILURE:
      return {
        ...state,
        loading: false,
        teachers: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export const singleTeacherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SINGLE_TEACHER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SINGLE_TEACHER_SUCCESS:
      return {
        ...state,
        loading: false,
        teacher: action.payload,
        error: "",
      };
    case FETCH_SINGLE_TEACHER_FAILURE:
      return {
        ...state,
        loading: false,
        teacher: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

// DELETE TEACHER
export const delTeacherReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_TEACHER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_TEACHER_SUCCESS:
      return {
        ...state,
        loading: false,
        teachers: action.payload,
        error: "",
      };
    case DELETE_TEACHER_FAILURE:
      return {
        ...state,
        loading: false,
        teachers: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
