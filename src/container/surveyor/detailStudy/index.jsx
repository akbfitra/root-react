import React from 'react';

import { withRouter, Link } from 'react-router-dom'

import './css/style.css';
import { Container, Row, Col, Button, Table, Tabs, Tab} from 'react-bootstrap'

import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'

const DetailStudyResponden = (props) => {
  return(
    <>
    <Navbar/>

      <div id="detail-study">
      <Container>
        <Row>
          <Col md={{ span: 8, offset:2}} lg={{ span: 8, offset:2}}>
            <h3 className="title-one text-center"><strong>Detail Study</strong></h3>
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <Link to='/surveyor' style={{textDecoration:"none"}}>
                  <h4 className="title-three">Dashboard Surveyor</h4>
                  </Link>
                </li>

                <li className="list-inline-item">|</li>

                <li className="list-inline-item">
                  <Link to='/surveyor/liststudy' style={{textDecoration:"none"}}>
                  <h4 className="title-three">Data Study</h4>
                  </Link>
                </li>

                <li className="list-inline-item">|</li>
                <li className="list-inline-item">
                  <h4 className="title-three">Detail Study Surveyor</h4>
                </li>
              </ul>
          </Col>
        </Row>
        <Row className="m-t-30">
          <Col md={12} lg={12}>
            <div className="part-one">
              <Row>
                <Col md={12} lg={12}>
                  <Tabs defaultActiveKey="study" id="noanim-tab-example">
                    <Tab eventKey="study" title="Detail Study" className="m-t-15">
                      <Row>
                        <Col md={12} lg={12} className="table-no-border">
                            <Table striped bordered>
                              <tbody>
                                <tr>
                                  <td style={{ width: "300px" }}>Judul Study</td>
                                  <td style={{ width: "1px" }}>:</td>
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
                      </Row>
                    </Tab>

                    <Tab eventKey="responden" title="Data Responden" className="m-t-15">
                      <Row>
                        <Col md={12} lg={12}>
                          <Table striped bordered>
                            <thead>
                              <tr>
                                <th>No.</th>
                                <th>Responden</th>
                                <th>Option</th>
                              </tr>
                            </thead>


                            <tbody>
                              <tr>
                                <td>1.</td>
                                <td>-</td>
                                  <td><Button variant="primary" href="#">Detail Jawaban</Button></td>
                              </tr>
                            </tbody>
                          </Table>
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