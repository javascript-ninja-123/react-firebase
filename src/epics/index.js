import { combineEpics} from 'redux-observable';
import {homeEpic} from './home';
import {profileEpic} from './profile';

const rootEpic = combineEpics(
  homeEpic,
  profileEpic
);



export default rootEpic;
