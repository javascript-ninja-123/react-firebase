import { combineEpics,ofType } from 'redux-observable';
import {of} from 'rxjs'
import {switchMap,map,catchError} from 'rxjs/operators'
import {FirebaseStore} from '../firebase';
import {ENTER_ROOM, enterWorldFufilled, enterWorldFailed} from '../actions';


const fs = new FirebaseStore();

const enterRoomEpic = action$ =>
action$
.pipe(
  ofType(ENTER_ROOM),
  switchMap(({payload}) => fs.add({collection:'users', doc:localStorage.getItem('uid'),data:payload})),
  map(data => enterWorldFufilled(data)),
  catchError(error => of(enterWorldFailed(error)))
)




export const profileEpic = combineEpics(
  enterRoomEpic
)
