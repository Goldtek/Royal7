import {
    LOG_OUT
  } from '../actions/type';
  
  const initialState = {
    user: {},
    loading: true,
  };
  
  const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
 
      case LOG_OUT:
        return {
          ...initialState,
        };
  
      default:
        return state;
    }
  };
  
  
  export default AuthReducer;
  