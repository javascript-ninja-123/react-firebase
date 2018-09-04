import React, {PureComponent} from 'react';
import { Button } from 'semantic-ui-react'

class BUTTON extends PureComponent{
  render(){
    return(
      <Button onClick={this.props.onClick} name={this.props.name}>{this.props.buttonText}</Button>
    )
  }
}


export default BUTTON;
