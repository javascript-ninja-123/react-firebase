import React,{PureComponent} from 'react';
import {   Form } from 'semantic-ui-react'
import styled from 'styled-components';
import {Button} from '../../components';
import {HomeContext} from './home';


class HomeForm extends PureComponent {
    render() {
        return (
          <HomeContext.Consumer>
            {
              ({onClick,onChange,email,password}) => (
                <Form>
                 <Form.Field>
                   <label htmlFor="email">Email</label>
                   <input placeholder='type your email' name='email' id="email"
                     onChange={onChange}
                     value={email}
                   />
                 </Form.Field>
                 <Form.Field>
                   <label htmlFor='password'>Password</label>
                   <input placeholder='******'  name="password"
                    onChange={onChange}
                    type="password"
                    value={password}
                   />
                 </Form.Field>
                 <Button
                   buttonText="Submit"
                   onClick={onClick}
                 />
                </Form>
              )
            }
          </HomeContext.Consumer>
        );
    }
}

export default HomeForm;
