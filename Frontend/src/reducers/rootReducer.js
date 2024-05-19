// rootReducer.js

import { combineReducers } from 'redux';
import someReducer from './someReducer'; 
import userReducer from './userReducer';

const rootReducer = combineReducers({
  someState: someReducer,
  user: userReducer,
  // Add other reducers here if needed
});

export default rootReducer;
