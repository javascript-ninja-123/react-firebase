import {
  SIGNUP_FUFILLED,
  SIGNIN_FUFILLED,
  SIGNOUT
} from '../actions';

const INITIAL_STATE = {
  loading:false,
  errorMessage:null,
  user:null
}


export default (state = INITIAL_STATE, {type,payload}) => {
  switch(type){
    case SIGNOUT:
    return {...state, user:null};
    case SIGNUP_FUFILLED:
    return state;
    case SIGNIN_FUFILLED:
    if(!payload){
      return {...state, errorMessage:"please vertify your email address"}
    }
    return {...state, user:payload.uid};
    default:
    return state;
  }
}
