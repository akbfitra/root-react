import React from 'react';
import { withRouter, Link } from 'react-router-dom'

import './css/style.css';
import { Button, Modal, Tabs, Tab, Container, Row, Col, Nav, Form, Table} from 'react-bootstrap'

const SurveyorDashboard = (props) => {

  return(
    <>
      <div id="general-header">
        <div className="main-header-one">
          <Container>
            <Row>
              <Col md={8} lg={8} className="part-one">
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

      <div id="dashboard-surveyor">
      <Container>
        <Row>
          <Col>
            <h3 className="title-one text-center"><strong>Dashboard Surveyor</strong></h3>
          </Col>
        </Row>
        <Row className="m-t-30">
          <Col md={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }}>
            <Row>
            <Col md={4} lg={4}>
              <Link to = '/surveyor/profile' style={{textDecoration:"none"}}>
              <div className="part-one">
                <center>
                <img src="images/profile.png"/>
                <h4 className="title-two m-t-15"><strong>Profile</strong></h4>
                </center>
              </div>
              </Link>
            </Col>

            <Col md={4} lg={4}>
              <Link to = '/surveyor/form' style={{textDecoration:"none"}}>
              <div className="part-one">
                <center>
                <img src="https://via.placeholder.com/140" className="img-responsive"/>
                <h4 className="title-two m-t-15"><strong>Form</strong></h4>
                </center>
              </div>
              </Link>
            </Col>

            <Col md={4} lg={4}>
              <Link to = '/surveyor/topup' style={{textDecoration:"none"}}>
              <div className="part-one">
                <center>
                <img src="https://via.placeholder.com/140" className="img-responsive"/>
                <h4 className="title-two m-t-15"><strong>Top Up</strong></h4>
                </center>
              </div>
              </Link>
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

export default withRouter(SurveyorDashboard)