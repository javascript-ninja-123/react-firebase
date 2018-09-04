import React,{Component} from 'react';
import styled from 'styled-components';
import HomeForm from './homeForm';
import {defaultPageStyle} from '../../styled';
import {homeConnector} from '../../connectors';

const Container = styled.div`
  color:${props => props.theme.mainTextColor};
  background-color:${props => props.theme.mainColor};
  ${defaultPageStyle()};
  padding:${props => props.theme.pagePadding};
`

export const HomeContext = React.createContext();

class Home extends Component {

    onClick = () => {
      this.props.signUp({
        email:this.state.email,
        password:this.state.password
      })
    }

    onChange = ({target:{name,value}}) => this.setState({[name]:value})

    state = {
      onClick:this.onClick,
      onChange:this.onChange,
      email:'',
      password:''
    }

    render() {
        return (
            <HomeContext.Provider value={this.state}>
              <Container>
                <h2>Sign Up</h2>
                <HomeForm/>
              </Container>
          </HomeContext.Provider>
        );
    }
}

export default homeConnector(Home)
