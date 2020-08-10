import {
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_REQUEST,
  FETCH_STUDENTS_FAILURE,
} from "../actions/action-types";
//here the reducer is going to evaluate any action that has been committed such as fetching and creating posts

const initialState = {
  loading: false,
  error: "",
  studentLists: [],
};

const reducer = (state = initialState, action) => {
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
        studentLists: action.payload,
        error: "",
      };
    case FETCH_STUDENTS_FAILURE:
      return {
        ...state,
        loading: false,
        studentLists: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
