import {
  FETCH_EXAMS_TABLE_REQUEST,
  FETCH_EXAMS_TABLE_SUCCESS,
  FETCH_EXAMS_TABLE_FAILURE,
  FETCH_EXAM_SESSION_TABLE_REQUEST,
  FETCH_EXAM_SESSION_TABLE_SUCCESS,
  FETCH_EXAM_SESSION_TABLE_FAILURE,
} from "../actions/action-types";
//here the reducer is going to evaluate any action that has been committed such as fetching and creating posts

const initialState = {
  loading: false,
  error: null,
  examTimeTables: [],
  examSessions: [],
};

export const examSessioneReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXAM_SESSION_TABLE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_EXAM_SESSION_TABLE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        examSessions: action.payload,
      };
    case FETCH_EXAM_SESSION_TABLE_FAILURE:
      return {
        ...state,
        loading: false,
        examSessions: [],
        error: action.payload,
      };
    case FETCH_EXAMS_TABLE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_EXAMS_TABLE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        examTimeTables: action.payload,
      };
    case FETCH_EXAMS_TABLE_FAILURE:
      return {
        ...state,
        loading: false,
        examTimeTables: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
// export const examTimeTableReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_EXAMS_TABLE_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         error: null,
//       };
//     case FETCH_EXAMS_TABLE_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         error: null,
//         examTimeTable: action.payload,
//       };
//     case FETCH_EXAMS_TABLE_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         examTimeTable: [],
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };
