import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, useHistory, useLocation, Link } from 'react-router-dom'

import './css/style.css';
import {  Container, Row, Col, Form, Button} from 'react-bootstrap'
import { FORGOT_PASSWORD } from '../../../store/actions/userAction'
import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'


const LupaPassword = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()
  const [ email, setEmail ] = useState('')

  // const processLogout = () => {
  //   dispatch(logoutProcess(history, location))
  // }


  const postForgotPassword = (e) => {
    e.preventDefault()
    dispatch(FORGOT_PASSWORD(email, history))
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
      
        <div id="forgot-password">
          <Container>
            <Row>
              <Col md={{ span: 8, offset:2}} lg={{ span: 8, offset:2}} >
                <div className="part-one">
                <Row>
                  <Col md={12} lg={12}>
                    <h3 className="title-one text-center"><strong>Lupa Password</strong></h3>
                    <hr className=""/>
                  </Col>
                </Row>


                <Row>
                  <Col md={12} lg={12}>
                  <p className="text-center">Masukkan email Anda dan kami akan mengirimkan password baru ke email Anda.</p>
                  </Col>
                </Row>

                  <Form onSubmit= { postForgotPassword }>
                    <Row>
                      <Col md={{span:6, offset:3}} lg={{span:6, offset:3}}>
                          <Form.Group>
                            <Form.Label></Form.Label>
                            <Form.Control 
                              type="text" 
                              placeholder="Masukkan email anda"
                              onChange = { (e) => { setEmail(e.target.value) }}
                              required
                              />
                          </Form.Group>
                      </Col>
                    </Row>


                    <Row>
                      <Col md={{span:6, offset:3}} lg={{span:6, offset:3}}>
                      <Button type='submit' variant="primary" block  >Kirim</Button>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      <Footer/>
    </>
  )
}

export default withRouter(LupaPassword)