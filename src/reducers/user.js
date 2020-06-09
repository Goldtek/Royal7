import {
     LOG_OUT
  } from '../components/actions/action-type';
  
  const initialState = {
    user: {},
    errorMessage: '',
    isAuthenticated: false,
  };
  
  const UserReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOG_OUT:
        return {
          ...initialState,
        };
  
      default:
        return state;
    }
  };
  
  
  export default UserReducer;
  