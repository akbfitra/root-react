import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, Link, useParams } from 'react-router-dom'

import './css/style.css';
import { Container, Row, Col, Button, Table} from 'react-bootstrap'
import moment from 'moment'
import NumberFormat from 'react-number-format';

import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'

import { FIND_STUDY_WITH_RESPONDEN_BY_ID } from '../../../store/actions/surveyFormAction'

const DetailStudyResponden = (props) => {
  const dispatch = useDispatch()
  const params = useParams()

  let { studyId } = params
  const [ detailStudy, setDetailStudy ] = useState('')
  const [ jumlahQuestionsLength, setJumlahQuestionslength ] = useState(0)
  const [ cekUserCompleted, setUserCompleted] = useState(undefined)

  const getListStudyById = () => {
    dispatch(FIND_STUDY_WITH_RESPONDEN_BY_ID(studyId))
      .then( data => {
        setDetailStudy(data.data)
        setJumlahQuestionslength(data.data.questions.length)
        setUserCompleted(Boolean(data.userCompleted))
      })
  }

  useEffect( () => {
    if(!detailStudy){
      getListStudyById()
    }
  },[])

  console.log(cekUserCompleted)
  console.log(detailStudy)
  // let a = detailStudy.completedUser.find(el => el.userId ===)
  return(
    <>
    <Navbar/>

      <div id="detail-study">
      <Container>
        <Row>
          <Col md={{ span: 8, offset:2}} lg={{ span: 8, offset:2}}>
            <h3 className="title-one text-center color-blue"><strong>Detail Studi</strong></h3>
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <Link to='/responden' style={{textDecoration:"none"}}>
                  <h4 className="title-three color-blue">Beranda Responden</h4>
                  </Link>
                </li>

                <li className="list-inline-item">|</li>

                <li className="list-inline-item">
                  <Link to='/responden/submission' style={{textDecoration:"none"}}>
                  <h4 className="title-three color-blue">Studi Responden</h4>
                  </Link>
                </li>

                <li className="list-inline-item">|</li>
                <li className="list-inline-item">
                  <h4 className="title-three">Detail Studi Responden</h4>
                </li>
              </ul>
          </Col>
        </Row>
        <Row className="m-t-30">
          <Col md={12} lg={12}>
            <div className="part-one table-no-border">
              <Row>
                <Col md={12} lg={12}>
                <Table striped bordered>
                  <tbody>
                    <tr>
                      <td style={{width:"300px"}}>Judul Studi</td>
                      <td style={{width:"1px"}}>:</td>
                      <td> { detailStudy.judul } </td>
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
                      <td> {moment(detailStudy.tanggalMulai).format("DD/MM/YYYY")}</td>
                    </tr>

                    <tr>
                      <td>Tanggal Akhir</td>
                      <td>:</td>
                      <td> {moment(detailStudy.tanggalAkhir).format("DD/MM/YYYY")} </td>
                    </tr>
                  </tbody>
                </Table>
                </Col>

                <Col md={12} lg={12}>
                  <ul className="list-inline text-right m-b-0">
                    {/* <Link to={`/responden/study/${ detailStudy._id }`}>
                      <li className="list-inline-item">
                        <Button variant="primary" >Mulai Studi</Button>
                      </li>
                    </Link> */}

                    <li className="list-inline-item">|</li>
                    {
                      cekUserCompleted === true ?
                        <Link to={`/responden/study/completed/${ detailStudy._id }`}>
                          <li className="list-inline-item">
                            <Button variant="primary">Pertanyaan dan Jawaban Anda</Button>
                          </li>
                        </Link>
                      :
                      <Link to={`/responden/study/${ detailStudy._id }`}>
                        <li className="list-inline-item">
                          <Button variant="primary">Jawab Pertanyaan</Button>
                        </li>
                      </Link>
                    }
                  </ul>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      </div>

      <Footer/>
    </>
  )
}

export default withRouter(DetailStudyResponden)