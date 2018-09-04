import { combineReducers } from 'redux';
import HomeReducer from './home';
import ScrollReducer from './scroll';
import HomeTwoReducer from './home2';

const rootReducer = combineReducers({
  home:HomeReducer,
  scroll:ScrollReducer,
  auth:HomeTwoReducer
});

export default rootReducer;
