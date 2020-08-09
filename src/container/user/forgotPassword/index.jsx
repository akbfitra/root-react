import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, useHistory, useLocation, Link } from 'react-router-dom'

import './css/style.css';
import {  Container, Row, Col, Form, Button} from 'react-bootstrap'
import { logoutProcess } from '../../../store/actions/userAction'
import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'

const LupaPassword = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const processLogout = () => {
    dispatch(logoutProcess(history, location))
  }


  console.log('aaaaaaaaaaaaaa')
  return(
    <>
        <div id="general-header">
        <div className="main-header-one">
          <Container>
            <Row>
              <Col md={8} lg={8} className="part-one">
                <Link to='/'>
                  <div className="table-100">
                    <div className="table-row">
                      <div className="table-cell-one">
                        <img src="images/logo three.png" style={{height:'60px'}}></img>
                      </div>

                      <div className="table-cell-two">
                        <h3 className="m-t-0 m-b-0"><strong>suRvplus</strong></h3>
                      </div>
                    </div>
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
                  <p className="text-center">Masukkan email Anda dan kami akan mengirimi Anda<br/>sebuah tautan untuk kembali ke akun Anda.</p>
                  </Col>
                </Row>

                <Row>
                  <Col md={{span:6, offset:3}} lg={{span:6, offset:3}}>
                    <Form>
                      <Form.Group>
                        <Form.Label></Form.Label>
                        <Form.Control 
                          type="text" 
                          placeholder="Masukkan email anda"
                          />
                      </Form.Group>
                    </Form>
                  </Col>
                </Row>


                <Row>
                  <Col md={{span:6, offset:3}} lg={{span:6, offset:3}}>
                  <Button variant="primary" block>Kirim</Button>
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

export default withRouter(LupaPassword)