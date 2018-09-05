import React, {PureComponent} from 'react';
import styled from 'styled-components';
import {Button,Input} from './index';

export const FormContext = React.createContext();

class Form extends PureComponent{

  onChange = ({target:{name,value}}) => {
    this.setState({formData:{...this.state.formData, [name]:value}})
  }

  onClick = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state.formData)
    const reset = Object.keys(this.state.formData).reduce((acc,val) => {
      acc[val] = ''
      return acc;
    },{})
    this.setState({formData:reset})
  }

  onClickGoogleButton = () => {

  }

  state = {
    onChange:this.onChange,
    onClick:this.onClick,
    formData:{}
  }



  static InputField = (props) => (
    <FormContext.Consumer>
        {
          ({formData, onChange}) => (
            <Input {...props} value={formData[props.name]} onChange={onChange}/>
          )
        }
    </FormContext.Consumer>
  )

  static ButtonField = ({buttonText}) => (
    <FormContext.Consumer>
        {
          ({onClick}) => (
            <Button onClick={onClick} buttonText={buttonText}/>
          )
        }
    </FormContext.Consumer>
  )

  static GoogleButtonField = ({buttonText,onClick,name}) => (
    <Button onClick={onClick} buttonText={buttonText} name={name}/>
  )

  render(){
    return(
      <FormContext.Provider value={this.state}>
          {this.props.children}
      </FormContext.Provider>
    )
  }
}

export default Form;
