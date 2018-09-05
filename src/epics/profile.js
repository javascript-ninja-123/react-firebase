import { combineEpics,ofType } from 'redux-observable';
import {of,Observable} from 'rxjs'
import {switchMap,map,catchError} from 'rxjs/operators'
import {FirebaseStore} from '../firebase';
import {Firebase} from '../firebase/config';
import {ENTER_ROOM, enterWorldFufilled, enterWorldFailed,FETCH_PROFILE,
  fetchProfileFufilled,
  fetchUnsubscription
} from '../actions';


const fs = new FirebaseStore();

const firebaseMap = () => Observable.create(observer => {
  const unsubscribe = Firebase.firestore.collection('users')
  .where("name", '==', "ss")
  .onSnapshot(doc => {
    const result = []
    doc.forEach(value => {
      result.push(value.data())
    })
    observer.next(fetchProfileFufilled(result))
  })
  observer.next(fetchUnsubscription(unsubscribe))
})


const enterRoomEpic = action$ =>
action$
.pipe(
  ofType(ENTER_ROOM),
  switchMap(({payload}) => fs.add({collection:'users', doc:localStorage.getItem('uid'),data:payload})),
  map(data => enterWorldFufilled(data)),
  catchError(error => of(enterWorldFailed(error)))
)

const fetchProfileEpic = action$ =>
action$
.pipe(
  ofType(FETCH_PROFILE),
  switchMap(() => firebaseMap())
)


export const profileEpic = combineEpics(
  enterRoomEpic,
  fetchProfileEpic
)
