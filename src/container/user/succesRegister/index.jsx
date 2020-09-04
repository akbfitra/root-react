import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, useHistory, useLocation, Link } from 'react-router-dom'

import './css/style.css';
import {  Container, Row, Col, Form, Button} from 'react-bootstrap'
import { logoutProcess } from '../../../store/actions/userAction'
import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'

const SuccessRegister = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const processLogout = () => {
    dispatch(logoutProcess(history, location))
  }

  return(
    <>
      <div id="general-header" style={{position:'sticky', top:'0', zIndex:'1'}}>
        <div className="main-header-one">
          <Container>
            <Row>
              <Col md={3} lg={3} >
                <Link to = '/'>
                <div style={{width:'100%', display:'flex', alignItems:'center', backgroundColor:'', height:'65px'}}>
                  <img src="../../../../images/logo three.png" style={{height:'40px',marginRight:'5px' }}></img>
                  <h3 className="m-t-0 m-b-0 color-blue"><strong>Survplus</strong></h3>
                  
                </div>
                </Link>
              </Col>
              {/* <Col md={4} lg={4} className="part-two">
                <div className="table-100">
                  <div className="table-row">
                    <div className="table-cell-one">
                    <Button variant="primary" className="float-right">LOGIN</Button>{' '}
                    </div>
                  </div>
                </div>
              </Col> */}
            </Row>
          </Container>
        </div>
      </div>

        <div id="success-register">
          <Container>
            <Row>
              <Col md={{ span: 10, offset:1}} lg={{ span: 10, offset:1}} >
                <div className="part-one">
                  <Row>
                    <Col md={12} lg={12}>
                      <h3 className="text-center" style={{color:'#1f59bb'}}>Terima kasih anda telah mendaftar menjadi Responden/Surveyor Pada Survplus.id</h3>
                      <hr/>
                      <h4 className="text-center" style={{fontSize:'20px'}}>Silahkan cek email anda,<br/>kami telah mengirimkan email aktivasi akun kepada Anda</h4>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      <Footer/>
    </>
  )
}

export default withRouter(SuccessRegister)