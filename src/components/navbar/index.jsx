import React from 'react';
<<<<<<< HEAD
=======
import Cookies from 'js-cookie'
>>>>>>> 5b6fb794b707104fe5f2645ddddc09b3c8a70803
import './css/style.css';
import { useDispatch } from 'react-redux';
import { Col, Container, Row, Button } from 'react-bootstrap'
import { useHistory, useLocation, Link  } from 'react-router-dom';

<<<<<<< HEAD
import { logoutProcess } from '../../store/action'
=======
import { logoutProcess } from '../../store/actions/userAction'
>>>>>>> 5b6fb794b707104fe5f2645ddddc09b3c8a70803

export const Navbar = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()
<<<<<<< HEAD

=======
  let role = Cookies.get('role')
>>>>>>> 5b6fb794b707104fe5f2645ddddc09b3c8a70803
  const processLogout = () => {
    dispatch(logoutProcess(history, location))
  }

  return(
    <>
      <div id="general-header">
        <div className="main-header-one">
          <Container>
            <Row>
              <Col md={8} lg={8} className="part-one">
<<<<<<< HEAD
                <Link to = '/responden'>
=======
                <Link to = {`/${role}`}>
>>>>>>> 5b6fb794b707104fe5f2645ddddc09b3c8a70803
                  <div className="table-100">
                    <div className="table-row">
                      <div className="table-cell-one">
                        <img src="https://via.placeholder.com/60"></img>
                      </div>
                      <div className="table-cell-two">
                        <h4 className="m-t-0 m-b-0 title-two"><strong>suRvplus</strong></h4>
                      </div>
                    </div>
                  </div>
                </Link>
              </Col>
              <Col md={4} lg={4} className="part-two">
                <div className="table-100">
                  <div className="table-row">
                    <div className="table-cell-one">
                        <Button 
                          variant="primary" 
                          className="float-right"
                          onClick = { (e) => { 
                            e.preventDefault()
                            processLogout() }} 
                        >
                          LOGOUT
                        </Button>{' '}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}