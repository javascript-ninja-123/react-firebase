import {
  SIGNUP,
  SIGNUP_FUFILLED,
  SIGNIN,
  SIGNIN_FUFILLED,
  SIGNOUT,
  SIGNIN_GOOGLE
} from './type';


export const signOut = () => (
  {
    type:SIGNOUT,
  }
)


export const signUp = formData => (
  {
    type:SIGNUP,
    payload:formData
  }
)


export const signUpFufilled = data => (
  {
    type:SIGNUP_FUFILLED,
    payload:data
  }
)

export const signIn = formData => {
  return {
    type:SIGNIN,
    payload:formData
  }
}


export const signInFufilled = data => (
  {
    type:SIGNIN_FUFILLED,
    payload:data
  }
)


export const signInThridParty = (name) => (
  {
    type:SIGNIN_GOOGLE,
    payload:name
  }
)
