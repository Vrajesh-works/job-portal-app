// src/redux/reducers/authReducer.js
import { 
    AUTH_SUCCESS, 
    AUTH_FAIL, 
    LOGOUT 
  } from '../actions/types';
  
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: true,
    user: null
  };
  
  export default function(state = initialState, action) {
    switch(action.type) {
      case AUTH_SUCCESS:
        return {
          ...state,
          ...action.payload,
          isAuthenticated: true,
          loading: false
        };
      case AUTH_FAIL:
      case LOGOUT:
        localStorage.removeItem('token');
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          loading: false,
          user: null
        };
      default:
        return state;
    }
  }