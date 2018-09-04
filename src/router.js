import React from 'react';
import {  Route,Switch } from 'react-router-dom'

import Header from './components/header/header'
import Home from './containers/home/home'
import Profile from './containers/profile/profile'
import SignIn from './containers/signIn/signIn';

 class Router extends React.Component {

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route path='/profile' component={Profile}/>
          <Route path='/signIn' component={SignIn}/>
          <Route exact path='/' component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default Router;
