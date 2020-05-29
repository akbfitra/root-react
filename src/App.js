import React, { useState, useEffect } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Redirect
} from 'react-router-dom'

import Cookies from 'js-cookie'

import { PrivateRouteSurveyor, PrivateRouteResponden } from './components/privateRoute'
import LandingPage from './container/home'
import Login from './container/user/login'
import Register from './container/user/register'
import RegisterSurveyor from './container/user/registerSurveyor'

import DashboardSurveyor from './container/surveyor/dashboard'
import FormSurveyor from './container/surveyor/form'
import TopUpSurveyor from './container/surveyor/topup'
import ProfileSurveyor from './container/surveyor/profile'
import EditProfileSurveyor from './container/surveyor/editProfile'

import DashboardResponden from './container/responden/dashboard'
import AboutUsResponden from './container/responden/aboutus'
import CategoryQuestions from './container/responden/categoryQuestions'
import ProfileResponden from './container/responden/profile'
import SubmissionResponden from './container/responden/submission'
import TicketResponden from './container/responden/ticket'
import EditProfileResponden from './container/responden/editProfile'

import {CekLogin} from './store/action'

const App = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    if(Cookies.get('test')) {
      dispatch(CekLogin())
    }
  },[ dispatch ])

  return (
    <Switch>
      <Route path = '/login' component = {Login}/>
      <Route path = '/surveyor/register' component = {RegisterSurveyor}/>
      <Route path = '/register' component = {Register}/>
      <PrivateRouteSurveyor path = '/surveyor/form' component = {FormSurveyor}/>
      <PrivateRouteSurveyor path = '/surveyor/profile/edit' component = {EditProfileSurveyor}/>
      <PrivateRouteSurveyor path = '/surveyor/profile' component = {ProfileSurveyor}/>
      <PrivateRouteSurveyor path = '/surveyor/topup' component = {TopUpSurveyor}/>
      <PrivateRouteSurveyor path = '/surveyor' component = {DashboardSurveyor}/>
      <PrivateRouteResponden path = '/responden/aboutus' component = {AboutUsResponden}/>
      <PrivateRouteResponden path = '/responden/category/:categoryId' component = {CategoryQuestions}/>
      <PrivateRouteResponden path = '/responden/profile/edit' component = {EditProfileResponden}/>
      <PrivateRouteResponden path = '/responden/profile' component = {ProfileResponden}/>
      <PrivateRouteResponden path = '/responden/submission' component = {SubmissionResponden}/>
      <PrivateRouteResponden path = '/responden/ticket' component = {TicketResponden}/>
      <PrivateRouteResponden path = '/responden' component = {DashboardResponden} />
      <Route exact path ='/' component = {LandingPage}/>
      <Redirect from = '*' to= '/'/>
    </Switch>
  );
}

export default withRouter(App);
