import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom'

import './css/style.css';
import { Tabs, Tab, Container, Row, Col, Table, Button, Alert} from 'react-bootstrap'

import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'

const ListStudy = () => {
  const [startDate, setStartDate] = useState(new Date());

  return(
    <>
      <Navbar/>

      <div id="form-surveyor">
      <Container>
        <Row>
          <Col md={{ span: 8, offset:2}} lg={{ span: 8, offset:2}}>
            <h3 className="title-one text-center"><strong>Data Study</strong></h3>
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <Link to='/surveyor' style={{textDecoration:"none"}}>
                  <h4 className="title-three">Dashboard Surveyor</h4>
                  </Link>
                </li>
                <li className="list-inline-item">|</li>
                <li className="list-inline-item">
                  <h4 className="title-three">Data Study</h4>
                </li>
              </ul>
          </Col>
        </Row>
        
        <Row>
          <Col md={12} lg={12}>
          <Button variant="primary" href="/surveyor/form">Tambah Study</Button>
          </Col>
          <Col md={12} lg={12} className="m-t-15">
            <div className="part-one-list">
              <Row>
                <Col md={12} lg={12}>
                  <h4 className="m-t-0 m-b-0 title-two"><strong>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequatQuis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat</strong></h4>
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
                          <td>00</td>
                        </tr>

                        <tr>
                          <td>Waktu Menjawab (menit)</td>
                          <td>:</td>
                          <td>00</td>
                        </tr>

                        <tr>
                          <td>Jumlah Responden</td>
                          <td>:</td>
                          <td>00</td>
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
                          <td>00</td>
                        </tr>

                        <tr>
                          <td>Tanggal Mulai</td>
                          <td>:</td>
                          <td>00</td>
                        </tr>

                        <tr>
                          <td>Jumlah Akhir</td>
                          <td>:</td>
                          <td>00</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Alert>
                </Col>
              </Row>

              <Row>
                <Col md={12} lg={12}>
                    <Button variant="primary" href="/surveyor/detailstudy">Detail Study</Button>
                </Col>
              </Row>
            </div>
          </Col>

          <Col md={12} lg={12} className="m-t-15">
            <div className="part-one-list">
              <Row>
                <Col md={12} lg={12}>
                  <h4 className="m-t-0 m-b-0 title-two"><strong>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequatQuis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat</strong></h4>
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
                          <td>00</td>
                        </tr>

                        <tr>
                          <td>Waktu Menjawab (menit)</td>
                          <td>:</td>
                          <td>00</td>
                        </tr>

                        <tr>
                          <td>Jumlah Responden</td>
                          <td>:</td>
                          <td>00</td>
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
                          <td>00</td>
                        </tr>

                        <tr>
                          <td>Tanggal Mulai</td>
                          <td>:</td>
                          <td>00</td>
                        </tr>

                        <tr>
                          <td>Jumlah Akhir</td>
                          <td>:</td>
                          <td>00</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Alert>
                </Col>
              </Row>

              <Row>
                <Col md={12} lg={12}>
                    <Button variant="primary" href="/surveyor/detailstudy">Detail Study</Button>
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

export default withRouter(ListStudy)