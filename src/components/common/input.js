import React,{PureComponent} from 'react';
import { Input } from 'semantic-ui-react'

export default class INPUT extends PureComponent {

    render() {
        return (
          <Input
            value={this.props.value}
            onChange={this.props.onChange}
            {...this.props}
          />
        );
    }
}
