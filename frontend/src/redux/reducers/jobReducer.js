import { 
    JOB_CREATE, 
    JOB_LOADING, 
    JOB_LIST, 
    JOB_ERROR 
  } from '../actions/types';
  
  const initialState = {
    jobs: [],
    loading: false,
    error: null
  };
  
  export default function(state = initialState, action) {
    switch(action.type) {
      case JOB_LOADING:
        return {
          ...state,
          loading: true
        };
      case JOB_LIST:
        return {
          ...state,
          jobs: action.payload,
          loading: false
        };
      case JOB_CREATE:
        return {
          ...state,
          jobs: [...state.jobs, action.payload],
          loading: false
        };
      case JOB_ERROR:
        return {
          ...state,
          error: action.payload,
          loading: false
        };
      default:
        return state;
    }
  }