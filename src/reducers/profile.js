import {
  FETCH_PROFILE,
  FETCH_PROFILE_FUIFLLED,
  PROFILE_UNSUBSCRIPTION
} from '../actions';


const INITIAL_STATE = {
  profileList:[],
  loading:false,
  unsubscribe:null
}

export default (state =INITIAL_STATE, {type,payload}) => {
  switch(type){
    case FETCH_PROFILE:
    return {...state ,loading:true}
    case FETCH_PROFILE_FUIFLLED:
    return {...state,profileList:payload, loading:false};
    case PROFILE_UNSUBSCRIPTION:
    return {...state, unsubscribe:payload, loading:false}
    default:
    return state;
  }
}
