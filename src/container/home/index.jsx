<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, Connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import './css/style.css';
import { Button, Modal, Tabs, Tab, Container, Row, Col, Nav} from 'react-bootstrap';
import Slider from "react-slick";

=======
import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './css/style.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";

import { Footer } from '../../components/footer'

>>>>>>> 5b6fb794b707104fe5f2645ddddc09b3c8a70803
const LandingPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5
  };

  return(
    <>
      <div id="header">
        <div className="main-header-two">
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
                    <Link to ='/login'>
                    <Button variant="primary" className="float-right">LOGIN</Button>
                    </Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        
        <div className="main-header-one">
          <Container>
            <Row>
              <Col md={7} lg={7} className="part-one">
                <div className="table-100">
                  <div className="table-row">
                    <div className="table-cell-one">
                      <h3 className="title-one"><strong>Duis aute irure dolor in reprehenderit in voluptate</strong></h3>
                      <h4 className="m-t-15">Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat.</h4>
                    </div>
                  </div>
                </div>
              </Col>

              <Col md={5} lg={5} className="part-two">
              <div className="table-100">
                <div className="table-row">
                  <div className="table-cell-one">
                    <img src="images/decor1.png" style={{width: "100%"}}/>
                  </div>
                </div>
              </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>


      <div id="section-one">
        <Container>
          <Row>
            <Col>
            <h3 className="text-center title-one"><strong>Kenapa memilih suRvplus ?</strong></h3>
            </Col>
          </Row>


          <Row className="m-t-30">
            <Col md={4} lg={4}>
            <div className="table-100 part-one">
              <div className="table-row">
                <div className="table-cell-one">
                  <center>
                    <img src="https://via.placeholder.com/80"></img>
                  </center>
                </div>

                <div className="table-cell-two">
                  <h4 className="m-b-5 title-two"><strong>Sistem informasinya handal</strong></h4>
                  <p>Sistemnya dibangun dengan cermat dan matang, sehingga kehandalannya tidak diragukan lagi</p>
                </div>
              </div>
            </div>
            </Col>
            <Col md={4} lg={4}>
            <div className="table-100 part-one">
              <div className="table-row">
                <div className="table-cell-one">
                  <center>
                    <img src="https://via.placeholder.com/80"></img>
                  </center>
                </div>

                <div className="table-cell-two">
                  <h4 className="m-b-5 title-two"><strong>Unggul dalam inovasi</strong></h4>
                  <p>Mengikuti kebutuhan pasar</p>
                </div>
              </div>
            </div>
            </Col>
            <Col md={4} lg={4}>
            <div className="table-100 part-one">
              <div className="table-row">
                <div className="table-cell-one">
                  <center>
                    <img src="https://via.placeholder.com/80"></img>
                  </center>
                </div>

                <div className="table-cell-two">
                  <h4 className="m-b-5 title-two"><strong>Responsif</strong></h4>
                  <p>Tanggap dan solutif dalam memberikan bantuan, baik bagi surveyot maupun responden</p>
                </div>
              </div>
            </div>
            </Col>
          </Row>

          <Row className="m-t-30">
            <Col md={{ span: 8, offset:2}}>
              <Row>
                <Col md={6} lg={6}>
                <div className="table-100 part-one">
                  <div className="table-row">
                    <div className="table-cell-one">
                      <center>
                        <img src="https://via.placeholder.com/80"></img>
                      </center>
                    </div>

                    <div className="table-cell-two">
                      <h4 className="m-b-5 title-two"><strong>Valid</strong></h4>
                      <p>Kami mengedepankan validitas metode kerja mapupun terhadap hasil-hasil yang akan digunakan oleh semua pihak.</p>
                    </div>
                  </div>
                </div>
                </Col>
                <Col md={6} lg={6}>
                <div className="table-100 part-one">
                  <div className="table-row">
                    <div className="table-cell-one">
                      <center>
                        <img src="https://via.placeholder.com/80"></img>
                      </center>
                    </div>

                    <div className="table-cell-two">
                      <h4 className="m-b-5 title-two"><strong>Plus</strong></h4>
                      <p>Memberikan manfaat plus-plus, antara lain sebagai tangan kanan surveyor atau peneliti dan memberikan tambahan penghasilan bagi responden</p>
                    </div>
                  </div>
                </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="m-t-30">
            <Col md={4} lg={4}>
            <h3 className="m-t-0 title-one text-right"><strong>Manfaat Bagi Surveyor</strong></h3>
            <Row className="m-t-30">
              <Col>
              <div className="table-100 part-two">
                <div className="table-row">
                  <div className="table-cell-one">
                    <h4 className="text-right title-three"><strong>Dapat responden yang terpercaya dengan cepat</strong></h4>
                  </div>

                  <div className="table-cell-two">
                    <img src="images/decor14.png" className="float-right" />
                  </div>
                </div>
              </div>
              </Col>
            </Row>

            <Row className="m-t-15">
              <Col>
              <div className="table-100 part-two">
                <div className="table-row">
                    <div className="table-cell-one">
                      <h4 className="text-right title-three"><strong>Bisa menyaring responden sesuai kriteria</strong></h4>
                    </div>

                    <div className="table-cell-two">
                      <img src="images/decor14.png" className="float-right" />
                    </div>
                </div>
              </div>
              </Col>
            </Row>

            <Row className="m-t-15">
              <Col>
              <div className="table-100 part-two">
                <div className="table-row">
                  <div className="table-cell-one">
                    <h4 className="text-right title-three"><strong>Biaya terjangkau</strong></h4>
                  </div>

                  <div className="table-cell-two">
                    <img src="images/decor14.png" className="float-right" />
                  </div>
                </div>
              </div>
              </Col>
            </Row>

            <Row className="m-t-15">
              <Col>
              <div className="table-100 part-two">
                <div className="table-row">
                  <div className="table-cell-one">
                    <h4 className="text-right title-three"><strong>Diberikan bantuan dari awal sampai akhir</strong></h4>
                  </div>

                  <div className="table-cell-two">
                    <img src="images/decor14.png" className="float-right" />
                  </div>
                </div>
              </div>
              </Col>
            </Row>

            <Row className="m-t-15">
              <Col>
              <ul className="list-inline float-right">
                <li class="list-inline-item">
                  <Link to="/surveyor/register">
                  <Button variant="primary">DAFTAR SURVEYOR</Button>
                  </Link>
                </li>
                <li class="list-inline-item">

                  <Button variant="primary">SELENGKAPNYA</Button>{' '}
                </li>
              </ul>
              </Col>
            </Row>
            </Col>
            <Col md={4} lg={4}>
              <Row>
                <Col md={6} lg={6}>
                  <center>
                    <img src="images/decor4.png" />
                  </center>
                </Col>
                <Col md={6} lg={6}>
                  <center>
                    <img src="images/decor5.png" />
                  </center>
                </Col>
              </Row>
            </Col>
            <Col md={4} lg={4}>
            <h3 className="m-t-0 title-one"><strong>Manfaat Bagi Responden</strong></h3>
            <Row className="m-t-30">
              <Col>
              <div className="table-100 part-three">
                <div className="table-row">
                  <div className="table-cell-one">
                    <img src="images/decor14.png" />
                  </div>

                  <div className="table-cell-two">
                    <h4 className="text-left title-three"><strong>Dapat tambahan penghasilan dalam hitungan menit</strong></h4>
                  </div>
                </div>
              </div>
              </Col>
            </Row>

            <Row className="m-t-15">
              <Col>
              <div className="table-100 part-three">
                <div className="table-row">
                  <div className="table-cell-one">
                   <img src="images/decor14.png" />
                  </div>

                  <div className="table-cell-two">
                    <h4 className="text-left title-three"><strong>Tanpa perlu kualifikasi pendidikan tertentu</strong></h4>
                  </div>
                </div>
              </div>
              </Col>
            </Row>

            <Row className="m-t-15">
              <Col>
              <div className="table-100 part-three">
                <div className="table-row">
                  <div className="table-cell-one">
                    <img src="images/decor14.png" />
                  </div>

                  <div className="table-cell-two">
                    <h4 className="text-left title-three"><strong>Mengerjakan survey dengan menyenangkan</strong></h4>
                  </div>
                </div>
              </div>
              </Col>
            </Row>

            <Row className="m-t-15">
              <Col>
              <div className="table-100 part-three">
                <div className="table-row">
                  <div className="table-cell-one">
                    <img src="images/decor14.png" />
                  </div>

                  <div className="table-cell-two">
                    <h4 className="text-left title-three"><strong>Bisa belajar banyak hal</strong></h4>
                  </div>
                </div>
              </div>
              </Col>
            </Row>

            <Row className="m-t-15">
              <Col>
              <ul className="list-inline float-left">
                <li class="list-inline-item">
                  <Link to="/register">
                    <Button variant="primary">DAFTAR RESPONDEN</Button>
                  </Link>
                </li>
                <li class="list-inline-item">
                  <Button variant="primary">SELENGKAPNYA</Button>
                </li>
              </ul>
              </Col>
            </Row>
            </Col>
          </Row>
        </Container>
      </div>


      <div id="section-two">
        <Container>
          <Row>
            <Col>
            <h3 className="text-center title-one"><strong>Kata Mereka Tentang suRvplus ?</strong></h3>
            </Col>
          </Row>

          <Row className="m-t-30">
            <Col>
            <div>
              <Slider {...settings}>
                <div>
                  <img src="https://via.placeholder.com/200"></img>
                </div>
                <div>
                  <img src="https://via.placeholder.com/200"></img>
                </div>
                <div>
                  <img src="https://via.placeholder.com/200"></img>
                </div>
                <div>
                  <img src="https://via.placeholder.com/200"></img>
                </div>
                <div>
                  <img src="https://via.placeholder.com/200"></img>
                </div>
                <div>
                  <img src="https://via.placeholder.com/200"></img>
                </div>
                <div>
                  <img src="https://via.placeholder.com/200"></img>
                </div>
                <div>
                  <img src="https://via.placeholder.com/200"></img>
                </div>
                <div>
                  <img src="https://via.placeholder.com/200"></img>
                </div>
                <div>
                  <img src="https://via.placeholder.com/200"></img>
                </div>
                <div>
                  <img src="https://via.placeholder.com/200"></img>
                </div>
                <div>
                  <img src="https://via.placeholder.com/200"></img>
                </div>
              </Slider>
            </div>
            </Col>
          </Row>
        </Container>
      </div>

<<<<<<< HEAD

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
=======
      <Footer/>
>>>>>>> 5b6fb794b707104fe5f2645ddddc09b3c8a70803
    </>
  )
}

export default withRouter(LandingPage)