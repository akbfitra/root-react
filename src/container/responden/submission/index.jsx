import React,{ useState, useEffect } from 'react';

import { withRouter, Link } from 'react-router-dom'
import { useDispatch  } from 'react-redux';

import './css/style.css';
import { Container, Row, Col, Tabs, Tab, Button} from 'react-bootstrap'
import moment from 'moment'

import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'

import { FIND_STUDY_WITH_RESPONDEN, COMPLETED_USER} from '../../../store/actions/surveyFormAction'

const SubmissionResponden = (props) => {
  const dispatch = useDispatch()
  const [ submission, setSubmission ] = useState([])
  const [ completedSubmission, setCompletedSubmission ] = useState([])

  const getDataSubmission = () => {
    dispatch(FIND_STUDY_WITH_RESPONDEN())
      .then( data => {
        setSubmission(data)
      })
  }

  useEffect(() => {
    if(!submission.length){
      getDataSubmission()
    }
  }, [])

  const getDataCompletedSubmission = () => {
    dispatch(COMPLETED_USER())
      .then( data => {
        setCompletedSubmission(data)
      })
  }

  useEffect( () => {
    getDataCompletedSubmission()
  }, [])

  console.log(submission)
  console.log(completedSubmission)

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
          <Col>
            <Tabs defaultActiveKey="Belum Terlaksana" id="noanim-tab-example">
                <Tab eventKey="Belum Terlaksana" title="Studi Belum Terlaksana">
                  {
                    submission.map((data, i) => {
                      return(
                        <Row className="m-t-15" key={i}>
                          <Col md={12} lg={12}>
                            <div className="part-one">
                              <Row>
                                <Col md={12} lg={12}>
                                  <div className="box">
                                    <div className="box-left">
                                    <h4 className="m-t-0 m-b-0 title-two"><strong>{ data.judul }</strong></h4>
                                    <h4 className="m-t-5 m-b-0 title-three">Penyelenggara studi : </h4>
                                    <h4 className="m-t-5 m-b-0 title-three">Tanggal akhir studi : {moment(data.tanggalAkhir).format("DD/MM/YYYY")}</h4>
                                    </div>
                                    <div className="box-right">
                                    
                                    <h4 className="title-two text-center">
                                      <p className="text-center" style={{fontSize:'14px'}}>Reward Responden</p>
                                      <strong>Rp {data.rewardResponden},-</strong>
                                    </h4>
                                      <Link to={`/responden/detailstudy/${data._id}`} style={{textDecoration:'none'}}>
                                        <Button variant="danger btn-block" className="m-t-15">Gabung Studi</Button>
                                      </Link>
                                    </div>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </Col>
                        </Row>
                      )
                    })
                  }
                </Tab>

                <Tab eventKey="Sudah Terlaksana" title="Studi Sudah Terlaksana">
                  {
                    !completedSubmission.length
                    ? 
                    
                      <h1>Tidak ada data</h1>
                    
                    :
                      completedSubmission.map((data,i) => {
                        return(
                          <Row className="m-t-15" key={i}>
                            <Col md={12} lg={12}>
                              <div className="part-one">
                                <Row>
                                  <Col md={12} lg={12}>
                                    <div className="box">
                                      <div className="box-left">
                                      <h4 className="m-t-0 m-b-0 title-two"><strong> {data.judul} </strong></h4>
                                      <h4 className="m-t-5 m-b-0 title-three">Penyelenggara studi : </h4>
                                      <h4 className="m-t-5 m-b-0 title-three">Tanggal akhir studi : {moment(data.tanggalAkhir).format("DD/MM/YYYY")} </h4>
                                      </div>
                                      <div className="box-right">
                                        <h4 className="title-two text-center">
                                        <p className="text-center" style={{fontSize:'14px'}}>Reward Responden</p>
                                          <strong>
                                            Rp {data.rewardResponden},-
                                          </strong>
                                        </h4>
                                        <Link to={`/responden/detailstudy/${data._id}`} style={{textDecoration:'none'}}>
                                          <Button variant="success btn-block" className="m-t-15">Detail Studi</Button>
                                        </Link>
                                      </div>
                                    </div>
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