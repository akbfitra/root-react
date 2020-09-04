import React from 'react';
import './css/style.css';
import { Col, Container, Row } from 'react-bootstrap'

export const Footer = () => {
  
  return(
    <>
      <div id="main-footer-one">
        <Container>
          <Row>
            <Col md={{ span: 8, offset:2}} lg={{ span: 8, offset:2}}>
              <div className="part-one">
                <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                  <img src="../../../../images/logo_white.png" style={{width:'60px', marginRight:'10px'}}></img>
                  <h4 className="title-one" ><strong>Survplus</strong></h4>
                </div>
              <h5 className="text-center m-t-5">PLUS Datanya, PLUS Manfaatnya</h5>
              <p className="text-center m-t-15">Wisma Iskandarsyah Blok A-10,<br/>Jl. Iskandarsyah Raya Kav. 12 - 14, Kel. Melawai, Kebayoran Baru, Jakarta Selatan</p>
              <ul className="list-inline m-t-15 text-center">
                  <li className="list-inline-item ">
                    <a href="https://www.facebook.com/Survplusid-106127347885805" target="_blank"> 
                    <img src="../../../../images/facebook.png" style={{width:'50px'}}></img>
                    </a>
                    
                  </li>
                  <li className="list-inline-item">
                    <a href="https://twitter.com/survplus" target="_blank">
                    <img src="../../../../images/twitter.png" style={{width:'50px'}}></img>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.instagram.com/survplus.id/" target="_blank">
                    <img src="../../../../images/instagram.png" style={{width:'50px'}}></img>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.youtube.com/channel/UCgoS1AWjifIoLYvYLou-KSg/?guided_help_flow=5" target="_blank">
                    <img src="../../../../images/youtube.png" style={{width:'50px'}}></img>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          {/* <Row>
            <Col md={4} lg={4} className="part-one">
              <Row>
                <Col md={12} lg={12}><h3 className="title-one"><strong>suRvplus</strong></h3></Col>
              </Row>

              <Row className="m-t-15">
                <Col md={12} lg={12}>
                  <p>Wisma Iskandarsyah Blok A-10, Jl. Iskandarsyah Raya Kav. 12 - 14, Kel. Melawai, Kebayoran Baru,<br/>Jakarta Selatan <br/>DKI Jakarta</p>
                </Col>
              </Row>

              <Row>
                <Col md={12} lg={12}>
                <ul className="list-inline m-t-15">
                  <li className="list-inline-item">
                    <img src="../../../../images/facebook.png" style={{width:'50px'}}></img>
                  </li>
                  <li className="list-inline-item">
                    <img src="../../../../images/twitter.png" style={{width:'50px'}}></img>
                  </li>
                  <li className="list-inline-item">
                    <img src="../../../../images/instagram.png" style={{width:'50px'}}></img>
                  </li>
                </ul>
                </Col>
              </Row>
            </Col>
          </Row> */}
        </Container>
      </div>
      <div id="main-footer-two">
        <Container>
          <Row>
            <Col md={12} lg={12}><h4 className="text-center title-three">Copyright © 2020 Survplus.id  </h4></Col>
          </Row>
        </Container>
      </div>
    </>
  )
}