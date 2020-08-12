import React,{ useState, useEffect } from 'react';

import { withRouter, Link } from 'react-router-dom'
import { useDispatch  } from 'react-redux';

import './css/style.css';
import { Container, Row, Col, Tabs, Tab, Button, Badge} from 'react-bootstrap'
import moment from 'moment'
import NumberFormat from 'react-number-format';

import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'

import { FIND_STUDY_WITH_RESPONDEN, COMPLETED_USER, GET_DATA_ONGOING_RESPONDEN} from '../../../store/actions/surveyFormAction'

const SubmissionResponden = (props) => {
  const dispatch = useDispatch()
  const [ submission, setSubmission ] = useState([])
  const [ completedSubmission, setCompletedSubmission ] = useState([])
  const [ sedangBerlangsung, setSedangBerlangsung ] = useState([])
  const [ cekVerifikasiUser, setCekVerifikasiUser ] = useState('')

  const getDataSubmission = () => {
    dispatch(FIND_STUDY_WITH_RESPONDEN())
      .then( data => {
        setSubmission(data)
      })
  }

  console.log(sedangBerlangsung)
  console.log(completedSubmission)

  useEffect(() => {
    if(!submission.length){
      getDataSubmission()
    }
  }, [])

  const getDataCompletedSubmission = () => {
    dispatch(COMPLETED_USER())
      .then( data => {
        setCompletedSubmission(data.data)
        setCekVerifikasiUser(data.userId)
      })
  }

  const getStudyOngoing = () => {
    dispatch(GET_DATA_ONGOING_RESPONDEN())
      .then( data => {
        setSedangBerlangsung(data)
      })
  }

  useEffect( () => {
    getDataCompletedSubmission()
  }, [])

  useEffect(() => {
    getStudyOngoing()
  },[])

  return(
    <>
    <Navbar/>

      <div id="submission-responden">
      <Container>
        <Row>
          <Col md={{ span: 8, offset:2}} lg={{ span: 8, offset:2}}>
            <h3 className="title-one text-center"><strong>Studi</strong></h3>
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <Link to='/responden' style={{textDecoration:"none"}}>
                  <h4 className="title-three">Beranda Responden</h4>
                  </Link>
                </li>

                <li className="list-inline-item">|</li>

                <li className="list-inline-item">
                <h4 className="title-three">Studi</h4>
                </li>
              </ul>
          </Col>
        </Row>
        <Row className="m-t-30">
          <Col xs={12} sm={12} md={12} lg={12}>
            <Tabs defaultActiveKey="Belum Terlaksana" id="noanim-tab-example">
                <Tab eventKey="Belum Terlaksana" title="Studi Belum Terlaksana">
                  {
                    !submission.length
                    ? 
                    <Row className="m-t-15">
                      <Col md={12} lg={12}>
                        <div className="part-one">
                          <h4 className="m-t-0 m-b-0">Tidak ada data ....</h4>
                        </div>
                      </Col>
                    </Row>
                    :
                    submission.map((data, i) => {
                      return(
                        <Row className="m-t-15" key={i}>
                          <Col md={12} lg={12}>
                            <div className="part-one">
                              {/* untuk dekstop */}
                              <Row className="d-none d-none d-xl-block d-none d-lg-block d-xl-none d-none d-md-block d-lg-none">
                                <Col md={12} lg={12}>
                                  <div className="box">
                                    <div className="box-left">
                                    <h4 className="m-t-0 m-b-0 title-two"><strong>{ data.judul }</strong></h4>
                                    {/* <h4 className="m-t-5 m-b-0 title-three">Penyelenggara studi : {data.userId.name}</h4> */}
                                    <h4 className="m-t-5 m-b-0 title-three">Tanggal akhir studi : {moment(data.tanggalAkhir).format("DD/MM/YYYY")}</h4>
                                    </div>
                                    <div className="box-right">
                                    
                                    <h4 className="title-two text-center">
                                      <p className="text-center" style={{fontSize:'14px'}}>Reward Responden</p>
                                      <strong><NumberFormat value={data.rewardResponden} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp'} />,-</strong>
                                    </h4>
                                      <Link to={`/responden/detailstudy/${data._id}`} style={{textDecoration:'none'}}>
                                        <Button variant="danger btn-block" className="m-t-15">Gabung Studi</Button>
                                      </Link>
                                    </div>
                                  </div>
                                </Col>
                              </Row>

                              {/* untuk mobile */}
                              <Row className="d-none d-none d-sm-block d-md-none d-block d-sm-none">
                                <Col xs={12} sm={12}>
                                <h4 className="m-t-0 m-b-0 title-two"><strong>{ data.judul }</strong></h4>
                                    {/* <h4 className="m-t-5 m-b-0 title-three">Penyelenggara studi : {data.userId.name}</h4> */}
                                    <h4 className="m-t-5 m-b-0 title-three">Tanggal akhir studi : {moment(data.tanggalAkhir).format("DD/MM/YYYY")}</h4>
                                    <h4 className="m-t-5 m-b-0 title-three">Reward Responden : <NumberFormat value={data.rewardResponden} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp'} /></h4>
                                    <Link to={`/responden/detailstudy/${data._id}`} style={{textDecoration:'none'}}>
                                        <Button variant="danger" className="m-t-15">Gabung Studi</Button>
                                    </Link>
                                </Col>
                              </Row>
                            </div>
                          </Col>
                        </Row>
                      )
                    })
                  }
                </Tab>

                <Tab eventKey="Sedang Berlangsung" title="Studi Sedang Berlangsung">
                {
                    !sedangBerlangsung.length
                    ? 
                    <Row className="m-t-15">
                      <Col md={12} lg={12}>
                        <div className="part-one">
                          <h4 className="m-t-0 m-b-0">Tidak ada data ....</h4>
                        </div>
                      </Col>
                    </Row>
                    :
                      sedangBerlangsung.map((data,i) => {
                        return(
                          <Row className="m-t-15" key={i}>
                            <Col md={12} lg={12}>
                              <div className="part-one">
                                {/* untuk dekstop */}
                                <Row className="d-none d-none d-xl-block d-none d-lg-block d-xl-none d-none d-md-block d-lg-none">
                                  <Col md={12} lg={12}>
                                    <div className="box">
                                      <div className="box-left">
                                      <h4 className="m-t-0 m-b-0 title-two"><strong> {data.judul} </strong></h4>
                                      {/* <h4 className="m-t-5 m-b-0 title-three">Penyelenggara studi : {data.userId.name}</h4> */}
                                      <h4 className="m-t-5 m-b-0 title-three">Tanggal akhir studi : {moment(data.tanggalAkhir).format("DD/MM/YYYY")} </h4>
                                      </div>
                                      <div className="box-right">
                                        <h4 className="title-two text-center">
                                        <p className="text-center" style={{fontSize:'14px'}}>Reward Responden</p>
                                          <strong>
                                          <NumberFormat value={data.rewardResponden} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp'} />,-
                                          </strong>
                                        </h4>
                                        <Link to={`/responden/detailstudy/${data._id}`} style={{textDecoration:'none'}}>
                                          <Button variant="success btn-block" className="m-t-15">Detail Studi</Button>
                                        </Link>
                                      </div>
                                    </div>
                                  </Col>
                                </Row>

                                {/* untuk mobile */}
                                <Row className="d-none d-none d-sm-block d-md-none d-block d-sm-none">
                                  <Col xs={12} sm={12}>
                                      <h4 className="m-t-0 m-b-0 title-two"><strong> {data.judul} </strong></h4>
                                      {/* <h4 className="m-t-5 m-b-0 title-three">Penyelenggara studi : {data.userId.name}</h4> */}
                                      <h4 className="m-t-5 m-b-0 title-three">Tanggal akhir studi : {moment(data.tanggalAkhir).format("DD/MM/YYYY")} </h4>
                                      <h4 className="m-t-5 m-b-0 title-three">Reward :  <NumberFormat value={data.rewardResponden} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp'} />,-</h4>
                                      <Link to={`/responden/detailstudy/${data._id}`} style={{textDecoration:'none'}}>
                                        <Button variant="success" className="m-t-15">Detail Studi</Button>
                                      </Link>
                                  </Col>
                                </Row>
                              </div>
                            </Col>
                          </Row>
                        )
                      })
                  }
                </Tab>

                <Tab eventKey="Sudah Telah Di Ajukan" title="Studi Telah Di Ajukan">
                  {
                    !completedSubmission.length
                    ? 
                    <Row className="m-t-15">
                      <Col md={12} lg={12}>
                        <div className="part-one">
                          <h4 className="m-t-0 m-b-0">Tidak ada data ....</h4>
                        </div>
                      </Col>
                    </Row>
                    :
                      completedSubmission.map((data,i) => {
                        let userVerifikasi = {verifikasiSelesai: false}
                        console.log(cekVerifikasiUser)
                        data && cekVerifikasiUser ? userVerifikasi = data.completedUser.find(el => el.userId === cekVerifikasiUser) : userVerifikasi= {verifikasiSelesai: false}
                        let dataUsers = userVerifikasi.verifikasiSelesai
                        
                        let alasan = userVerifikasi.alasan
                        console.log(alasan)
                        
                        return(
                          <Row className="m-t-15" key={i}>
                            <Col md={12} lg={12}>
                              <div className="part-one">
                                {/* untuk dekstop */}
                                <Row className="d-none d-none d-xl-block d-none d-lg-block d-xl-none d-none d-md-block d-lg-none">
                                  <Col md={12} lg={12}>
                                    <div className="box">
                                      <div className="box-left">
                                      <h4 className="m-t-0 m-b-0 title-two"><strong> {data.judul} </strong></h4>
                                     
                                      {
                                        dataUsers === 'true' ? 
                                        <>
                                        <h4 className="m-t-0 m-b-0 title-two"><Badge variant="success"> Telah Di Terima </Badge></h4>
                                        </>
                                        : dataUsers === 'false' ? 
                                        <>
                                          <h4 className="m-t-0 m-b-0 title-two"><Badge variant="secondary"> Baru Di Review </Badge></h4>
                                        </>
                                        :
                                        <>
                                          <h4 className="m-t-0 m-b-0 title-two"><Badge variant="danger"> Telah Di Tolak </Badge></h4>
                                        </>
                                      }
                                      {/* <h4 className="m-t-0 m-b-0 title-two"><Badge variant="danger"> Telah Di Tolak </Badge></h4> */}

                                      <h4 className="m-t-5 m-b-0 title-three">Penyelenggara studi : {data.userId.name}</h4>
                                      <h4 className="m-t-5 m-b-0 title-three">Tanggal akhir studi : {moment(data.tanggalAkhir).format("DD/MM/YYYY")} </h4>
                                      <h4 className="m-t-5 m-b-0 title-three">Alasan : {alasan}</h4>
                                      </div>
                                      <div className="box-right">
                                        <h4 className="title-two text-center">
                                        <p className="text-center" style={{fontSize:'14px'}}>Reward Responden</p>
                                          <strong>
                                          <NumberFormat value={data.rewardResponden} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp'} />,-
                                          </strong>
                                        </h4>
                                        <Link to={`/responden/detailstudy/${data._id}`} style={{textDecoration:'none'}}>
                                          <Button variant="success btn-block" className="m-t-15">Detail Studi</Button>
                                        </Link>
                                      </div>
                                    </div>
                                  </Col>
                                </Row>

                                {/* untuk mobile */}
                                <Row className="d-none d-none d-sm-block d-md-none d-block d-sm-none">
                                  <Col xs={12} sm={12}>
                                      <h4 className="m-t-0 m-b-0 title-two"><strong> {data.judul} </strong></h4>
                                      {
                                        dataUsers === 'true' ? 
                                        <>
                                        <h4 className="m-t-0 m-b-0 title-two"><Badge variant="success"> Telah Di Terima </Badge></h4>
                                        </>
                                        : dataUsers === 'false' ? 
                                        <>
                                          <h4 className="m-t-0 m-b-0 title-two"><Badge variant="secondary"> Baru Di Review </Badge></h4>
                                        </>
                                        :
                                        <>
                                          <h4 className="m-t-0 m-b-0 title-two"><Badge variant="danger"> Telah Di Tolak </Badge></h4>
                                        </>
                                      }
                                      <h4 className="m-t-5 m-b-0 title-three">Penyelenggara studi : {data.userId.name}</h4>
                                      <h4 className="m-t-5 m-b-0 title-three">Tanggal akhir studi : {moment(data.tanggalAkhir).format("DD/MM/YYYY")} </h4>
                                      <h4 className="m-t-5 m-b-0 title-three">Reward :   <NumberFormat value={data.rewardResponden} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp'} />,-</h4>
                                      <h4 className="m-t-5 m-b-0 title-three">Alasan : {alasan}</h4>
                                      <Link to={`/responden/detailstudy/${data._id}`} style={{textDecoration:'none'}}>
                                        <Button variant="success" className="m-t-15">Detail Studi</Button>
                                      </Link>
                                  </Col>
                                </Row>
                              </div>
                            </Col>
                          </Row>
                        )
                      })
                  }
                </Tab>
            </Tabs>
          </Col>
          
        </Row>
      </Container>
      </div>

      <Footer/>
    </>
  )
}

export default withRouter(SubmissionResponden)