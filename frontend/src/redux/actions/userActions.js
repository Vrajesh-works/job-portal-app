// src/redux/actions/userActions.js
import axios from 'axios';
import { 
  USER_LOADING, 
  USER_LOADED, 
  USER_ERROR 
} from '../types';

// Fetch All Users Action
export const fetchUsers = () => async (dispatch) => {
  try {
    // Dispatch loading action
    dispatch({ type: USER_LOADING });

    // Get token from localStorage
    const token = localStorage.getItem('token');

    // Configure headers with token
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };

    // Make API call to fetch users
    const res = await axios.get('http://localhost:5000/api/users/all', config);

    // Dispatch loaded action with users data
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    // Dispatch error action if something goes wrong
    dispatch({
      type: USER_ERROR,
      payload: err.response ? err.response.data : 'Server Error'
    });
  }
};