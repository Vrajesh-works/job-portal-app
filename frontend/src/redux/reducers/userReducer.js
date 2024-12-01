// src/redux/reducers/userReducer.js
import { 
    USER_LOADING, 
    USER_LOADED, 
    USER_ERROR 
  } from '../actions/types';
  
  const initialState = {
    users: [],
    loading: false,
    error: null
  };
  
  export default function userReducer(state = initialState, action) {
    switch(action.type) {
      case USER_LOADING:
        return {
          ...state,
          loading: true
        };
      case USER_LOADED:
        return {
          ...state,
          users: action.payload,
          loading: false
        };
      case USER_ERROR:
        return {
          ...state,
          error: action.payload,
          loading: false
        };
      default:
        return state;
    }
  }