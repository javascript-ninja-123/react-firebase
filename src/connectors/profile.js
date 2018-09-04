import {connect} from 'react-redux';
import {enterWorld} from '../actions';




export const profileConnector = component =>
connect(null,{enterWorld})(component)
