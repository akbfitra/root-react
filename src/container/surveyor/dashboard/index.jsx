import React from 'react';
import { withRouter, Link } from 'react-router-dom'

import './css/style.css';
import { Container, Row, Col} from 'react-bootstrap'

import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'

const SurveyorDashboard = (props) => {

  return(
    <>
      <Navbar/>

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

     <Footer/>
    </>
  )
}

export default withRouter(SurveyorDashboard)