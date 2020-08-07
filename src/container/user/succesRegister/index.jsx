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
      <Navbar/>
        <div id="success-register">
          <Container>
            <Row>
              <Col md={{ span: 8, offset:2}} lg={{ span: 8, offset:2}} >
                <div className="part-one">
                  <Row>
                    <Col md={12} lg={12}>
                      <h3 className="text-center" style={{color:'#1f59bb'}}>Terima kasih anda telah mendaftar menjadi Responden/Surveyor Pada SuRvplus.id</h3>
                      <br/>
                      <h4 className="text-center" style={{fontSize:'20px'}}>Silahkan cek email anda, kami telah mengirimkan email verifikasi kepada Ana</h4>
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