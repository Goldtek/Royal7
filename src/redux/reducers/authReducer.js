import {
  LOGIN_REQUEST,
  LOGOUT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../actions/action-types";

const initialState = {
  user: {},
  isAuthenticated: false,
  loggingIn: false,
  error: null,
};

// const userReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case LOGIN_SUCCESS:
//       return {
//         ...state,
//         loggingIn: false,
//         isAuthenticated: true,
//         user: action.user,
//       };

//     case STORE_USER_ERROR_MSG:
//       return {
//         ...state,
//         errorMessage: action.message,
//       };

//     case LOG_OUT:
//       return {
//         ...initialState,
//       };

//     default:
//       return state;
//   }
// };

export function authentication(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        isAuthenticated: true,
        error: null,
        user: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        isAuthenticated: false,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        loggingIn: false,
        isAuthenticated: false,
        error: null,
        user: {},
      };
    default:
      return state;
  }
}
