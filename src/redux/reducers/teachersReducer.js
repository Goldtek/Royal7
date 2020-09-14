import {
  FETCH_TEACHERS_SUCCESS,
  FETCH_TEACHERS_REQUEST,
  FETCH_TEACHERS_FAILURE,
  FETCH_SINGLE_TEACHER_REQUEST,
  FETCH_SINGLE_TEACHER_SUCCESS,
  FETCH_SINGLE_TEACHER_FAILURE,
  // DELETE_TEACHER_REQUEST,
  // DELETE_TEACHER_SUCCESS,
  // DELETE_TEACHER_FAILURE,
  FETCH_ASSIGNED_TEACHER_REQUEST,
  FETCH_ASSIGNED_TEACHER_SUCCESS,
  FETCH_ASSIGNED_TEACHER_FAILURE,
} from "../actions/action-types";
//here the reducer is going to evaluate any action that has been committed such as fetching and creating posts

const initialState = {
  loading: false,
  error: null,
  teachers: [],
  teacher: {},
  assignedTeachers: [],
};

export const TeachersReducer = (state = initialState, action) => {
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
        error: null,
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

export const TeacherReducer = (state = initialState, action) => {
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
        error: null,
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

export const assignedTeacherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ASSIGNED_TEACHER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ASSIGNED_TEACHER_SUCCESS:
      return {
        ...state,
        loading: false,
        assignedTeachers: action.payload,
        error: null,
      };
    case FETCH_ASSIGNED_TEACHER_FAILURE:
      return {
        ...state,
        loading: false,
        assignedTeachers: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
