import {combineReducers} from 'redux';
import authReducer from '../slices/loginSlice';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
