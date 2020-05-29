import React from 'react'
import Cookies from 'js-cookie'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const PrivateRouteSurveyor = ({ component: Component, ...rest }) => {
  
  const loginStatus = useSelector(state => state.user.user.isLogin)
  const role = useSelector(state => state.user.user.role)
  
  return(
    <Route {...rest} render={(props) => (
      (Cookies.get('role') === 'surveyor') || (loginStatus && role === 'surveyor')
        ? <Component {...props} />
        : <Redirect to='/' />
    )} />
  )
}

export const PrivateRouteResponden = ({ component: Component, ...rest }) => {
  
  const loginStatus = useSelector(state => state.user.user.isLogin)
  const role = useSelector(state => state.user.user.role)
  
  return(
    <Route {...rest} render={(props) => (
      (Cookies.get('role') === 'responden') || (loginStatus && role === 'responden')
        ? <Component {...props} />
        : <Redirect to='/' />
    )} />
  )
  }

