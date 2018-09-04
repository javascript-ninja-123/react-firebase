import React,{Component,Fragment} from 'react';
import {Firebase} from '../firebase/config';
import { Redirect } from 'react-router'
import {homeConnector} from '../connectors'


export default BaseComponent => {
  class requireLogin extends Component {

      state = {
        isLoggedIn:false,
        isRendered:false
      }

       componentDidMount() {
         this.unsubscribe = Firebase.auth.onAuthStateChanged(user => {
           if(user) {

             this.setState({isLoggedIn:true,isRendered:true})
             this.props.signInFufilled(user)
           }
           else return this.setState({isLoggedIn:false, isRendered:true})
         })
      }

      componentWillUnmount() {
         this.unsubscribe && this.unsubscribe();
      }

      renderComponent = () => {
        if(this.state.isRendered){
          if(this.state.isLoggedIn){
            return <BaseComponent {...this.props}/>
          }
          else{
            return <Redirect to='/signIn'/>
          }
        }
        return
      }

      render() {
        return(
          <Fragment>{this.renderComponent()}</Fragment>
        )
      }
  }

  return homeConnector(requireLogin)
}
