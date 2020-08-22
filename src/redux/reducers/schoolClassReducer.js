import {
  FETCH_CLASS_REQUEST,
  FETCH_CLASS_SUCCESS,
  FETCH_CLASS_FAILURE,
} from "../actions/action-types";
//here the reducer is going to evaluate any action that has been committed such as fetching and creating posts

const initialState = {
  loading: false,
  error: null,
  schoolClasses: [],
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
