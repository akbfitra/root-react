import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie'
import './css/style.css';
import { useDispatch } from 'react-redux';
import NumberFormat from 'react-number-format';
import { Col, Container, Row, Button, Dropdown, DropdownButton } from 'react-bootstrap'
import { useHistory, useLocation, Link  } from 'react-router-dom';

import { logoutProcess, GET_SALDO, GET_DATA_NOTIFICATION, dataProfileUser } from '../../store/actions/userAction'

export const Navbar = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const [ saldoUser, setSaldoUser ] = useState([])
  const [ notification, setNotification ] = useState([])
  const [dataProfile, SetDataProfile] = useState('')

  
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

  const getDataProfile = () => {
    if(!dataProfile){
      dispatch(dataProfileUser())
        .then( data => {
          SetDataProfile(data)
        })
    }
  }

  useEffect(() => {
    dapetinSaldo()
  }, [dispatch])

  useEffect(() => {
    dapetinNotification()
  }, [dispatch])

  useEffect(() => {
    getDataProfile()
  }, [])

  return(
    <>
      <div id="general-header">
        <div className="main-header-one">
          <Container>
            <Row>
              <Col xs={6} sm={6} md={3} lg={3}>
              <Link to = {`/${role}`}>
              <div style={{width:'100%', display:'flex', alignItems:'center', backgroundColor:'', height:'80px'}}>
                <img src="../../../../images/logo three.png" style={{height:'50px',marginRight:'5px' }}></img>
                <h3 className="m-t-0 m-b-0 color-blue"><strong>Survplus</strong></h3>
              </div>
              </Link>
              </Col>

              {/* <Col xs={6} sm={6} md={4} lg={4}>
                
              </Col> */}
                
                
                

              
                <Col xs={6} sm={6} md={9} lg={9} className="part-two">
                {/* <div style={{width:'100%', height:'80px', display:'flex', backgroundColor:''}}>
                  <div style={{width:'80%', display:'flex', justifyContent:'space-around', alignItems:'center', backgroundColor:''}}>
                    <Link to ='/'>
                    <h6>Beranda</h6>
                    </Link>

                    <Link to ='#'>
                    <h6>Tentang Kami</h6>
                    </Link>

                    <Link to ='#'>
                      <h6>Surveyor</h6>
                    </Link>

                    <Link to ='#'>
                      <h6>Responden</h6>
                    </Link>

                    <Link to ='/syaratdanketentuan'>
                      <h6>Syarat & Ketentuan</h6>
                    </Link>
                  </div>

                  <div style={{width:'20%', display:'flex', justifyContent:'space-around', alignItems:'center', backgroundColor:''}}>
                  <DropdownButton size="md"
                      alignRight
                      title="DAFTAR"
                      id="dropdown-menu-align-right"
                     
                    >
                      <Dropdown.Item eventKey="2"><Link to ='/surveyor/register'>Daftar Surveyor</Link></Dropdown.Item>
                      <Dropdown.Item eventKey="3"><Link to ='/register'>Daftar Responden</Link></Dropdown.Item>
                  </DropdownButton>
                  
                  <Link to ='/login'>
                    <Button Button variant="primary" size="md">LOGIN</Button>
                  </Link>
                  </div>
                  

                  
                </div> */}
                {
                role && namaUser &&
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
                              <img src={ dataProfile && dataProfile.foto_profile ? `http://149.129.240.254:8889/profile/${dataProfile.foto_profile}`:"../../../../images/user_profil.png"} style={{height:'60px', width:'60px', borderRadius:'100%'}}></img>
                            </div>
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
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
                              <img src={ dataProfile && dataProfile.foto_profile ? `http://149.129.240.254:8889/profile/${dataProfile.foto_profile}`:"../../../../images/user_profil.png"} style={{height:'35px', width:'35px', borderRadius:'100%'}}></img>
                              </Dropdown.Toggle>

                              <Dropdown.Menu>
                                <Dropdown.Item>
                                    <p style={{textAlign:'right'}}><strong>Hi, {namaUser} </strong></p>
                                    <p style={{textAlign:'right'}}>Saldo Anda : <NumberFormat value={saldoUser.saldo} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp'} /> ,-</p>
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item onClick = { (e) => { 
                                    e.preventDefault()
                                    processLogout() }} >Logout
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                        </div>
                      </div>
                    </div>
                  </div>
                }
                </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}