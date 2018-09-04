import {connect} from 'react-redux';
import {signUp,signIn,signOut,signInThridParty,signInFufilled} from '../actions';


const  mapStateToProps = ({auth}) => {
  const {loading, errorMessage, user} = auth;
  return{loading, errorMessage, user}
}


export const homeConnector = component =>
connect(mapStateToProps,{signUp,signIn,signOut,signInThridParty,signInFufilled})(component)
