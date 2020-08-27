import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, useHistory, useLocation } from 'react-router-dom'

import { logoutProcess } from '../../../store/actions/userAction'

const NotificationResponden = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const processLogout = () => {
    dispatch(logoutProcess(history, location))
  }

  return(
    <>
      <p>
        untuk Notification help desk responden yeyeyeye
      </p>
      <input type="button" value="Logout" 
        onClick = { (e) => { 
        e.preventDefault()
        processLogout() }} />
    </>
  )
}

export default withRouter(NotificationResponden)