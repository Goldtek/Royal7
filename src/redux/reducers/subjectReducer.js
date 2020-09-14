import {
  FETCH_SUBJECTS_REQUEST,
  FETCH_SUBJECTS_SUCCESS,
  FETCH_SUBJECTS_FAILURE,
  FETCH_ASSIGNED_SUBJECTS_SUCCESS,
  FETCH_ASSIGNED_SUBJECTS_REQUEST,
  FETCH_ASSIGNED_SUBJECTS_FAILURE,
} from "../actions/action-types";
//here the reducer is going to evaluate any action that has been committed such as fetching and creating posts

const initialState = {
  loading: false,
  error: null,
  subjects: [],
  assignedSubjects: [],
};

export const subjectReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUBJECTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUBJECTS_SUCCESS:
      return {
        ...state,
        loading: false,
        subjects: action.payload,
        error: null,
      };
    case FETCH_SUBJECTS_FAILURE:
      return {
        ...state,
        loading: false,
        subjects: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export const assignedSubjectsReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ASSIGNED_SUBJECTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ASSIGNED_SUBJECTS_SUCCESS:
      return {
        ...state,
        loading: false,
        assignedSubjects: action.payload,
        error: null,
      };
    case FETCH_ASSIGNED_SUBJECTS_FAILURE:
      return {
        ...state,
        loading: false,
        assignedSubjects: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
