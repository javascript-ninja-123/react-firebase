import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import HttpsRedirect from 'react-https-redirect';
import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter,  routerMiddleware } from 'react-router-redux'
import {ThemeProvider} from 'styled-components';
import {authMiddleware} from './middlewares';
import {theme} from './styled/variable';
import {createEpicMiddleware} from 'redux-observable';
import 'bootstrap/dist/css/bootstrap.min.css';
import whyDidYouUpdate from 'why-did-you-update'
import  'why-did-you-update-redux';

import reducers from './reducers';
import Router from './router';

import rootEpic from './epics';
const epicMiddleware = createEpicMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createHistory()
const middleware = routerMiddleware(history)

const store = createStore(
  reducers,
  composeEnhancer(
    applyMiddleware(thunk,middleware,epicMiddleware,authMiddleware)
  )
)
epicMiddleware.run(rootEpic);

if (process.env.NODE_ENV !== 'production') {
  whyDidYouUpdate(React,{exclude: [/^Connect/]});
}


ReactDOM.render(
  <Provider store={store} theme={theme}>
      <ThemeProvider theme={theme}>
         <HttpsRedirect>
        <ConnectedRouter history={history}>
          <Router/>
        </ConnectedRouter>
         </HttpsRedirect>
   </ThemeProvider>
  </Provider>
  , document.getElementById('root'));
