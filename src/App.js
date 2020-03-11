import React, { useState, useEffect } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Redirect
} from 'react-router-dom'


import LandingPage from './container/home'
import Login from './container/user/login'
import Register from './container/user/register'

const App = () => {
  return (
    <Switch>
      <Route path = '/login' component = {Login}/>
      <Route path = '/register' component = {Register}/>
      <Route exact path ='/' component = {LandingPage}/>
      <Redirect from = '*' to= '/'/>
    </Switch>
  );
}

export default withRouter(App);
