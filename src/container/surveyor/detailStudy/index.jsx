import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { withRouter, Link, useParams } from 'react-router-dom'
import moment from 'moment'
import { FaDownload } from 'react-icons/fa'

import './css/style.css';
import { Container, Row, Col, Button, Table, Tabs, Tab, Badge} from 'react-bootstrap'
import NumberFormat from 'react-number-format';

import { FIND_STUDY_WITH_RESPONDEN_BY_ID, UPDATE_DATA_APPROVAL_RESPONDEN } from '../../../store/actions/surveyFormAction'

import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'

const DetailStudyResponden = (props) => {
  const dispatch = useDispatch()
  const params = useParams()

  let { studyId } = params
  const [ detailStudy, setDetailStudy ] = useState('')
  const [ jumlahQuestionsLength, setJumlahQuestionslength ] = useState(0)
  const [ completeUsers, setCompleteUsers ] = useState([])
  const [getChangeData, setGetChangeData ] = useState(false)


  const getListStudyById = () => {
    dispatch(FIND_STUDY_WITH_RESPONDEN_BY_ID(studyId))
      .then( data => {
        setDetailStudy(data.data)
        setJumlahQuestionslength(data.data.questions.length)
        setCompleteUsers(data.data.completedUser)
        setGetChangeData(false)
      })
  }

  console.log(detailStudy)

  useEffect( () => {
    if(!detailStudy || getChangeData){
      getListStudyById()
    }
  })

  const updatedDataApproval = (idResponden) => {
    setGetChangeData(true)
    dispatch(UPDATE_DATA_APPROVAL_RESPONDEN(studyId, idResponden))
  }



  return(
    <>
    <Navbar/>

      <div id="detail-study">
      <Container>
        <Row>
          <Col md={{ span: 8, offset:2}} lg={{ span: 8, offset:2}}>
            <h3 className="title-one text-center"><strong>Detail Studi</strong></h3>
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <Link to='/surveyor' style={{textDecoration:"none"}}>
                  <h4 className="title-three">Beranda Surveyor</h4>
                  </Link>
                </li>

                <li className="list-inline-item">|</li>

                <li className="list-inline-item">
                  <Link to='/surveyor/liststudy' style={{textDecoration:"none"}}>
                  <h4 className="title-three">Data Studi</h4>
                  </Link>
                </li>

                <li className="list-inline-item">|</li>
                <li className="list-inline-item">
                  <h4 className="title-three">Detail Studi Surveyor</h4>
                </li>
              </ul>
          </Col>
        </Row>
        <Row className="m-t-30">
                <Col md={12} lg={12}>
                  <Tabs defaultActiveKey="study" id="noanim-tab-example">
                    <Tab eventKey="study" title="Detail Studi" className="m-t-15">
                      <Row>
                        <Col md={12} lg={12} className="table-no-border">
                          <div className="part-one">
                            <Table striped bordered>
                              <tbody>
                                <tr>
                                  <td style={{ width: "300px" }}>Judul Studi</td>
                                  <td style={{ width: "1px" }}>:</td>
                                  <td> {detailStudy.judul} </td>
                                </tr>

                                <tr>
                                  <td>Jumlah Soal</td>
                                  <td>:</td>
                                  <td> { jumlahQuestionsLength } </td>
                                </tr>

                                <tr>
                                  <td>Waktu Menjawab Soal (menit)</td>
                                  <td>:</td>
                                  <td> { detailStudy.waktuJawab } </td>
                                </tr>

                                <tr>
                                  <td>Jumlah Responden Yang Dibutuhkan</td>
                                  <td>:</td>
                                  <td> { detailStudy.jumlahResponden } </td>
                                </tr>

                                <tr>
                                  <td>Reward Per Responden (Rp)</td>
                                  <td>:</td>
                                  <td> <NumberFormat value={detailStudy.rewardResponden} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp'} />,-</td>
                                </tr>

                                <tr>
                                  <td>Tanggal Mulai</td>
                                  <td>:</td>
                                  <td> {moment(detailStudy.tanggalMulai).format("DD/MM/YYYY")} </td>
                                </tr>

                                <tr>
                                  <td>Tanggal Akhir</td>
                                  <td>:</td>
                                  <td> {moment(detailStudy.tanggalAkhir).format("DD/MM/YYYY")} </td>
                                </tr>

                                <tr>
                                  <td>Umur Minimal Responden</td>
                                  <td>:</td>
                                  <td> {detailStudy.umurMin} tahun </td>
                                </tr>

                                <tr>
                                  <td>Umur Maksimal Responen</td>
                                  <td>:</td>
                                  <td> {detailStudy.umurMax} tahun </td>
                                </tr>

                                <tr>
                                  <td>Jumlah Responden Menjawab</td>
                                  <td>:</td>
                                  <td> {detailStudy ? detailStudy.completedUser.length : 0} </td>
                                </tr>

                                <tr>
                                  <td>Provinsi</td>
                                  <td>:</td>
                                  <td> {
                                      detailStudy &&
                                      detailStudy.daerah.length
                                    ? 
                                      detailStudy.daerah.map((data, i) => {
                                        return(
                                          <>
                                            {data.provinsi}
                                          </>
                                        )
                                      }).reduce((prev, curr) => [prev, ', ', curr])
                                    : 
                                      'semua provinsi di indonesia'
                                    } 
                                  </td>
                                </tr>

                                <tr>
                                  <td>Kab/Kota</td>
                                  <td>:</td>
                                  <td> {
                                      detailStudy &&
                                      detailStudy.daerah.length
                                    ? 
                                      detailStudy.daerah.map((data, i) => {
                                        
                                        return(
                                          <>
                                            {
                                              data['kabKota'].map((dataKota, i) => {
                                                return(
                                                  <>
                                                    { dataKota }
                                                  </>
                                                )
                                              }).reduce((prev, curr) => [prev, ', ', curr])
                                            }
                                          </>
                                        )
                                      }).reduce((acc, x) => acc === null ? x : <>{acc} | {x}</>, null)
                                    : 
                                      'semua kota di indonesia'
                                    } 
                                  </td>
                                </tr>

                                <tr>
                                  <td>Ketertarikan</td>
                                  <td>:</td>
                                  <td> { detailStudy ? detailStudy.kriteria.join(', ') : '-'} </td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                        </Col>
                      </Row>
                    </Tab>

                    <Tab eventKey="responden" title="Data Responden" className="m-t-15">
                      <Row>
                        <Col md={12} lg={12}>
                        <div className="part-one">
                          <Table striped bordered>
                            <thead>
                              <tr>
                                <th style={{textAlign:"center"}}>No.</th>
                                <th style={{textAlign:"center"}}>Responden</th>
                                <th style={{textAlign:"center"}}>Approval</th>
                                {/* <th style={{textAlign:"center"}}>Paid</th> */}
                                <th style={{textAlign:"center"}}>Option</th>
                                <th style={{textAlign:"center"}}>Download</th>
                              </tr>
                            </thead>


                            {/* <tbody> */}
                              {
                                !completeUsers.length ? 
                                <tbody>
                                  <tr>
                                    <td  style={{textAlign:"center"}}>-</td>
                                    <td>NoData</td>
                                    <td>-</td>
                                    {/* <td>-</td> */}
                                    <td>-</td>
                                    <td>-</td>
                                  </tr>
                                </tbody>
                                :
                                completeUsers.map((data, i) => {
                                  return(
                                    <tbody key={i}>
                                      <tr>
                                        <td  style={{textAlign:"center"}}> {i+1} </td>
                                        <td> {data.userId.name} </td>
                                        <td>
                                          <center>
                                            <Badge variant={data.verifikasiSelesai==='true' ? 'primary' : data.verifikasiSelesai==='false'? 'secondary' : 'danger' } > {data.verifikasiSelesai==='true' ? 'DITERIMA' : data.verifikasiSelesai==='false'? 'BELUM DIVERIVIKASI' : 'DITOLAK' } </Badge>
                                          </center>
                                        </td>
                                        {/* <td><center><Button variant="primary">Paid</Button></center></td> */}
                                        <td>
                                          <center>
                                            <Link to={`/surveyor/detailstudy/detailresponden/${studyId}/${data.userId._id}`}>
                                              <Button variant="info" >Detail Jawaban</Button>
                                            </Link>
                                          </center>
                                        </td>
                                        <td>
                                          <center>
                                            {/* <Link to={`/surveyor/detailstudy/detailresponden/${studyId}/${data.userId._id}`}> */}
                                            <a href= {`https://backoffice.survplus.id/cetak/${studyId}/${data.userId._id}`} target="_blank">
                                              <Button variant="info" >
                                                <FaDownload/>
                                              </Button>
                                            </a>
                                            {/* </Link> */}
                                          </center>
                                        </td>
                                      </tr>
                                    </tbody>
                                  )
                                })
                              }
                            {/* </tbody> */}
                          </Table>
                        </div>
                        </Col>
                      </Row>
                    </Tab>

                  </Tabs>
                </Col>
        </Row>
              {/* <Row>
                <Col md={12} lg={12}>
                <Table striped bordered>
                  <tbody>
                    <tr>
                      <td style={{width:"300px"}}>Judul Study</td>
                      <td style={{width:"1px"}}>:</td>
                      <td>-</td>
                    </tr>

                    <tr>
                      <td>Jumlah Soal</td>
                      <td>:</td>
                      <td>-</td>
                    </tr>

                    <tr>
                      <td>Waktu Menjawab Soal (menit)</td>
                      <td>:</td>
                      <td>-</td>
                    </tr>

                    <tr>
                      <td>Jumlah Responden Yang Dibutuhkan</td>
                      <td>:</td>
                      <td>-</td>
                    </tr>

                    <tr>
                      <td>Reward Per Responden (Rp)</td>
                      <td>:</td>
                      <td>-</td>
                    </tr>

                    <tr>
                      <td>Tanggal Mulai</td>
                      <td>:</td>
                      <td>-</td>
                    </tr>

                    <tr>
                      <td>Tanggal Akhir</td>
                      <td>:</td>
                      <td>-</td>
                    </tr>
                  </tbody>
                </Table>
                </Col>

                <Col md={12} lg={12}>
                  <ul className="list-inline text-right m-b-0">
                    <li className="list-inline-item">
                      <Button variant="primary" href="/responden/study">Mulai Study</Button>
                    </li>

                    <li className="list-inline-item">|</li>

                    <li className="list-inline-item">
                      <Button variant="primary" href="/responden/study">Detail Jawaban</Button>
                    </li>
                  </ul>
                </Col>
              </Row> */}
      </Container>
      </div>

      <Footer/>
    </>
  )
}

export default withRouter(DetailStudyResponden)