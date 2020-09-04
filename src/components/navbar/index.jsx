import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie'
import './css/style.css';
import { useDispatch } from 'react-redux';
import NumberFormat from 'react-number-format';
import { Col, Container, Row, Button, Dropdown, DropdownButton, Nav, NavDropdown, ButtonGroup,NavLink, Modal, Table } from 'react-bootstrap'
import { useHistory, useLocation, Link  } from 'react-router-dom';

import { logoutProcess, GET_SALDO, GET_DATA_NOTIFICATION, dataProfileUser } from '../../store/actions/userAction'
import { GET_DATA_TANGGUNGAN_SURVEYOR } from '../../store/actions/surveyFormAction'

export const Navbar = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const [ saldoUser, setSaldoUser ] = useState([])
  const [ notification, setNotification ] = useState([])
  const [dataProfile, SetDataProfile] = useState('')
  const [ dataTanggunganSurveyor, setDataTanggunganSurveyor ] = useState('')

  
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

  console.log(dataTanggunganSurveyor)

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

  const setDataTanggunganYangBelomDijalankan = () => {
    dispatch(GET_DATA_TANGGUNGAN_SURVEYOR())
      .then( data => {
        setDataTanggunganSurveyor(data)
      })
  }

  useEffect(() => {
    setDataTanggunganYangBelomDijalankan()
  }, [])

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
      <div id="general-header" style={{position:'sticky', top:'0', zIndex:'1'}} className="d-none d-none d-xl-block d-none d-lg-block d-xl-none d-none d-md-block d-lg-none">
        <div className="main-header-one">
          <Container>
            <Row>
              <Col md={3} lg={3}>
                <Link to = {`/${role}`}>
                <div style={{width:'100%', display:'flex', alignItems:'center', backgroundColor:'', height:'65px'}}>
                  <img src="../../../../images/logo three.png" style={{height:'50px',marginRight:'5px' }}></img>
                  <h3 className="m-t-0 m-b-0 color-blue"><strong>Survplus</strong></h3>
                  
                </div>
                </Link>
              </Col>


              <Col md={9} lg={9}>
                {
                  !role && !namaUser &&
                  
                  <div style={{width:'100%', height:'65px', display:'flex', backgroundColor:''}}>
                    <div style={{width:'80%', display:'flex', justifyContent:'space-around', alignItems:'center', backgroundColor:''}}>
                      <Link to ='/'>
                      <h6>Beranda</h6>
                      </Link>

                      <Link to ='/tentangkami'>
                      <h6>Tentang Kami</h6>
                      </Link>

                      <Link to ='/tentangsurveyor'>
                        <h6>Surveyor</h6>
                      </Link>

                      <Link to ='/tentangresponden'>
                        <h6>Responden</h6>
                      </Link>

                      <Link to ='/syaratdanketentuan'>
                        <h6>Syarat & Ketentuan</h6>
                      </Link>

                      <Link to ='/kontakkami'>
                        <h6>Kontak Kami</h6>
                      </Link>
                    </div>

                    <div style={{width:'20%', display:'flex', justifyContent:'space-around', alignItems:'center', backgroundColor:''}}>
                    <DropdownButton size="md"
                        alignRight
                        title="Daftar"
                        id="dropdown-menu-align-right"
                      
                      >
                        <Dropdown.Item eventKey="2"><Link to ='/surveyor/register'>Daftar Surveyor</Link></Dropdown.Item>
                        <Dropdown.Item eventKey="3"><Link to ='/register'>Daftar Responden</Link></Dropdown.Item>
                    </DropdownButton>
                    
                    <Link to ='/login'>
                      <Button Button variant="primary" size="md">Login</Button>
                    </Link>


                    
                    </div>
                  </div>
                }

                {
                role && namaUser &&
                <div style={{width:'100%', display:'flex', justifyContent:'flex-end', alignItems:'center', backgroundColor:''}}>
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
                                            <>
                                                <Dropdown.Item key={`${i}`}>
                                                  <Link to = {`/${role}/notification`}><span  dangerouslySetInnerHTML={{__html: data.content}}></span></Link>
                                                </Dropdown.Item>
                                                <Dropdown.Divider/>
                                          </>
                                            
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

{
                            dataTanggunganSurveyor && role === 'surveyor' &&
                                  <Dropdown alignRight size="sm" style={{marginRight:'15px'}}>
                                  <Dropdown.Toggle variant="danger" id="dropdown-basic">
                                  <p style={{textAlign:'right'}}>Saldo Terikat :<NumberFormat value={dataTanggunganSurveyor.total} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp'} />,-</p>
                                    
                                  </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                      {
                                        dataTanggunganSurveyor &&
                                        dataTanggunganSurveyor.listProject.map((data, i) => {
                                          return(
                                            <>
                                                <Dropdown.Item key={`${i}`}>
                                                  <p>
                                                    Study : { data.namaStudi}
                                                  </p> 
                                                  <p>
                                                    Total Biaya : { data.total}
                                                  </p>
                                                  {/* <Link to = {`/${role}/notification`}><span  dangerouslySetInnerHTML={{__html: data.content}}></span></Link> */}
                                                </Dropdown.Item>
                                                {/* <Dropdown.Divider/> */}
                                            </>
                                            
                                          )
                                        })
                                      }
                                    </Dropdown.Menu>
                                  </Dropdown>
                                
                            
                            }
                        <Dropdown alignRight >
                          <Dropdown.Toggle variant="default" id="dropdown-basic" style={{paddingRight:'0',paddingLeft:'0'}}>
                            <div style={{display:"flex", alignItems:'center'}}>
                              {/* <div style={{width:'100px',height:'20px',backgroundColor:'red'}}></div> */}
                              <div style={{display:'flex', flexDirection:'column',paddingRight:'10px' }}>
                              <p style={{textAlign:'right'}}><strong>Hi, {namaUser}</strong></p>
                              <p style={{textAlign:'right'}}>Saldo Anda : <NumberFormat value={saldoUser.saldo - dataTanggunganSurveyor.total} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp'} />,-</p>
                              </div>
                              <img src={ dataProfile && dataProfile.foto_profile ? `http://149.129.240.254:8889/profile/${dataProfile.foto_profile}`:"../../../../images/user_profil.png"} style={{height:'50px', width:'50px', borderRadius:'100%'}}></img>
                            </div>
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item onClick = { (e) => { 
                                e.preventDefault()
                                processLogout() }} >Logout</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>

                        
                </div>
                }
              </Col>
            </Row>
          </Container>
        </div>
      </div>


      <div id="general-header-mobile" style={{position:'sticky', top:'0', zIndex:'1'}} className="d-none d-none d-sm-block d-md-none d-block d-sm-none">
      <Container style={{position:'relative'}}>
      {
        !role && !namaUser &&
        <Row>
          <Col xs={12} sm={12} >
            <div style={{width:'100%', display:'table', position:'relative'}}>
              <div style={{display:'table-row'}}>
                <div style={{display:'table-cell', verticalAlign:'middle',height:'65px', backgroundColor:'' }}>
                <Dropdown>
                <Dropdown.Toggle variant="link" id="dropdown-basic">
                <img src="../../../../images/menu.png" style={{height:'35px'}}></img>
                </Dropdown.Toggle>

                <Dropdown.Menu style={{width:'100%'}}>
                  <Dropdown.Item href="/">Beranda</Dropdown.Item>
                  <Dropdown.Item href="/tentangkami">Tentang Kami</Dropdown.Item>
                  <Dropdown.Item href="/tentangsurveyor">Surveyor</Dropdown.Item>
                  <Dropdown.Item href="/tentangresponden">Responden</Dropdown.Item>
                  <Dropdown.Item href="/syaratdanketentuan">Syarat & Ketentuan</Dropdown.Item>
                  <Dropdown.Item href="/kontakkami">Kontak Kami</Dropdown.Item>
                  <Dropdown.Item href="/surveyor/register">Daftar Surveyor</Dropdown.Item>
                  <Dropdown.Item href="/register">Daftar Responden</Dropdown.Item>
                  <Dropdown.Item href="/login">Login</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                </div>
              </div>

              <div style={{position:'absolute', top:'0', bottom:'0', left:'60px', margin:'auto'}}>
                <div style={{width:'100%', display:'flex', alignItems:'center', backgroundColor:'', height:'65px'}}>
                  <img src="../../../../images/logo three.png" style={{height:'40px',marginRight:'5px' }}></img>
                  <h3 className="m-t-0 m-b-0 color-blue"><strong>Survplus</strong></h3>
                </div>
              </div>
            
            </div>
              
          </Col>
        </Row>
      }

      
      {
         role && namaUser &&
         
        <Row>
          <Col xs={6} sm={6}>
          <div style={{width:'100%', display:'flex', alignItems:'center', backgroundColor:'', height:'65px'}}>
            <img src="../../../../images/logo three.png" style={{height:'50px',marginRight:'5px' }}></img>
            <h3 className="m-t-0 m-b-0 color-blue"><strong>Survplus</strong></h3>
          </div>
          </Col>
          <Col xs={6} sm={6}>
          <div style={{width:'100%', display:'flex', justifyContent:'flex-end', alignItems:'center', backgroundColor:'', height:'65px'}}>
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
                                            <>
                                                <Dropdown.Item key={`${i}`}>
                                                  <Link to = {`/${role}/notification`}><span  dangerouslySetInnerHTML={{__html: data.content}}></span></Link>
                                                </Dropdown.Item>
                                                <Dropdown.Divider/>
                                          </>
                                            
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
                              <Dropdown.Toggle  variant="link" id="dropdown-basic">
                              <img src={ dataProfile && dataProfile.foto_profile ? `http://149.129.240.254:8889/profile/${dataProfile.foto_profile}`:"../../../../images/user_profil.png"} style={{height:'35px', width:'35px', borderRadius:'100%'}}></img>
                              </Dropdown.Toggle>

                              <Dropdown.Menu>
                                  <Dropdown.Item>
                                      <p style={{textAlign:'right'}}><strong>Hi, {namaUser} </strong></p>
                                      <p style={{textAlign:'right'}}>Saldo Aktif : <NumberFormat value={saldoUser.saldo} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp'} /> ,-</p>
                                      
                                  </Dropdown.Item>
                                  <Dropdown.Divider />
                                  <Dropdown.Item><span onClick={handleShow}><p style={{textAlign:'right'}}>Saldo Terikat : <NumberFormat value={dataTanggunganSurveyor.total} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp'} />,-</p></span></Dropdown.Item>
                                  
                                  <Dropdown.Divider />
                                  <Dropdown.Item onClick = { (e) => { 
                                      e.preventDefault()
                                      processLogout() }} >Logout
                                  </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
          </div>
          </Col>
        </Row>
      }
      </Container>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Saldo Terikat</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Table bordered striped  size="sm" className="m-b-0">
                  <tbody>
                  {
                                        dataTanggunganSurveyor &&
                                        dataTanggunganSurveyor.listProject.map((data, i) => {
                                          return(
                                            <>
                                            <tr key={`${i}`}>
                                              <td>
                                                   <p>
                                                    Study : { data.namaStudi}
                                                  </p> 
                                                  <p>
                                                    Total Biaya : { data.total}
                                                  </p>
                                              </td>
                                            </tr>
                                               
                                                {/* <Dropdown.Divider/> */}
                                            </>
                                            
                                          )
                                        })
                                      }
                    
                    
                  </tbody>
                </Table>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}