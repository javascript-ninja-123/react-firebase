import { combineReducers } from 'redux';
import HomeReducer from './home';
import ScrollReducer from './scroll';
import HomeTwoReducer from './home2';
import ProfileReducer from './profile';

const rootReducer = combineReducers({
  home:HomeReducer,
  scroll:ScrollReducer,
  auth:HomeTwoReducer,
  profile:ProfileReducer
});

export default rootReducer;
