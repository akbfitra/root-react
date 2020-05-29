import React, { useEffect, useState } from 'react';
import { useDispatch, useStore, Connect } from 'react-redux';
import { withRouter, useHistory, useLocation } from 'react-router-dom'

<<<<<<< HEAD
import { logoutProcess } from '../../../store/action'
=======
import { logoutProcess } from '../../../store/actions/userAction'
>>>>>>> 5b6fb794b707104fe5f2645ddddc09b3c8a70803

const TopUpSurveyor = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const processLogout = () => {
    dispatch(logoutProcess(history, location))
  }

  return(
    <>
      <p>
        untuk top up surveyor
      </p>
      <input type="button" value="Logout" 
        onClick = { (e) => { 
        e.preventDefault()
        processLogout() }} />
    </>
  )
}

export default withRouter(TopUpSurveyor)