import React, { useEffect, useState } from 'react';
import { useDispatch, useStore, Connect } from 'react-redux';
import { withRouter, useHistory, useLocation, Link } from 'react-router-dom'

import { logoutProcess } from '../../../store/action'

const SurveyorDashboard = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const processLogout = () => {
    dispatch(logoutProcess(history, location))
  }

  return(
    <>
      <p>
        untuk surveyor dashboard
      </p>
      <br>
      </br>
      <Link to = '/surveyor/form'>Form</Link>
      <br>
      </br>
      <Link to = '/surveyor/profile'>Profile</Link>
      <br>
      </br>
      <Link to = '/surveyor/topup'>Top up</Link>
      {/* <input type="button" value="Logout" 
        onClick = { (e) => { 
        e.preventDefault()
        processLogout() }} /> */}
    </>
  )
}

export default withRouter(SurveyorDashboard)