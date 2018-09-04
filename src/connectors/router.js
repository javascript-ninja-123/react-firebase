import {
  simpleRoute
} from '../actions'
import {connect} from 'react-redux';



export const routerConnector = component =>
connect(null,{simpleRoute})(component)
