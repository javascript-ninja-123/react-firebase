import {
  ENTER_ROOM,
  ENTER_ROOM_FUFILLED,
  ENTER_ROOM_FAILED
} from './type'


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
