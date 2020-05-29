import React from 'react';

import { withRouter, Link } from 'react-router-dom'

import './css/style.css';
import { Container, Row, Col} from 'react-bootstrap'

import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'

const SubmissionResponden = (props) => {
  return(
    <>
    <Navbar/>

      <div id="submission-responden">
      <Container>
        <Row>
          <Col md={{ span: 8, offset:2}} lg={{ span: 8, offset:2}}>
            <h3 className="title-one text-center"><strong>Submission Responden</strong></h3>
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <Link to='/responden' style={{textDecoration:"none"}}>
                  <h4 className="title-three">Dashboard Responden</h4>
                  </Link>
                </li>

                <li className="list-inline-item">|</li>

                <li className="list-inline-item">
                <h4 className="title-three">Submission Responden</h4>
                </li>
              </ul>
          </Col>
        </Row>
        <Row className="m-t-30">
          <Col  >
            <div className="part-one">
              <Row>
                <Col md={10} lg={10}>
                  <div className="table-100">
                    <div className="table-row">
                      <div className="table-cell-one  p-r-30">
                        <h4 className="m-t-0 m-b-0 title-two"><strong>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat</strong></h4>
                        <h4 className="m-t-5 m-b-0 title-three">PT. Maju Jaya Makmur Mandiri</h4>
                        <h4 className="m-t-5 m-b-0 title-three">6 hari yang lalu</h4>
                      </div>
                    </div>
                  </div>
                </Col>


                <Col md={2} lg={2}>
                  <div className="table-100">
                    <div className="table-row">
                      <div className="table-cell-two">
                          <h4 className="title-two text-center"><strong>Rp 90.000,-</strong></h4>
                      </div>
                    </div>
                  </div>
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

export default withRouter(SubmissionResponden)