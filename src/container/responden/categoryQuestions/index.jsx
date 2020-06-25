import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, useHistory, useLocation, Link } from 'react-router-dom'

import './css/style.css';
import {Container, Row, Col, Button, Form} from 'react-bootstrap'

import { logoutProcess } from '../../../store/actions/userAction'

import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'


const CategoryQuestions = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const processLogout = () => {
    dispatch(logoutProcess(history, location))
  }

  return(
    <>
      <Navbar/>
      <div id="pertanyaan-responden">
      <Container>
      <Row>
          <Col md={{ span: 8, offset:2}} lg={{ span: 8, offset:2}}>
            <h3 className="title-one text-center"><strong>Question Responden</strong></h3>
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <Link to='/responden' style={{textDecoration:"none"}}>
                  <h4 className="title-three">Dashboard Responden</h4>
                  </Link>
                </li>

                <li className="list-inline-item">|</li>

                <li className="list-inline-item">
                  <Link to='/responden/aboutus' style={{textDecoration:"none"}}>
                  <h4 className="title-three">About Responden</h4>
                  </Link>
                </li>

                <li className="list-inline-item">|</li>

                <li className="list-inline-item">
                  <h4 className="title-three">Edit Profile Responden</h4>
                </li>
              </ul>
          </Col>
        </Row>

        <Row className="m-t-30">
          <Col md={12} lg={12}>
            <div className="container-pertanyaan">
              <Row>
                <Col md={12} lg={12}>
                  <div className="box-pertanyaan">
                    <div className="left"><h5>1.</h5></div>
                    <div className="right"><h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, necessitatibus asperiores omnis laudantium voluptas doloribus eius alias modi ex maiores quis mollitia, tempora commodi officiis voluptatibus esse repellendus dignissimos optio?</h5></div>
                  </div>
                </Col>

                <Col md={12} lg={12} className="m-t-10">
                  <div className="box-answer">
                    <div className="left"></div>
                    <div className="right">
                    <Button variant="outline-dark">A. Lorem ipsum dolor sit amet consectetur adipisicing elit</Button>
                    </div>
                  </div>
                </Col>

                <Col md={12} lg={12} className="m-t-10">
                  <div className="box-answer">
                    <div className="left"></div>
                    <div className="right">
                    <Button variant="outline-dark">B. Lorem ipsum dolor sit amet consectetur adipisicing elit</Button>
                    </div>
                  </div>
                </Col>

                <Col md={12} lg={12} className="m-t-10">
                  <div className="box-answer">
                    <div className="left"></div>
                    <div className="right">
                    <Button variant="outline-dark">C. Lorem ipsum dolor sit amet consectetur adipisicing elit</Button>
                    </div>
                  </div>
                </Col>
              </Row>

              <Row className="m-t-30">
                <Col md={12} lg={12}>
                  <div className="box-pertanyaan">
                    <div className="left"><h5>2.</h5></div>
                    <div className="right"><h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, necessitatibus asperiores omnis laudantium voluptas doloribus eius alias modi ex maiores quis mollitia, tempora commodi officiis voluptatibus esse repellendus dignissimos optio?</h5></div>
                  </div>
                </Col>

                <Col md={12} lg={12} className="m-t-10">
                  <div className="box-answer">
                    <div className="left"></div>
                    <div className="right">
                    <Button variant="outline-dark">A. Lorem ipsum dolor sit amet consectetur adipisicing elit</Button>
                    </div>
                  </div>
                </Col>

                <Col md={12} lg={12} className="m-t-10">
                  <div className="box-answer">
                    <div className="left"></div>
                    <div className="right">
                    <Button variant="outline-dark">B. Lorem ipsum dolor sit amet consectetur adipisicing elit</Button>
                    </div>
                  </div>
                </Col>

                <Col md={12} lg={12} className="m-t-10">
                  <div className="box-answer">
                    <div className="left"></div>
                    <div className="right">
                    <Button variant="outline-dark">C. Lorem ipsum dolor sit amet consectetur adipisicing elit</Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          
        </Row>
      </Container>
      </div>
      <Footer/>
    </>
  )
}

export default withRouter(CategoryQuestions)