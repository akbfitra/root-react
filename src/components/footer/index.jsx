import React from 'react';
import './css/style.css';
import { Col, Container, Row } from 'react-bootstrap'

export const Footer = () => {
  
  return(
    <>
      <div id="main-footer-one">
        <Container>
          <Row>
            <Col md={4} lg={4} className="part-one">
              <Row>
                <Col md={12} lg={12}><h3 className="title-one"><strong>suRvplus</strong></h3></Col>
              </Row>

              <Row className="m-t-15">
                <Col md={12} lg={12}>
                  <p>Jl. Sawunggaling 2 No. 6a, Kelurahan Pedalangan, Kecamatan Banyumanik, Kota Semarang</p>
                  <p>Jawa Tengah 50268</p>
                </Col>
              </Row>

              <Row>
                <Col md={12} lg={12}>
                <ul className="list-inline m-t-15">
                  <li className="list-inline-item">
                    <img src="../../images/facebook.png" style={{width:'50px'}}></img>
                  </li>
                  <li className="list-inline-item">
                    <img src="../../images/twitter.png" style={{width:'50px'}}></img>
                  </li>
                  <li className="list-inline-item">
                    <img src="../../images/instagram.png" style={{width:'50px'}}></img>
                  </li>
                </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="main-footer-two">
        <Container>
          <Row>
            <Col md={12} lg={12}><h4 className="text-center title-three">Copyright © 2020 suRvplus  </h4></Col>
          </Row>
        </Container>
      </div>
    </>
  )
}