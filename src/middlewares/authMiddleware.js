export const authMiddleware = store => next => action => {
  if(action.type === 'SIGNIN_FUFILLED'){
    localStorage.setItem('uid', action.payload.uid)
    return next(action);
  }
  if(action.type === 'SIGNOUT'){
    localStorage.removeItem('uid')
    return next(action)
  }
  else return next(action)
}
