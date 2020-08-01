import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { withRouter, Link } from 'react-router-dom';

import './css/style.css';
import { Button, Container, Row, Col, Tab, Nav, Accordion, Card } from 'react-bootstrap';
import Slider from "react-slick";
import ReactPlayer from 'react-player'

import { getDataAllUser, getFaqHome, getPerusahaanHome } from '../../store/actions/userAction'
import { Footer } from '../../components/footer'

// import CanvasJSReact from '../../assets/canvasjs.react';

const LandingPage = () => {
  const dispatch = useDispatch()

  const [ allUser, setAllUser ] = useState([])
  const [ faqs, setFaqs ] = useState([])
  const [ perusahaanImg, setPerusahaanImg ] = useState([])

  let dataResponden = 0
  let dataSurveyor = 0
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  const getAllUser = () => {
    dispatch(getDataAllUser())
      .then( data => {
        setAllUser(data)
      })
  }

  const getDataFaq = () => {
    dispatch(getFaqHome())
      .then( data => {
        setFaqs(data)
      })
  }

  const getDataPerusahaan = () => {
    dispatch(getPerusahaanHome())
      .then( data => {
        setPerusahaanImg(data)
      })
  }

  useEffect(() => {
    getAllUser()
  }, [])

  useEffect(() => {
    getDataFaq()
  }, [])

  useEffect(() => {
    getDataPerusahaan()
  }, [])

  console.log(perusahaanImg)


  if(allUser){
    dataResponden = allUser.filter(el => el.role === 'responden').length
    dataSurveyor = allUser.filter(el => el.role === 'surveyor').length
  }

  // //var CanvasJSReact = require('./canvasjs.react');
  // var CanvasJS = CanvasJSReact.CanvasJS;
  // var CanvasJSChart = CanvasJSReact.CanvasJSChart;

  // const settings_testi = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 6,
  //   slidesToScroll: 6,
  //   vertical: true,
  //   arrows: false,
  //   autoplay: true,
  //   // autoplaySpeed: 000,
  // };

  // const options = {
  //   height:400,
  //   // title: {
  //   //   text: "Basic Column Chart in React"
  //   // },
  //   data: [{				
  //             type: "column",
  //             dataPoints: [
  //                 { label: "Laki-Laki",  y: 10  },
  //                 { label: "Perempuan", y: 15  }
  //             ]
  //    }]
  //   }

  //   const options2 = {
  //     width:825,
  //     height:400,
  //     // title: {
  //     //   text: "Basic Column Chart in React"
  //     // },
  //     data: [{				
  //               type: "column",
  //               dataPoints: [
  //                   { label: "Swasta",  y: 10  },
  //                   { label: "PNS/TNI/Polri", y: 15  },
  //                   { label: "Sedang mencari pekerjaan tetep", y: 25  },
  //                   { label: "Sekolah/Kuliah",  y: 30  },
  //                   { label: "Ibu Rumah Tangga",  y: 28  },
  //                   { label: "Lainnya",  y: 28  }
  //               ]
  //      }]
  //     }

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
                      <img src="images/logo three.png" style={{height:'60px'}}></img>
                    </div>

                    <div className="table-cell-two">
                      <h3 className="m-t-0 m-b-0"><strong>suRvplus</strong></h3>
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
                      <h4 className="m-t-15">Survey online dengan manfaat “plus-plus"</h4>
                      <h4 className="m-t-15">SuRvplus merupakan portal penyelenggara survey online yang hadir untuk memenuhi tantangan kelaziman baru “the new normal". Tanpa perlu kontak fisik antara surveyor dan responden. Semuanya bisa dilakukan #dirumahaja.</h4>
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
                {
                  perusahaanImg.map((data, i) => {
                    return(
                      <div key={i}>
                        <img src={`http://backoffice.survplus.id/foto/${data.icon}`} style={{height:'100px'}}></img>
                      </div>
                    )
                  })
                }

                {/* <div>
                  <img src="images/HRV.png"></img>
                </div>

                <div>
                  <img src="images/TJD.png"></img>
                </div>

                <div>
                  <img src="images/HRV.png"></img>
                </div>

                <div>
                  <img src="images/TJD.png"></img>
                </div>

                <div>
                  <img src="images/HRV.png"></img>
                </div>

                <div>
                  <img src="images/TJD.png"></img>
                </div>

                <div>
                  <img src="images/HRV.png"></img>
                </div> */}
              </Slider>
            </Col>
          </Row>
        </Container>
      </div>
      
      <div id="section-one">
        <Container>
          <Row>
            <Col md={12} lg={12}>
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
            <h3 className="m-t-0 text-right" style={{fontSize:'32px'}}><strong>Manfaat Bagi Surveyor</strong></h3>
            <Row className="m-t-30">
              <Col md={12} lg={12}>
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
              <Col md={12} lg={12}>
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
              <Col md={12} lg={12}>
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
              <Col md={12} lg={12}>
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
                  <h5 style={{color:"#fff"}} className="text-right">Jumlah surveyor saat ini : {dataSurveyor} </h5>
                </div>
              </Col>
              <Col md={12} lg={12}>
              <ul className="list-inline float-right m-t-15">
                <li className="list-inline-item">
                  <Link to="/surveyor/register">
                  <Button variant="primary">DAFTAR SURVEYOR</Button>
                  </Link>
                </li>
                <li className="list-inline-item">

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
            <h3 className="m-t-0" style={{fontSize:'32px'}}><strong>Manfaat Bagi Responden</strong></h3>
            <Row className="m-t-30">
              <Col md={12} lg={12}>
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
              <Col md={12} lg={12}>
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
              <Col md={12} lg={12}>
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
              <Col md={12} lg={12}>
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
                  <h5 style={{color:"#fff"}}>Jumlah responden saat ini : {dataResponden} </h5>
                </div>
              </Col>
              <Col md={12} lg={12} className="m-t-15">
              <ul className="list-inline float-left">
                <li className="list-inline-item">
                  <Link to="/register">
                    <Button variant="primary">DAFTAR RESPONDEN</Button>
                  </Link>
                </li>
                <li className="list-inline-item">
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
                  {/* <ReactPlayer
                    url = 'https://www.youtube.com/watch?v=Gtg-gXGF85w'
                    width='100%'
                    height='500px'
                  /> */}

                  <iframe width="100%" height="500" src="https://www.youtube.com/embed/Gtg-gXGF85w?playlist=Gtg-gXGF85w&loop=1&autoplay=1&controls=0" frameborder="0" allow="autoplay; encrypted-media;" allowfullscreen></iframe>


{/* <iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1">
</iframe> */}
                </Col>
              </Row>
              
            </Col>
            <Col md={5} lg={5}>
              <Row className="m-b-15">
                <Col md={12} lg={12}>
                  <h3 className="text-center title-one"><strong>FAQ</strong></h3>
                </Col>
              </Row>

              <Row className="m-t-30">
                <Col md={12} lg={12}>
                  <Accordion>
                    {
                      faqs.map( (data, i) => {
                        return(
                          <Card key={i}>
                            <Accordion.Toggle as={Card.Header} eventKey={`${i}`} style={{ cursor: "pointer", backgroundColor:"#1f59bb", color:"#fff" }}>
                            <div dangerouslySetInnerHTML={{__html: data.pertanyaan}}/>
                            
                          </Accordion.Toggle>
                            <Accordion.Collapse eventKey={`${i}`}>
                              <Card.Body>
                                <div dangerouslySetInnerHTML={{__html: data.jawaban}}/>
                              </Card.Body>
                            </Accordion.Collapse>
                          </Card>
                        )
                      })
                    }
                    {/* <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="1" style={{ cursor: "pointer", backgroundColor: "#1f59bb", color: "#fff" }}>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, inventore.
                    </Accordion.Toggle>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi molestias eum cum deserunt magni aliquid ad sapiente cumque nisi unde eaque vero animi doloribus, optio quam nostrum maxime rem praesentium incidunt! Rem tempore suscipit eos eligendi quasi exercitationem iusto voluptates.
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>

                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="2" style={{ cursor: "pointer", backgroundColor: "#1f59bb", color: "#fff" }}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae debitis laborum mollitia repellat quasi optio.
                    </Accordion.Toggle>
                      <Accordion.Collapse eventKey="2">
                        <Card.Body>
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id corrupti nostrum quod. Ipsam quam dolorum quasi eligendi. Veritatis omnis explicabo accusantium cupiditate. Rerum, est ab!
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>

                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="4" style={{ cursor: "pointer", backgroundColor: "#1f59bb", color: "#fff" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis temporibus delectus maxime! Eum ipsam reprehenderit rerum quaerat voluptatibus.
                    </Accordion.Toggle>
                      <Accordion.Collapse eventKey="4">
                        <Card.Body>
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga minima libero ullam sunt! Commodi harum repellat perspiciatis consequuntur aliquam velit.
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card> */}
                  </Accordion>
                </Col>
              </Row>

              {/* <Row className="m-b-15">
                <Col md={12} lg={12}>
                  <h3 className="text-left title-one"><strong>Testimony</strong></h3>
                </Col>
              </Row>

              
              <Row className="m-t-30">
                <Slider {...settings_testi}>
                  <div>
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
                  </div>
                  <div>
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
                  </div>
                  <div>
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
                  </div>
                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>
                </Slider>
              </Row> */}
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


      

      <Footer/>
    </>
  )
}

export default withRouter(LandingPage)