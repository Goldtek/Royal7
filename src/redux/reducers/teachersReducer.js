import {
  FETCH_TEACHERS_SUCCESS,
  FETCH_TEACHERS_REQUEST,
  FETCH_TEACHERS_FAILURE,
} from "../actions/action-types";
//here the reducer is going to evaluate any action that has been committed such as fetching and creating posts

const initialState = {
  loading: false,
  error: "",
  teachersList: [],
};

const reducer = (state = initialState, action) => {
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
        teachersList: action.payload,
        error: "",
      };
    case FETCH_TEACHERS_FAILURE:
      return {
        ...state,
        loading: false,
        teachersList: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
