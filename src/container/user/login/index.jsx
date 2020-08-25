import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { withRouter, useHistory, useLocation, Link } from 'react-router-dom'


import { loginProcess } from '../../../store/actions/userAction'

import './css/style.css';
import { Button, Container, Row, Col, Form, Alert} from 'react-bootstrap';

import { Footer } from '../../../components/footer'

const Login = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()
  const [ email, setEmail] = useState('')
  const [ password, setPassword] = useState('') 

  const [ errs, setErrs] = useState('') 
  const [show, setShow] = useState(false);


  const processLogin = () => {
    dispatch(loginProcess(email, password, history, location))
      .then(data => {
        
      })
      .catch(err => {
        setErrs(err)
        setShow(true)
      })
  }

  // if(errs){
  //   setShow(true)
  // } else {
  //   setShow(false)
  // }

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

      <div id="login">
      <Container>
        <Row>
          <Col md={6} lg={6} className="part-one">
            <img src="images/login.svg" style={{height:'400px'}}/>
          </Col>


          <Col md={6} lg={6} className="part-two">
            <Row>
              <Col md={12} lg={12}>
                <div className="table-100">
                  <div className="table-row">
                    <div className="table-cell-one">
                    <Row>
                      <Col><h3 className="title-one"><strong>Login</strong></h3></Col>
                    </Row>

                    <>
                      <Alert show={show} variant="danger" onClose={() => setShow(false)} dismissible>
                        <Alert.Heading>Error?!</Alert.Heading>
                        <p>
                          { errs }
                        </p>
                      </Alert>
                    </>

                    <Row className="m-t-30">
                      <Col md={12} lg={12}>
                      <Form onSubmit={(e) => {
                          e.preventDefault()
                          processLogin()
                        }}>
                        <Form.Group >
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="text" required placeholder="Email" onChange={ (e) => {setEmail( e.target.value )}}/>
                        </Form.Group>

                        <Form.Group>
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" required placeholder="Password" onChange={ (e) => {setPassword( e.target.value )}}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                          Login
                        </Button>
                      </Form>
                      </Col>
                    </Row>
                    
                    <Row className="m-t-30">
                      <Col md={10} lg={10}>
                      <h4 className="title-three m-b-5"><strong><Link to='/forgotpassword'>Lupa Password ?</Link></strong></h4>
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

      <Footer/>
    </>
  )
}

export default withRouter(Login)