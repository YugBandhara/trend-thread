// rootReducer.js
import { combineReducers } from 'redux';
import { userReducer } from './reducers/userReducer';

// Import other reducers as needed

const rootReducer = combineReducers({
    userReducer: userReducer,
  // Add other reducers here
});

export default rootReducer;
