import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, useHistory, useLocation } from 'react-router-dom'

<<<<<<< HEAD
import { logoutProcess } from '../../../store/action'
=======
import { logoutProcess } from '../../../store/actions/userAction'
>>>>>>> 5b6fb794b707104fe5f2645ddddc09b3c8a70803

const TicketResponden = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const processLogout = () => {
    dispatch(logoutProcess(history, location))
  }

  return(
    <>
      <p>
        untuk ticketing help desk responden yeyeyeye
      </p>
      <input type="button" value="Logout" 
        onClick = { (e) => { 
        e.preventDefault()
        processLogout() }} />
    </>
  )
}

export default withRouter(TicketResponden)