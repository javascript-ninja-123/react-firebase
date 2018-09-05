import {connect} from 'react-redux';
import {compose} from 'redux'
import {enterWorld,fetchProfile} from '../actions';
import RequireLogin from '../hoc/requiredLogin';
import RequiredLocation from '../hoc/requiredLocation';

const  mapStateToProps = ({profile}) => {
  const {profileList,unsubscribe,loading} = profile;
  return{profileList,unsubscribe,loading}
}




export const profileConnector = component =>
compose(
  RequireLogin,
  RequiredLocation,
  connect(mapStateToProps,{enterWorld,fetchProfile})
)(component)
