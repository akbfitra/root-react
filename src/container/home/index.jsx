import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './css/style.css';
import { Button, Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import Slider from "react-slick";


import { Footer } from '../../components/footer'

import CanvasJSReact from '../../assets/canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const LandingPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };

  const options = {
    height:400,
    // title: {
    //   text: "Basic Column Chart in React"
    // },
    data: [{				
              type: "column",
              dataPoints: [
                  { label: "Laki-Laki",  y: 10  },
                  { label: "Perempuan", y: 15  }
              ]
     }]
    }

    const options2 = {
      width:825,
      height:400,
      // title: {
      //   text: "Basic Column Chart in React"
      // },
      data: [{				
                type: "column",
                dataPoints: [
                    { label: "Swasta",  y: 10  },
                    { label: "PNS/TNI/Polri", y: 15  },
                    { label: "Sedang mencari pekerjaan tetep", y: 25  },
                    { label: "Sekolah/Kuliah",  y: 30  },
                    { label: "Ibu Rumah Tangga",  y: 28  },
                    { label: "Lainnya",  y: 28  }
                ]
       }]
      }

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
                      <h3 className="title-one"><strong>SuRvplus</strong></h3>
                      <h4 className="m-t-15">Survey online dengan manfaat “plus-plus”</h4>
                      <h4 className="m-t-15">SuRvplus merupakan portal penyelenggara survey online yang hadir untuk memenuhi tantangan kelaziman baru “the new normal”. Tanpa perlu kontak fisik antara surveyor dan responden. Semuanya bisa dilakukan #dirumahaja.</h4>
                      <h4 className="m-t-15">SuRvplus memberikan banyak manfaat, antara lain surveyor akan mendapatkan responden yang tervalidasi dengan cepat, sedangkan responden bisa mendapatkan tambahan penghasilan.</h4>
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
            <Col md={3} lg={3}>
              <center>
                <img src="images/s.png" style={{height:"60px"}}></img>
                <h5 className="m-t-15 m-b-15"><strong>Sistem yang andal</strong></h5>
                <div style={{paddingLeft:"20px", paddingRight:"20px"}}><h6>Aplikasi dan sistem informasinya dibangun dengan cermat dan matang, sehingga keandalannya tidak perlu diragukan lagi</h6></div>
              </center>
            </Col>
            <Col md={3} lg={3}>
              <center>
                <img src="images/u.png" style={{height:"60px"}}></img>
                <h5 className="m-t-15 m-b-15"><strong>Unggul dalam inovasi</strong></h5>
                <div style={{paddingLeft:"20px", paddingRight:"20px"}}><h6>SurvPlus hadir menjawab tantantangan-tantangan terkini dan untuk memenuhi kebutuhan komersial maupun akademis</h6></div>
              </center>
            </Col>
            <Col md={3} lg={3}>
              <center>
                <img src="images/r.png" style={{height:"60px"}}></img>
                <h5 className="m-t-15 m-b-15"><strong>Responsif</strong></h5>
                <div style={{paddingLeft:"20px", paddingRight:"20px"}}><h6>Selalu tanggap dalam memberikan bantuan dan solutif dalam memecahkan permasalahan, baik yang dihadapi surveyor maupun responden</h6></div>
              </center>
            </Col>

            <Col md={3} lg={3}>
              <center>
                <img src="images/v.png" style={{height:"60px"}}></img>
                <h5 className="m-t-15 m-b-15"><strong>Valid</strong></h5>
                <div style={{paddingLeft:"20px", paddingRight:"20px"}}>
                <h6>SurvPlus mengedepankan validitas metode kerja maupun terhadap kualitas hasil survey yang akan dimanfaatkan oleh banyak pihak </h6>
                </div>
              </center>
            </Col>
          </Row>

          <Row className="m-t-30">
            <Col md={{ span: 4, offset:4}}>
              <center>
                <img src="images/plus.png" style={{height:"60px"}}></img>
                <h5 className="m-t-15 m-b-15"><strong>Manfaat Plus-plus</strong></h5>
                <div style={{paddingLeft:"30px", paddingRight:"30px"}}>
                <h6>SurvPlus memberikan manfaat plus-plus, antara lain sebagai fasilitator penyelenggaraan survey bagi surveyor atau peneliti, dan memberikan tambahan penghasilan bagi para responden.</h6>
                </div>
              </center>
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
              <Col md={12} lg={12}>
                <div style={{width:"90%", backgroundColor:"#007bff",padding:"10px 15px",borderRadius:".25rem"}} className="float-right">
                  <h5 style={{color:"#fff"}} className="text-right">Jumlah surveyor saat ini : 0000</h5>
                </div>
              </Col>
              <Col md={12} lg={12}>
              <ul className="list-inline float-right m-t-15">
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
              <Col md={12} lg={12}>
                <div style={{width:"90%", backgroundColor:"#007bff",padding:"10px 15px",borderRadius:".25rem"}}>
                  <h5 style={{color:"#fff"}}>Jumlah surveyor saat ini : 0000</h5>
                </div>
              </Col>
              <Col md={12} lg={12} className="m-t-15">
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
          <Row className="m-t-30">
            <Col md={7} lg={7}>
              <Row>
                <Col md={12} lg={12}>
                  <h3 className="text-center title-one"><strong>Bagaimana Survey Online ini Bekerja ?</strong></h3>
                </Col>
              </Row>
              <Row className="m-t-30">
                <Col md={12} lg={12}>
                  <img src="https://via.placeholder.com/475" style={{ width: "100%" }}></img>
                </Col>
              </Row>
              
            </Col>
            <Col md={5} lg={5}>
              <Row className="m-b-15">
                <Col md={12} lg={12}>
                  <h3 className="text-left title-one"><strong>Testimony</strong></h3>
                </Col>
              </Row>
              <Row className="m-t-15">
                <Col md={12} lg={12}>
                  <div className="part-one">
                    <div className="left">
                      <img src="images/user.png"></img>
                    </div>
                    <div className="right">
                      <h5><strong>Nama User</strong></h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla illo asperiores amet animi ipsum similique.</p>
                    </div>
                  </div>
                </Col>
              </Row>

              <Row className="m-t-15">
                <Col md={12} lg={12}>
                  <div className="part-one">
                    <div className="left">
                      <img src="images/user.png"></img>
                    </div>
                    <div className="right">
                      <h5><strong>Nama User</strong></h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla illo asperiores amet animi ipsum similique.</p>
                    </div>
                  </div>
                </Col>
              </Row>

              <Row className="m-t-15">
                <Col md={12} lg={12}>
                  <div className="part-one">
                    <div className="left">
                      <img src="images/user.png"></img>
                    </div>
                    <div className="right">
                      <h5><strong>Nama User</strong></h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla illo asperiores amet animi ipsum similique.</p>
                    </div>
                  </div>
                </Col>
              </Row>

              <Row className="m-t-15">
                <Col md={12} lg={12}>
                  <div className="part-one">
                    <div className="left">
                      <img src="images/user.png"></img>
                    </div>
                    <div className="right">
                      <h5><strong>Nama User</strong></h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla illo asperiores amet animi ipsum similique.</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          {/* <Tab.Container id="left-tabs-example" defaultActiveKey="first" className="m-t-30">
            <Row>
              <Col md={3} lg={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first" className="text-center">JENIS KELAMIN</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second" className="text-center">PEKERJAAN</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col md={9} lg={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      <Col><CanvasJSChart options = {options}/></Col>
                    </Row>
                  
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row>
                      <Col><CanvasJSChart options = {options2}/></Col>
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container> */}
          {/* <Row className="m-t-30">
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
          </Row> */}
        </Container>
      </div>


      <div id="section-three">
        <Container>
          <Row>
            <Col md={12} lg={12}>
              <h3 className="text-center title-one"><strong>Perusahaan Yang Telah Bekerjasama</strong></h3>
            </Col>
          </Row>

          <Row className="m-t-30">
            <Col md={12} lg={12}>
              <Slider {...settings}>
                <div>
                  <img src="https://via.placeholder.com/262x100"></img>
                </div>
                <div>
                  <img src="https://via.placeholder.com/262x100"></img>
                </div>
                <div>
                  <img src="https://via.placeholder.com/262x100"></img>
                </div>
                <div>
                  <img src="https://via.placeholder.com/262x100"></img>
                </div>
                <div>
                  <img src="https://via.placeholder.com/262x100"></img>
                </div>
                <div>
                  <img src="https://via.placeholder.com/262x100"></img>
                </div>
                <div>
                  <img src="https://via.placeholder.com/262x100"></img>
                </div>
                
              </Slider>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer/>
    </>
  )
}

export default withRouter(LandingPage)