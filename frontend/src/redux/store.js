import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Import reducers
import authReducer from './reducers/authReducer';
import userReducer from './reducers/userReducer';
import jobReducer from './reducers/jobReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  users: userReducer,
  jobs: jobReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer, 
  initialState, 
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;