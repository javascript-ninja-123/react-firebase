import { combineEpics,ofType } from 'redux-observable';
// import {Observable,of,defer,from,getJSON,empty} from 'rxjs'
import {switchMap,map} from 'rxjs/operators'
import {SIGNUP,signUpFufilled, SIGNIN,signInFufilled,SIGNIN_GOOGLE} from '../actions';
import {FirebaseAuth} from '../firebase';

const FireAuth = new FirebaseAuth();

const signUpEpic = (action$) =>
action$
.pipe(
  ofType(SIGNUP),
  switchMap(({payload}) => FireAuth.signUp(payload)),
  map(data => signUpFufilled(data))
)

const signInEpic = action$ =>
action$
.pipe(
  ofType(SIGNIN),
  switchMap(({payload}) => FireAuth.signIn(payload)),
  map(data => signInFufilled(data))
)

const signInGoogleEipc = action$ =>
action$
.pipe(
  ofType(SIGNIN_GOOGLE),
  switchMap(({payload}) => FireAuth.thirdParyAuth(payload)),
  map(data => signInFufilled(data))
)




export const homeEpic = combineEpics(
signUpEpic,
signInEpic,
signInGoogleEipc
);
