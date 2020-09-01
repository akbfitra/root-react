import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, useHistory, useLocation } from 'react-router-dom'

import { logoutProcess } from '../../../store/actions/userAction'

const TentangResponden = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const processLogout = () => {
    dispatch(logoutProcess(history, location))
  }

  return(
    <>
      <p>
        untuk Tentang responden aaaasssssss
      </p>
      <input type="button" value="Logout" 
        onClick = { (e) => { 
        e.preventDefault()
        processLogout() }} />
    </>
  )
}

export default withRouter(TentangResponden)