// src/redux/actions/authActions.js
import axios from 'axios';
import { 
  AUTH_SUCCESS, 
  AUTH_FAIL, 
  LOGOUT 
} from '../types';

const API_URL = 'http://localhost:5000/api';

// Login Action
export const login = (email, password) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const body = JSON.stringify({ email, password });

    const res = await axios.post(`${API_URL}/auth/login`, body, config);

    dispatch({
      type: AUTH_SUCCESS,
      payload: res.data
    });

    // Store token in localStorage
    localStorage.setItem('token', res.data.token);
  } catch (err) {
    dispatch({
      type: AUTH_FAIL
    });
  }
};

// Register Action
export const register = (fullName, email, password, type) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const body = JSON.stringify({ fullName, email, password, type });

    const res = await axios.post(`${API_URL}/auth/register`, body, config);

    dispatch({
      type: AUTH_SUCCESS,
      payload: res.data
    });

    localStorage.setItem('token', res.data.token);
  } catch (err) {
    dispatch({
      type: AUTH_FAIL
    });
  }
};

// Logout Action
export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: LOGOUT });
};

// Job Actions
export const createJob = (jobData) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    };

    const res = await axios.post(`${API_URL}/jobs/create`, jobData, config);

    dispatch({
      type: JOB_CREATE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: JOB_ERROR,
      payload: err.response.data
    });
  }
};

export const getAllJobs = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };

    const res = await axios.get(`${API_URL}/jobs/all`, config);

    dispatch({
      type: JOB_LIST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: JOB_ERROR,
      payload: err.response.data
    });
  }
};