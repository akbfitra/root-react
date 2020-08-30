import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie'
import './css/style.css';
import { useDispatch } from 'react-redux';
import NumberFormat from 'react-number-format';
import { Col, Container, Row, Button, Dropdown, DropdownButton } from 'react-bootstrap'
import { useHistory, useLocation, Link  } from 'react-router-dom';

import { logoutProcess, GET_SALDO, GET_DATA_NOTIFICATION } from '../../store/actions/userAction'

export const Navbar = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const [ saldoUser, setSaldoUser ] = useState([])
  const [ notification, setNotification ] = useState([])

  
  let role = Cookies.get('role')
  let namaUser = Cookies.get('username')

  const processLogout = () => {
    dispatch(logoutProcess(history, location))
  }

  const dapetinSaldo = () => {
    dispatch(GET_SALDO())
      .then(data => {
        setSaldoUser(data)
      })
  }

  const dapetinNotification = () => {
    dispatch(GET_DATA_NOTIFICATION())
      .then( data => {
        setNotification(data)
      })
  }

  useEffect(() => {
    dapetinSaldo()
  }, [dispatch])

  useEffect(() => {
    dapetinNotification()
  }, [dispatch])



  return(
    <>
      <div id="general-header">
        <div className="main-header-one">
          <Container>
            <Row>
              <Col xs={6} sm={6} md={5} lg={5} className="part-one">
                  <div className="table-100">
                    <div className="table-row">
                    <Link to = {`/${role}`}>
                      <div className="table-cell-one">
                        <img src="../../../../images/logo three.png" style={{height:'50px', }}></img>
                      </div>
                      <div className="table-cell-two">
                        <h3 className="m-t-0 m-b-0"><strong>suRvplus</strong></h3>
                      </div>
                      </Link>
                    </div>
                  </div>
              </Col>

              {/* <Col xs={6} sm={6} md={4} lg={4}>
                
              </Col> */}

              {
                role && namaUser &&
                <Col xs={6} sm={6} md={7} lg={7} className="part-two">
                  <div className="table-100">
                    <div className="table-row">
                      <div className="table-cell-one">
                      {/* untuk dekstop */}
                      <Dropdown alignRight className="float-right d-none d-none d-xl-block d-none d-lg-block d-xl-none d-none d-md-block d-lg-none" >
                        <Dropdown.Toggle variant="default" id="dropdown-basic" style={{paddingRight:'0',paddingLeft:'0'}}>
                          <div style={{display:"flex", alignItems:'center'}}>
                            {/* <div style={{width:'100px',height:'20px',backgroundColor:'red'}}></div> */}
                            <div style={{display:'flex', flexDirection:'column',paddingRight:'10px' }}>
                            <p style={{textAlign:'right'}}><strong>Hi, {namaUser}</strong></p>
                            <p style={{textAlign:'right'}}>Saldo Anda : <NumberFormat value={saldoUser.saldo} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp'} />,-</p>
                            </div>
                            <img src="../../../../images/user_profil.png" style={{height:'60px'}}></img>
                            {/* {
                              notification.length 
                              ? 
                              <div style={{height:'20px', width:'20px', backgroundColor: 'red'}}> {notification.length} </div>
                              :
                              <>
                              </>
                            } */}
                            {/* <div style={{position: 'absolute',
                              top: '50%',
                              left: '50%',
                              transform: 'translate(-50%, -50%)'}}>10</div> */}

                          </div>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          {
                            notification.length 
                            ?
                              <Dropdown.Item> 
                                <Link to = {`/${role}/notification`}>
                                  Notification  
                                  <div style={{height:'20px', width:'20px', backgroundColor: 'red'}}> 
                                    {notification.length} 
                                  </div>
                                </Link>
                              </Dropdown.Item>
                            : 
                            <></>

                          }
                          <Dropdown.Item onClick = { (e) => { 
                              e.preventDefault()
                              processLogout() }} >Logout</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>

                      

                        <div style={{display:'flex', justifyContent:'flex-end', alignItems:'center', height:'80px',  }}>
                          
                            {
                              notification.length 
                              ? 
                                <>
                                  <Dropdown alignRight>
                                  <Dropdown.Toggle variant="link" id="dropdown-basic" style={{position:'relative'}}>
                                    <img src="../../../../images/bell.png" style={{height:'35px'}}></img>
                                    <div style={{backgroundColor:'#1f59bb', position:'absolute', top:'0', right:'10px', width:'25px', height:'25px', borderRadius:'100%', display:'flex', justifyContent:'center', alignItems:'center', fontSize:'12px', fontWeight:'bold', color:'#fff'}}>{notification.length}</div>
                                  </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                      {
                                        notification.map((data, i) => {
                                          return(
                                            
                                                <Dropdown.Item key={`${i}`}>
                                                  <Link to = {`/${role}/notification`}>
                                                    {data.content} 
                                                  </Link>
                                                </Dropdown.Item>
                                          
                                            
                                          )
                                        })
                                      }
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </>
                              :
                              <>
                              </>
                            }

                            {/* untuk mobile */}
                          <Dropdown alignRight className="float-right d-none d-none d-sm-block d-md-none d-block d-sm-none" >
                            <Dropdown.Toggle variant="default" id="dropdown-basic" style={{paddingRight:'0',paddingLeft:'0'}}>
                            <img src="../../../../images/user_profil.png" style={{height:'35px'}}></img>
                            
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                            <Dropdown.Item>
                                <p style={{textAlign:'right'}}><strong>Hi, {namaUser} </strong></p>
                                <p style={{textAlign:'right'}}>Saldo Anda : <NumberFormat value={saldoUser.saldo} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp'} /> ,-</p>
                            </Dropdown.Item>
                            <Dropdown.Divider />
                              <Dropdown.Item onClick = { (e) => { 
                                  e.preventDefault()
                                  processLogout() }} >Logout</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              }
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}