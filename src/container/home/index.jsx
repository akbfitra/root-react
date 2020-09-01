import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { withRouter, Link } from 'react-router-dom';

import './css/style.css';
import { Button, Container, Row, Col, Tab, Nav, Accordion, Card, DropdownButton, Dropdown, Navbar, NavDropdown, Modal } from 'react-bootstrap';
import Slider from "react-slick";
import ReactPlayer from 'react-player'

import { getDataAllUser, getFaqHome, getPerusahaanHome } from '../../store/actions/userAction'
import { Footer } from '../../components/footer'

// import CanvasJSReact from '../../assets/canvasjs.react';

const LandingPage = () => {
  const [surShow, setSurShow] = useState(false);
  const [resShow, setResShow] = useState(false);


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

  const settingslider = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };

  const settingslidertwo = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    adaptiveHeight: true
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

  // console.log(perusahaanImg)

  // useEffect(() => {
  //   const script = document.createElement('script');
  
  //   script.src = "https://storage.googleapis.com/f8a350-taplive-prd-public/static/launcher/web/v1.0/main.js";
  //   script.async = true;
  //   // script.TapTalkLive.init("0e82d43ab4972ae057c7e437450dcb6916a79bb57024706a1684aebd1a7402b0");
  //   // script.TapTalkLive.setBrandColor(55,165,215);
  
  //   document.body.appendChild(script);
  
  //   return () => {
  //     document.body.removeChild(script);
  //   }
  // }, []);

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
      <div id="header" className="d-none d-none d-xl-block d-none d-lg-block d-xl-none d-none d-md-block d-lg-none">
        <Container fluid>
          <Row>
            <Col md={12} lg={12} className="p-l-0 p-r-0">
              
              <div style={{width:'100%', backgroundColor:'', position:'relative', overflow:'hidden'}}>
              <div>
                <Slider {...settingslider}>
                  <div>
                    <img src="images/Slide1New.jpg" style={{width:'100%'}}></img>
                  </div>

                  <div>
                    <img src="images/Slide2New.jpg" style={{width:'100%'}}></img>
                  </div>

                  <div>
                    <img src="images/Slide3New.jpg" style={{width:'100%'}}></img>
                  </div>
                </Slider>
              </div>
                



                {/* <div style={{width:'15%', height:'500px', backgroundColor:'#333', position:'absolute', right:'0', top:'0', bottom:'0', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                  <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', cursor:'pointer'}} onClick={() => setSurShow(true)}>
                  <img src="images/decor4.png" style={{borderRadius: '100%', marginTop:'15px', width:'50px'}}></img>
                  <h5 className="m-t-10" style={{color:'#fff'}}><strong>SURVEYOR</strong></h5>
                  </div>
                  
                  <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', cursor:'pointer'}} onClick={() => setResShow(true)}>
                  <img src="images/decor5.png" style={{borderRadius: '100%', marginTop:'15px', width:'50px'}}></img>
                  <h5 className="m-t-10" style={{color:'#fff'}}><strong>RESPONDEN</strong></h5>
                  </div>
                  <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                  <img src="https://via.placeholder.com/80" style={{borderRadius: '100%', marginTop:'15px', width:'80px'}}></img>
                  <h5 className="m-t-10" style={{color:'#fff'}}><strong>KONTAK KAMI</strong></h5>
                  </div>
                </div> */}
              </div>
            </Col>
          </Row>
        </Container>
        <div className="menu" style={{width:'100%', position:'absolute', left:'0', right:'0', top:'0', zIndex:'1', backgroundColor:'rgba(255,255,255,0.7)'}}>
          <Container>
            <Row style={{position: 'sticky', top:'0', zIndex: '1'}}>
              <Col md={3} lg={3}>
              <Link to='/'>
                <div style={{width:'100%', height:'80px', display:'flex', alignItems:'center', backgroundColor:''}}>
                <img src="images/logo three.png" style={{height:'60px', marginRight:'10px'}}></img>
                <h3 className="m-t-0 m-b-0"><strong>Survplus</strong></h3>
                </div>
              </Link>
                
              </Col>

              <Col md={7} lg={7}>
                <div style={{width:'100%', height:'80px', display:'flex', justifyContent:'flex-end', alignItems:'center', backgroundColor:''}}>
                  {/* <Link to ='#'>
                    <h5>Tentang Kami</h5>
                  </Link>

                  <Link to ='#'>
                    <h5>Surveyor</h5>
                  </Link>

                  <Link to ='#'>
                    <h5>Responden</h5>
                  </Link> */}

                  <Link to ='/syaratdanketentuan'>
                    <h5>Syarat & Ketentuan</h5>
                  </Link>
                  
                </div>
                  
              </Col>


              <Col md={2} lg={2}>
              <div style={{width:'100%', height:'80px', display:'flex', alignItems:'center', backgroundColor:''}}>
                  <ul className="list-inline m-b-0">
                    

                    <li className="list-inline-item">
                    <DropdownButton size="sm"
                      alignRight
                      title="DAFTAR"
                      id="dropdown-menu-align-right"
                     
                    >
                      <Dropdown.Item eventKey="2"><Link to ='/surveyor/register'>Daftar Surveyor</Link></Dropdown.Item>
                      <Dropdown.Item eventKey="3"><Link to ='/register'>Daftar Responden</Link></Dropdown.Item>
                    </DropdownButton>
                    </li>

                    <li className="list-inline-item">
                      <Link to ='/login'>
                        <Button Button variant="primary" size="sm">LOGIN</Button>
                      </Link>
                    </li>
                  </ul>
              </div>
                  
              </Col>
            </Row>
          </Container>
        </div>
        {/* <div style={{position:'absolute', top:'0', right:'0'}}>
          <img src="images/wave2.png"></img>
        </div> */}
      </div>

      <div id="header-mobile" className="d-none d-none d-sm-block d-md-none d-block d-sm-none">
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Navbar.Brand href="/">Survplus</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#" onClick={() => setSurShow(true)}>Surveyor</Nav.Link>
          <Nav.Link href="#" onClick={() => setResShow(true)}>Responden</Nav.Link>
          <Nav.Link href="/syaratdanketentuan">Syarat & Ketentuan</Nav.Link>
          <NavDropdown title="Daftar" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/surveyor/register">Daftar Suveyor</NavDropdown.Item>
            <NavDropdown.Item href="/register">Daftar Responden</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>


        
      </Navbar.Collapse>
      </Navbar>

      <Container>
        <Row>
          <Col xs={12} sm={12} className="p-l-0 p-r-0">
            <div style={{width:'100%', backgroundColor:'', height:'', overflowX:"hidden"}}>
              <Slider {...settingslider}>
                  <div>
                    <img src="images/Slide1.jpg" style={{width:'100%'}}></img>
                  </div>

                  <div>
                    <img src="images/Slide2.jpg" style={{width:'100%'}}></img>
                  </div>

                  <div>
                    <img src="images/Slide3.jpg" style={{width:'100%'}}></img>
                  </div>
              </Slider>
            </div>
                
          </Col>
        </Row>
      </Container>
      </div>
      
      <div id="section-one" className="d-none d-none d-xl-block d-none d-lg-block d-xl-none d-none d-md-block d-lg-none">
        <Container >
          <Row>
            <Col md={10} lg={10}>
              <div className="part-five">
                  <div className="box">
                    <center>
                    <img src="images/Why_1.svg" style={{height:'120px'}}></img>
                    <h4 className="m-t-15 m-b-5"><strong>SISTEM HANDAL</strong></h4>
                    <h6 style={{fontSize:'14px'}}>Aplikasi dan sistem informasinya dibangun dengan cermat dan matang, sehingga keandalannya tidak perlu diragukan lagi</h6>
                    </center>
                  </div>
                  <div className="box">
                    <center>  
                    <img src="images/Why_2.svg" style={{height:'80px'}}></img>
                    <h4 className="m-t-15 m-b-5"><strong>UNGGUL</strong></h4>
                    <h6 style={{fontSize:'14px'}}>Selalu berinovasi untuk menjawab tantangan-tantangan terkini dan untuk memenuhi kebutuhan komersial maupun akademis</h6>
                    </center>
                  </div>
                  <div className="box">
                    <center>
                    <img src="images/Why_3.svg" style={{height:'80px'}}></img>
                    <h4 className="m-t-15 m-b-5"><strong>RESPONSIF</strong></h4>
                    <h6 style={{fontSize:'14px'}}>Selalu tanggap dalam memberikan bantuan dan solutif dalam memecahkan permasalahan, baik yang dihadapi surveyor maupun responden</h6>
                    </center>
                  </div>
                  <div className="box">
                    <center>
                    <img src="images/Why_4.svg" style={{height:'80px'}}></img>
                    <h4 className="m-t-15 m-b-5"><strong>VALID</strong></h4>
                    <h6 style={{fontSize:'14px'}}>Mengedepankan validitas metode kerja maupun terhadap kualitas hasil survey yang akan dimanfaatkan oleh banyak pihak</h6>
                    </center>
                  </div>

                  {/* <div style={{position:'absolute', left:'-15px', top:'-100px', zIndex:'1'}}> */}
                  
                  {/* </div> */}

                  {/* <div style={{position:'absolute', right:'-15px', top:'-100px', zIndex:'1'}}> */}
                  <div className="box">
                    <center>
                    <img src="images/Why_5.svg" style={{height:'120px'}}></img>
                    <h4 className="m-t-15 m-b-5"><strong>PLUS</strong></h4>
                    <h6 style={{fontSize:'14px'}}>Memberikan manfaat plus-plus, antara lain sebagai fasilitator penyelenggaraan survey bagi surveyor atau peneliti, dan memberikan tambahan penghasilan bagi para responden</h6>
                    </center>
                  </div>
                  {/* </div> */}
              </div>
            </Col>

            
          </Row>
        </Container>

        <div style={{position:'absolute', right:'0', bottom:'0', zIndex:'1'}} className="d-none d-none d-xl-block d-none d-lg-block d-xl-none d-none d-md-block d-lg-none">
          <img src="images/tangan.png"></img>
        </div>

        {/* <div style={{position:'absolute', top:'-130px', left:'0'}}>
          <img src="images/wave1.png"></img>
        </div> */}
      </div>


      <div id="section-one-mobile" className="d-none d-none d-sm-block d-md-none d-block d-sm-none">
      <Container >
          <Row>
            <Col md={12} lg={12}>
            <h3 className="text-center title-one"><strong>Kenapa memilih Survplus ?</strong></h3>
            </Col>
          </Row>
          <Row>
            <Col md={12} lg={12} className="m-t-15">
              <center>
                <img src="images/s.png" style={{height:"60px"}}></img>
                <h5 className="m-t-15 m-b-15"><strong>SISTEM HANDAL</strong></h5>
                <div style={{paddingLeft:"20px", paddingRight:"20px"}}><h6>Aplikasi dan sistem informasinya dibangun dengan cermat dan matang, sehingga keandalannya tidak perlu diragukan lagi</h6></div>
              </center>
            </Col>
            <Col md={12} lg={12} className="m-t-15">
              <center>
                <img src="images/u.png" style={{height:"60px"}}></img>
                <h5 className="m-t-15 m-b-15"><strong>UNGGUL</strong></h5>
                <div style={{paddingLeft:"20px", paddingRight:"20px"}}><h6>Selalu berinovasi untuk menjawab tantangan-tantangan terkini dan untuk memenuhi kebutuhan komersial maupun akademis</h6></div>
              </center>
            </Col>
            <Col md={12} lg={12} className="m-t-15">
              <center>
                <img src="images/r.png" style={{height:"60px"}}></img>
                <h5 className="m-t-15 m-b-15"><strong>RESPONSIF</strong></h5>
                <div style={{paddingLeft:"20px", paddingRight:"20px"}}><h6>Selalu tanggap dalam memberikan bantuan dan solutif dalam memecahkan permasalahan, baik yang dihadapi surveyor maupun responden</h6></div>
              </center>
            </Col>

            <Col md={12} lg={12} className="m-t-15">
              <center>
                <img src="images/v.png" style={{height:"60px"}}></img>
                <h5 className="m-t-15 m-b-15"><strong>VALID</strong></h5>
                <div style={{paddingLeft:"20px", paddingRight:"20px"}}>
                <h6>Mengedepankan validitas metode kerja maupun terhadap kualitas hasil survey yang akan dimanfaatkan oleh banyak pihak</h6>
                </div>
              </center>
            </Col>

            <Col md={12} lg={12} className="m-t-15">
              <center>
                <img src="images/plus.png" style={{height:"60px"}}></img>
                <h5 className="m-t-15 m-b-15"><strong>PLUS</strong></h5>
                <div style={{paddingLeft:"30px", paddingRight:"30px"}}>
                <h6>Memberikan manfaat plus-plus, antara lain sebagai fasilitator penyelenggaraan survey bagi surveyor atau peneliti, dan memberikan tambahan penghasilan bagi para responden</h6>
                </div>
              </center>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="section-one-sisip" >
        <Container style={{position:'relative', zIndex:'1'}}>
          <Row>
            <Col md={12} lg={12}>
              <h3 className="text-center title-one" ><strong>Bagaimana Survplus Bekerja</strong></h3>
            </Col>
          </Row>

          <Row className="m-t-30">
            <Col md={12} lg={12}>
              <img src="images/survplus_bekerja2.svg" style={{width:'100%'}}></img>
            </Col>
          </Row>
        </Container>

        <div style={{width: '100%',backgroundColor:'rgba(225,225,225,0.92)', position:'absolute', top:'0', bottom:'0', left:'0', right:'0'}}></div>
      </div>


      

      <div id="section-three-sisip">
        <Container>
          <Row>
            <Col md={12} lg={12}>
            <h3 className="text-center title-one"><strong>Cara Bergabung Dengan Survplus</strong></h3>
            </Col>
          </Row>

          <Row className="m-t-30">
            <Col md={12} lg={12}>
              <img src="images/cara_gabung.svg" style={{width:'100%'}}></img>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="section-two-sisip">
        <Container>
          <Row>
            <Col md={12} lg={12}>
            <h3 className="text-center title-one"><strong>Responden Survplus</strong></h3>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="section-four-sisip">
        <Container>
          <Row>
            <Col md={12} lg={12}>
            <h3 className="text-center title-one"><strong>Studi untuk Responden</strong></h3>
            </Col>
          </Row>

          <Row className="m-t-30">
            <Col md={12} lg={12}>
              <div>
                <Slider {...settingslidertwo}>
                  <div>
                    <img src="images/CaraIkutStudi.jpg" style={{width:'100%'}}></img>
                  </div>

                  <div>
                    <img src="images/CaraDapatStudi.png" style={{width:'100%'}}></img>
                  </div>

                  <div>
                    <img src="images/Group 232.jpg" style={{width:'100%'}}></img>
                  </div>
                </Slider>
              </div>
            </Col>

            {/* <Col md={7} lg={7}>
              <img src="https://via.placeholder.com/650x500?text=1" style={{width:'100%'}}></img>
            </Col> */}
          </Row>
        </Container>
      </div>

      <div id="section-five-sisip">
        <Container>
          <Row>
            <Col md={7} lg={7} xs={12} sm={12}>
              <Row>
                <Col md={12} lg={12}>
                <h3 className="text-center title-one"><strong>Ilustrasi Survei melalui Survplus</strong></h3>
                </Col>
              </Row>
              <Row className="m-t-30">
                <Col md={12} lg={12}>
                <video autoPlay muted loop style={{width:'100%'}}>
                  <source src="images/SuRvPlus Banner.mp4" type="video/mp4"/>
                </video>
                </Col>
              </Row>
            </Col>

            <Col md={5} lg={5} xs={12} sm={12}>
              <Row>
                <Col md={12} lg={12}>
                <h3 className="text-center title-one"><strong>Frequently Asked Question</strong></h3>
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
                   
                  </Accordion>
                </Col>
              </Row>
                  
            </Col>
          </Row>
        </Container>
      </div>

      <div id="section-six-sisip">
        <Container>
          <Row>
            <Col md={12} lg={12}>
              <h3 className="text-center title-one"><strong>Perusahaan yang Telah Bekerjasama</strong></h3>
            </Col>
          </Row>

          <Row className="m-t-30 d-none d-none d-xl-block d-none d-lg-block d-xl-none d-none d-md-block d-lg-none">
            <Col md={12} lg={12}>
              <Slider {...settings}>
                {
                  perusahaanImg.map((data, i) => {
                    return(
                      <div key={i}>
                        <img src={`https://backoffice.survplus.id/foto/${data.icon}`} style={{height:'100px'}}></img>
                      </div>
                    )
                  })
                }
              </Slider>
            </Col>
          </Row>


          <Row className="d-none d-none d-sm-block d-md-none d-block d-sm-none m-t-30">
            <Col xs={12} sm={12}>
            <ul className="list-inline text-center m-b-0">
            {
            perusahaanImg.map((data, i) => {
              return(
                
                  <li className="list-inline-item">
                    <img src={`https://backoffice.survplus.id/foto/${data.icon}`} style={{width:'100px'}}></img>
                  </li>
              )
            })
            
          }
            </ul>
            </Col>
          
          </Row>
        </Container>
      </div>
      <Footer/>

      <Modal
        size="lg"
        show={surShow}
        onHide={() => setSurShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Surveyor
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Surveyor adalah pihak yang membutuhkan pendapat dari responden untuk dijadikan
pertimbangan dalam pengambilan keputusan. Dalam mengumpulkan pendapat responden,
surveyor menyusun dan merilis kuesioner kepada calon responden di dalam sistem Survplus.
Survplus sangat memahami kebutuhan surveyor untuk mengumpulkan pendapat responden
yang berkualitas, relevan dan valid dalam jumlah besar secara cepat.</p><br/>
<p>Untuk itu, Survplus telah menyediakan berbagai instrumen handal yang dibutuhkan surveyor
dalam melakukan survey dengan kuesioner, sebagai berikut:</p>
<ul className="list-unstyled m-b-0">
                      <li className="list-item">
                      1. Pembuatan kuesioner dengan pilihan jenis jawaban dalam bentuk teks dan pilihan
ganda (single maupun multi select);
                      </li>
                      <li className="list-item">
                      2. Penyaringan responden yang ditentukan oleh surveyor sesuai kebutuhan berdasarkan
variabel demografi maupun ketertarikan;
                      </li>
                      <li className="list-item">
                      3. Pengumpulan isian kuesioner oleh responden secara realtime yang dapat dipantau oleh
surveyor untuk diverifikasi;
                      </li>

                      <li className="list-item">
                      4. Surveyor akan menerima detail jawaban dari setiap responden dan rekapitulasi secara
keseluruhan.
                      </li>
                </ul>



<br/>
<p>Berikut langkah-langkah mudah untuk bergabung menjadi surveyor:</p>
<ul className="list-unstyled m-b-0">
                      <li className="list-item">
                      1. Lakukan pendaftaran akun;
                      </li>
                      <li className="list-item">
                      2. Verifikasi pada alamat email yang digunakan;
                      </li>
                      <li className="list-item">
                      3. Login menggunakan email dan password yang didaftarkan;
                      </li>

                      <li className="list-item">
                      4. Memanfaatkan Survplus untuk melakukan survei dengan kuesioner.
                      </li>
                </ul>




        </Modal.Body>
      </Modal>

      <Modal
        size="lg"
        show={resShow}
        onHide={() => setResShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Responden
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={12} lg={12}>
              <p>Responden memberikan pendapat langsung
                melalui Survplus dalam form kuesioner survei yang dibuat oleh surveyor atau juga yang dibuat
                oleh Survplus.</p>
                <br/>
                <p>Survplus sangat mengapresiasi upaya dan waktu yang didedikasikan responden untuk mengisi
                kuesioner. Untuk itu Survpus memberikan kompensasi yang layak bagi responden, antara lain:</p>
                <ul className="list-unstyled m-b-0">
                      <li className="list-item">
                      1. Pemasukan finansial dalam bentuk saldo yang sewaktu-waktu dapat dicairkan;
                      </li>
                      <li className="list-item">
                      2. Kesempatan dalam mengetahui hal-hal baru;
                      </li>
                      <li className="list-item">
                      3. Ruang untuk mengekspresikan pendapat yang akan dijadikan pertimbangan perbaikan layanan produk atau jasa yang digunakan responden.
                      </li>
                </ul>
                
               
               
                <br/>
                <p>Berikut langkah-langkah mudah untuk bergabung menjadi responden Survplus:</p>
                <ul className="list-unstyled m-b-0">
                      <li className="list-item">
                      1. Lakukan pendaftaran akun;
                      </li>
                      <li className="list-item">
                      2. Verifikasi pada alamat email yang digunakan;
                      </li>
                      <li className="list-item">
                      3. Login menggunakan email dan password yang didaftarkan;
                      </li>

                      <li className="list-item">
                      4. Mengisi kuesioner perkenalan untuk memberikan gambaran cara pengisian kuesioner dan sekaligus melakukan aktivasi status responden.
                      </li>
                </ul>
                
                
               
                <br/>
                <p>Setelah status responden Anda aktif, Anda dapat mengeksplorasi menu dalam Survplus, antara
                lain: melengkapi ketertarikan, mengisi kuesioner yang ditawarkan, menerima pemasukan
                finansial dalam saldo, melakukan penarikan saldo.</p>
                <p>Anda akan menerima pemasukan dalam saldo setelah mengisi kuesioner dan selesai
                diverifikasi. Besaran pemasukan yang akan Anda terima bervariasi yang dapat dilihat dalam
                informasi setiap kuesioner yang masuk.</p>
                <p>Pengisian kuesioner yang akan ditawarkan kepada Anda adalah kuesioner yang relevan
                dengan profil dan ketertarikan anda yang ditentukan oleh pembuat kuesioner. Hal ini berarti,
                semakin lengkap anda mengisi ketertarikan Anda, maka semakin besar peluang tawaran
                pengisian kuesioner serta pemasukan finansial yang dapat Anda terima.
              </p>

            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  )
}

      

export default withRouter(LandingPage)