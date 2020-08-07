import React from 'react';
import Cookies from 'js-cookie'
import './css/style.css';
import { useDispatch } from 'react-redux';
import { Col, Container, Row, Button, Dropdown, DropdownButton } from 'react-bootstrap'
import { useHistory, useLocation, Link  } from 'react-router-dom';

import { logoutProcess } from '../../store/actions/userAction'

export const Navbar = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()
  let role = Cookies.get('role')
  const processLogout = () => {
    dispatch(logoutProcess(history, location))
  }

  return(
    <>
      <div id="general-header">
        <div className="main-header-one">
          <Container>
            <Row>
              <Col xs={6} sm={6} md={8} lg={8} className="part-one">
                <Link to = {`/${role}`}>
                  <div className="table-100">
                    <div className="table-row">
                      <div className="table-cell-one">
                        <img src="../../images/logo three.png" style={{height:'60px'}}></img>
                      </div>
                      <div className="table-cell-two">
                        <h3 className="m-t-0 m-b-0"><strong>suRvplus</strong></h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </Col>
              <Col xs={6} sm={6} md={4} lg={4} className="part-two">
                <div className="table-100">
                  <div className="table-row">
                    <div className="table-cell-one">
                    {/* untuk dekstop */}
                    <Dropdown alignRight className="float-right d-none d-none d-xl-block d-none d-lg-block d-xl-none d-none d-md-block d-lg-none" >
                      <Dropdown.Toggle variant="default" id="dropdown-basic" style={{paddingRight:'0',paddingLeft:'0'}}>
                        <div style={{display:"flex", alignItems:'center'}}>
                          <div style={{display:'flex', flexDirection:'column',paddingRight:'15px' }}>
                          <p style={{textAlign:'right'}}><strong>Hi, Username</strong></p>
                          <p style={{textAlign:'right'}}>Saldo Anda : Rp 0,-</p>
                          </div>
                          <img src="../../images/user_profil.png" style={{height:'60px'}}></img>

                        </div>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item onClick = { (e) => { 
                            e.preventDefault()
                            processLogout() }} >Logout</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    {/* untuk mobile */}
                    <Dropdown alignRight className="float-right d-none d-none d-sm-block d-md-none d-block d-sm-none" >
                      <Dropdown.Toggle variant="default" id="dropdown-basic" style={{paddingRight:'0',paddingLeft:'0'}}>
                      <img src="../../images/user_profil.png" style={{height:'60px'}}></img>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                      <Dropdown.Item>
                          <p style={{textAlign:'right'}}><strong>Hi, Username</strong></p>
                          <p style={{textAlign:'right'}}>Saldo Anda : Rp 0,-</p>
                      </Dropdown.Item>
                      <Dropdown.Divider />
                        <Dropdown.Item onClick = { (e) => { 
                            e.preventDefault()
                            processLogout() }} >Logout</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                        {/* <Button 
                          variant="primary" 
                          className="float-right"
                          onClick = { (e) => { 
                            e.preventDefault()
                            processLogout() }} 
                        >
                          LOGOUT
                        </Button>{' '} */}
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