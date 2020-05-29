import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { withRouter, useHistory, useLocation, Link } from 'react-router-dom'

import { loginProcess } from '../../../store/actions/userAction'

import './css/style.css';
import { Button, Container, Row, Col, Form} from 'react-bootstrap';

const Login = (props) => {
  const dispatch = useDispatch()
  const [ email, setEmail] = useState('')
  const [ password, setPassword] = useState('') 

  const history = useHistory()
  const location = useLocation()

  const processLogin = () => {
    dispatch(loginProcess(email, password, history, location))
  }

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
                    <Button variant="primary" className="float-right">LOGIN</Button>{' '}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div id="login">
      <Container>
        <Row>
          <Col md={6} lg={6} className="part-one">
            <img src="images/decor7.png"/>
          </Col>


          <Col md={6} lg={6} className="part-two">
            <Row>
              <Col>
                <div className="table-100">
                  <div className="table-row">
                    <div className="table-cell-one">
                    <Row>
                      <Col><h3 className="title-one"><strong>Login</strong></h3></Col>
                    </Row>

                    <Row className="m-t-30">
                      <Col md={8} lg={8}>
                      <Form onSubmit={(e) => {
                          e.preventDefault()
                          processLogin()
                        }}>
                        <Form.Group >
                          <Form.Label>Username</Form.Label>
                          <Form.Control type="text" placeholder="Username" onChange={ (e) => {setEmail( e.target.value )}}/>
                        </Form.Group>

                        <Form.Group>
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" onChange={ (e) => {setPassword( e.target.value )}}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                          Login
                        </Button>
                      </Form>
                      </Col>
                    </Row>
                    
                    <Row className="m-t-30">
                      <Col md={10} lg={10}>
                      <h4 className="title-three m-b-5"><strong>Lupa Password ?</strong></h4>
                      <h4 className="title-three"><strong>Belum terdaftar ? <Link to = '/register' style={{textDecoration:"none"}}>Daftar Responden</Link>, <Link to = '/surveyor/register' style={{textDecoration:"none"}}>Daftar Surveyor</Link></strong></h4>
                      </Col>
                    </Row>
                    </div>
                  </div>
                </div>
              
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      </div>

      <div id="main-footer-one">
        <Container>
          <Row>
            <Col md={4} lg={4} className="part-one">
              <Row>
                <Col><h3 className="title-one"><strong>suRvplus</strong></h3></Col>
              </Row>

              <Row className="m-t-30">
                <Col><p>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat.</p></Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="main-footer-two">
        <Container>
          <Row>
            <Col><h4 className="text-center title-three">Copyright © 2020 suRvplus  </h4></Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default withRouter(Login)