import React,{Component} from 'react';
import {Form} from '../../components';
import {compose} from 'redux';
import { Input,Button } from 'semantic-ui-react'
import {homeConnector,routerConnector} from '../../connectors';
import {promisify} from "es6-promisify";

class SignIn extends Component {

    onSubmit = formData => {
      this.props.signIn(formData)
    }

    renderErrorMessage = () => {
      if(typeof this.props.errorMessage === 'string'){
        return <div>{this.props.errorMessage}</div>
      }
      return
    }

    componentDidUpdate(prevProps, prevState) {
      if(this.props.user !== prevProps.user){
        return this.props.simpleRoute('/profile')
      }
    }

    thirdPartyOnClick = ({target:{name}}) => {
      this.props.signInThridParty(name);
    }

    render() {
        return (
            <div>
              <h3>Sign In</h3>
              <Form onSubmit={this.onSubmit}>
                <Form.InputField
                  fluid
                  icon='search'
                  placeholder='email'
                  name="email"
                  type='text'
                  autoComplete='false'
                />
                <Form.InputField
                  fluid
                  placeholder='password'
                  name="password"
                  autoComplete='false'
                  type="password"
                />
                <Form.ButtonField buttonText="Submit"/>

                <Form.GoogleButtonField buttonText='google log in' onClick={this.thirdPartyOnClick} name='google'/>
                <Form.GoogleButtonField buttonText='facebook log in' onClick={this.thirdPartyOnClick} name='facebook'/>
                <Form.GoogleButtonField buttonText='Github log in' onClick={this.thirdPartyOnClick} name='github'/>
                <Form.GoogleButtonField buttonText='phone number' onClick={this.thirdPartyOnClick} name='phone'/>
                {this.renderErrorMessage()}
              </Form>
            </div>
        );
    }
}

export default  compose(
  routerConnector,
  homeConnector
)(SignIn)
