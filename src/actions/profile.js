import {
  ENTER_ROOM,
  ENTER_ROOM_FUFILLED,
  ENTER_ROOM_FAILED,
  FETCH_PROFILE,
  FETCH_PROFILE_FUIFLLED,
  PROFILE_UNSUBSCRIPTION
} from './type'
import {Firebase} from '../firebase/config';


export const enterWorld = obj => (
  {
    type:ENTER_ROOM,
    payload:obj
  }
)

export const enterWorldFufilled = result => (
{
  type:ENTER_ROOM_FUFILLED,
  payload:result
}
)
export const enterWorldFailed = error => (
{
  type:ENTER_ROOM_FAILED,
  payload:error
}
)

//cannot put this in observable
export const fetchProfile = () => (
  {
    type:FETCH_PROFILE
  }
)

export const fetchProfileFufilled = data => (
  {
    type:FETCH_PROFILE_FUIFLLED,
    payload:data
  }
)

export const fetchUnsubscription = unsubscription => (
  {
    type:PROFILE_UNSUBSCRIPTION,
    payload:unsubscription
  }
)
