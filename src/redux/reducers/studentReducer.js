import {
  FETCH_STUDENTS_REQUEST,
  FETCH_STUDENTS_SUCCESS,
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
} from "../actions/action-types";
//here the reducer is going to evaluate any action that has been committed such as fetching and creating posts

const initialState = {
  loading: false,
  error: null,
  students: [],
  studentAssesments: [],
  student: {},
};

export const studentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STUDENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_STUDENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        students: action.payload,
        error: null,
      };
    case FETCH_STUDENTS_FAILURE:
      return {
        ...state,
        loading: false,
        students: [],
        error: action.payload,
      };
    case FETCH_STUDENT_ASSESSMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_STUDENT_ASSESSMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        studentAssesments: action.payload,
        error: null,
      };
    case FETCH_STUDENT_ASSESSMENT_FAILURE:
      return {
        ...state,
        loading: false,
        studentAssesments: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export const singleStudentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SINGLE_STUDENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SINGLE_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        student: action.payload,
        error: null,
      };
    case FETCH_SINGLE_STUDENT_FAILURE:
      return {
        ...state,
        loading: false,
        student: {},
        error: action.payload,
      };
    default:
      return state;
  }
};
// export const studentAssessmentReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_STUDENT_ASSESSMENT_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case FETCH_STUDENT_ASSESSMENT_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         studentAssesments: action.payload,
//         error: null,
//       };
//     case FETCH_STUDENT_ASSESSMENT_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         studentAssesments: {},
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };
