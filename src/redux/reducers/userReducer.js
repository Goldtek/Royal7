import {
  LOG_OUT,
  LOGIN_SUCCESS,
  STORE_USER_ERROR_MSG,
} from "../actions/action-type";

const initialState = {
  user: {},
  errorMessage: "",
  isAuthenticated: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.user,
      };

    case STORE_USER_ERROR_MSG:
      return {
        ...state,
        errorMessage: action.message,
      };

    case LOG_OUT:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default userReducer;
