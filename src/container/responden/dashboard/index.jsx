import React from 'react';
import { withRouter, Link } from 'react-router-dom'

import './css/style.css';
import { Container, Row, Col} from 'react-bootstrap'

import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'

const RespondenDashboard = (props) => {

  return(
    <>
      <Navbar/>

      <div id="dashboard-responden">
      <Container>
        <Row>
          <Col md={12} lg={12}>
            <h3 className="title-one text-center"><strong>Responden</strong></h3>
          </Col>
        </Row>
        <Row className="m-t-30">
          <Col md={3} lg={3}>
            <Link to = '/responden/profile' style={{textDecoration:"none"}}>
            <div className="part-one">
              <center>
              <img src="images/profile.png"/>
              <h4 className="title-two m-t-15"><strong>Profil</strong></h4>
              </center>
            </div>
            </Link>
          </Col>

          <Col md={3} lg={3}>
            <Link to = '/responden/aboutus' style={{textDecoration:"none"}}>
            <div className="part-one">
              <center>
              <img src="images/aboutus.png"/>
              <h4 className="title-two m-t-15"><strong>Tentang</strong></h4>
              </center>
            </div>
            </Link>
          </Col>

          <Col md={3} lg={3}>
            <Link to = '/responden/submission' style={{textDecoration:"none"}}>
            <div className="part-one">
              <center>
              <img src="images/submission.png"/>
              <h4 className="title-two m-t-15"><strong>Survey</strong></h4>
              </center>
            </div>
            </Link>
          </Col>

          <Col md={3} lg={3}>
            <Link to = '/responden/ticket' style={{textDecoration:"none"}}>
            <div className="part-one">
              <center>
              <img src="images/help.png"/>
              <h4 className="title-two m-t-15"><strong>Bantuan</strong></h4>
              </center>
            </div>
            </Link>
          </Col>
        </Row>
      </Container>
      </div>

      <Footer/>
    </>
  )
}

export default withRouter(RespondenDashboard)