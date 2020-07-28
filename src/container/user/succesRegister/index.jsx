import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, useHistory, useLocation, Link } from 'react-router-dom'

import { logoutProcess } from '../../../store/actions/userAction'

const SuccessRegister = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const processLogout = () => {
    dispatch(logoutProcess(history, location))
  }

  return(
    <>
      <p>
        untuk success reegister responden / surveyor yeyeyeye
      </p>
      <Link to='/login'>
      <input type="button" value="login"/>
      </Link>
    </>
  )
}

export default withRouter(SuccessRegister)