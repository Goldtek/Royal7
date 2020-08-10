import { SUCCESS, ERROR, CLEAR } from "../actions/action-types";

const initialState = {
  type: "",
  message: "",
};

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS:
      return {
        type: "alert-success",
        message: action.message,
      };
    case ERROR:
      return {
        type: "alert-danger",
        message: action.message,
      };
    case CLEAR:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default alertReducer;
