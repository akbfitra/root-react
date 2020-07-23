import React,{ useState, useEffect } from 'react';

import { withRouter, Link } from 'react-router-dom'
import { useDispatch  } from 'react-redux';

import './css/style.css';
import { Container, Row, Col, Tabs, Tab, Button} from 'react-bootstrap'

import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'

import { FIND_STUDY_WITH_RESPONDEN} from '../../../store/actions/surveyFormAction'

const SubmissionResponden = (props) => {
  const dispatch = useDispatch()
  const [ submission, setSubmission ] = useState([])

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
  })

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
          <Col>
            <Tabs defaultActiveKey="Belum Terlaksana" id="noanim-tab-example">
                <Tab eventKey="Belum Terlaksana" title="Belum Terlaksana">
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
                                    <h4 className="m-t-0 m-b-0 title-two"><strong>{data.judul}</strong></h4>
                                    <h4 h4 className="m-t-5 m-b-0 title-three">{data.userId.name}</h4>
                                    <h4 h4 className="m-t-5 m-b-0 title-three">{data.tanggalAkhir}</h4>
                                    </div>
                                    <div className="box-right">
                                    <h4 className="title-two text-center"><strong>Rp {data.rewardResponden},-</strong></h4>
                                      <Link to='/responden/detailstudy'>
                                        <Button variant="danger btn-block" className="m-t-15">Join</Button>
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

                <Tab eventKey="Sudah Terlaksana" title="Sudah Terlaksana">
                    <Row className="m-t-15">
                      <Col md={12} lg={12}>
                        <div className="part-one">
                          <Row>
                            <Col md={12} lg={12}>
                              <div className="box">
                                <div className="box-left">
                                <h4 className="m-t-0 m-b-0 title-two"><strong>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequatQuis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat</strong></h4>
                                <h4 h4 className="m-t-5 m-b-0 title-three">PT. Maju Jaya Makmur Mandiri</h4>
                                <h4 className="m-t-5 m-b-0 title-three">6 hari yang akan lalu</h4>
                                </div>
                                <div className="box-right">
                                <h4 className="title-two text-center"><strong>Rp 100.000,-</strong></h4>
                                <Button href="/responden/detailstudy" variant="success btn-block" className="m-t-15">Detail</Button>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                    </Row>

                    <Row className="m-t-15">
                      <Col md={12} lg={12}>
                        <div className="part-one">
                          <Row>
                            <Col md={12} lg={12}>
                              <div className="box">
                                <div className="box-left">
                                <h4 className="m-t-0 m-b-0 title-two"><strong>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequatQuis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat</strong></h4>
                                <h4 h4 className="m-t-5 m-b-0 title-three">PT. Maju Jaya Makmur Mandiri</h4>
                                <h4 className="m-t-5 m-b-0 title-three">6 hari yang akan lalu</h4>
                                </div>
                                <div className="box-right">
                                <h4 className="title-two text-center"><strong>Rp 100.000,-</strong></h4>
                                <Button href="/responden/submission/detailstudy" variant="success btn-block" className="m-t-15">Detail</Button>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                    </Row>
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