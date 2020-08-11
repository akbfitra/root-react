import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom'
import { useDispatch  } from 'react-redux';

import './css/style.css';
import {  Container, Row, Col, Table, Button, Alert} from 'react-bootstrap'

import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'
import moment from 'moment'

import { FIND_STUDY_USER } from '../../../store/actions/surveyFormAction'

const ListStudy = () => {
  const dispatch = useDispatch()
  const [ dataSurvey , setDataSurvey ] = useState([])
  // const [ numberOfQuestions, setNumberOfQuestions ] = useState([])
  
  useEffect( () => {
    if(!dataSurvey.length){
      loadDataSurvey()
    }
  }, [])
  
  // console.log(dataSurvey)
  const loadDataSurvey = () => {
    dispatch(FIND_STUDY_USER())
      .then( data => {
        setDataSurvey(data)
        // setNumberOfQuestions(data.questions.length)
      })
  }


  return(
    <>
      <Navbar/>

      <div id="form-surveyor">
      <Container>
        <Row>
          <Col md={{ span: 8, offset:2}} lg={{ span: 8, offset:2}}>
            <h3 className="title-one text-center"><strong>Data Studi</strong></h3>
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <Link to='/surveyor' style={{textDecoration:"none"}}>
                  <h4 className="title-three">Beranda Surveyor</h4>
                  </Link>
                </li>
                <li className="list-inline-item">|</li>
                <li className="list-inline-item">
                  <h4 className="title-three">Data Studi</h4>
                </li>
              </ul>
          </Col>
        </Row>
        
        <Row className="m-t-30">
          <Col md={12} lg={12}>
          <Link to='/surveyor/form'>
            <Button variant="primary" >Tambah Studi</Button>
          </Link>
          </Col>

          {
            dataSurvey.map((data, i) => {
              return(
                <Col key={i} md={12} lg={12} className="m-t-15">
                  <div className="part-one-list">
                    <Row>
                      <Col md={12} lg={12}>
                      <h4 className="m-t-0 m-b-0 title-two"><strong>{data.judul}</strong></h4>
                      </Col>
                    </Row>

                    <Row className="m-t-15">
                      <Col md={5} lg={5} className="table-no-border">
                        <Alert variant="success">
                          <Table bordered size="sm" className="m-b-0">
                            <tbody>
                              <tr>
                                <td style={{width:"220px"}}>Jumlah Soal</td>
                                <td style={{width:"1px"}}>:</td>
                                <td>{data.questions.length }</td>
                              </tr>

                              <tr>
                                <td>Waktu Menjawab Soal (menit)</td>
                                <td>:</td>
                                <td>{data.waktuJawab}</td>
                              </tr>

                              <tr>
                                <td>Jumlah Responden</td>
                                <td>:</td>
                                <td>{data.jumlahResponden}</td>
                              </tr>
                            </tbody>
                          </Table>
                        </Alert>
                      </Col>

                      <Col md={5} lg={5} className="table-no-border">
                      <Alert variant="success">
                          <Table bordered size="sm" className="m-b-0">
                            <tbody>
                              <tr>
                                <td style={{width:"220px"}}>Reward Per Responden</td>
                                <td style={{width:"1px"}}>:</td>
                                <td>Rp {data.rewardResponden},-</td>
                              </tr>

                              <tr>
                                <td>Tanggal Mulai</td>
                                <td>:</td>
                                <td>
                                  {moment(data.tanggalMulai).format("DD/MM/YYYY")}
                                </td>
                              </tr>

                              <tr>
                                <td>Tanggal Akhir</td>
                                <td>:</td>
                                <td>
                                {moment(data.tanggalAkhir).format("DD/MM/YYYY")}
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </Alert>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={12} lg={12}>
                        <Link to={`/surveyor/detailstudy/${data._id}`}>
                          <Button variant="primary">Detail Studi</Button>
                        </Link>
                        <br></br>
                        <Link to={`/surveyor/form/edit/${data._id}`}>
                          <Button variant="warning">Edit Studi</Button>
                        </Link>
                      </Col>
                    </Row>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Container>
      </div>

      <Footer/>
    </>
  )
}

export default withRouter(ListStudy)