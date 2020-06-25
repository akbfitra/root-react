import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom'

import './css/style.css';
import { Tabs, Tab, Container, Row, Col, Form, Table, Button} from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { QuestionList } from '../../../components/form/questionList'
import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'

const FormSurveyor = () => {
  const [startDate, setStartDate] = useState(new Date());

  return(
    <>
      <Navbar/>

      <div id="form-surveyor">
      <Container>
        <Row>
          <Col md={{ span: 8, offset:2}} lg={{ span: 8, offset:2}}>
            <h3 className="title-one text-center"><strong>Form</strong></h3>
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <Link to='/surveyor' style={{textDecoration:"none"}}>
                  <h4 className="title-three">Dashboard Surveyor</h4>
                  </Link>
                </li>
                <li className="list-inline-item">|</li>
                <li className="list-inline-item">
                  <h4 className="title-three">Form</h4>
                </li>
              </ul>
          </Col>
        </Row>
        
        <Row>
          <Col md={12} lg={12}>
          <Button variant="primary" href="#">Tambah Study</Button>
          </Col>
          <Col md={12} lg={12} className="m-t-15">
            <div className="part-one-list">
              <Row>
                <Col md={12} lg={12}>
                  <h4 className="m-t-0 m-b-0 title-two"><strong>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequatQuis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat</strong></h4>
                </Col>
              </Row>

              <Row className="m-t-15">
                <Col md={5} lg={5}>
                  <Table striped size="sm">
                    <tbody>
                      <tr>
                        <td style={{width:"180px"}}>Jumlah Soal</td>
                        <td style={{width:"1px"}}>:</td>
                        <td>00</td>
                      </tr>

                      <tr>
                        <td>Jumlah Responden</td>
                        <td>:</td>
                        <td>00</td>
                      </tr>

                      <tr>
                        <td>Tanggal Mulai</td>
                        <td>:</td>
                        <td>00</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>

                <Col md={5} lg={5}>
                  <Table striped size="sm">
                    <tbody>
                      <tr>
                        <td style={{width:"180px"}}>Lama Menjawab (menit)</td>
                        <td style={{width:"1px"}}>:</td>
                        <td>00</td>
                      </tr>

                      <tr>
                        <td>Reward Perorang (Rp)</td>
                        <td>:</td>
                        <td>00</td>
                      </tr>

                      <tr>
                        <td>Tanggal Akhir</td>
                        <td>:</td>
                        <td>00</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>

                <Col md={2} lg={2}>
                  <Button variant="success" size="sm" href="#">Detail Study</Button>
                  <Button variant="warning" size="sm" className="m-t-5" href="#">Detail Pertanyaan</Button>
                  <Button variant="info" size="sm" className="m-t-5" href="#">Detail Jawaban</Button>
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
                <Col md={5} lg={5}>
                  <Table striped size="sm">
                    <tbody>
                      <tr>
                        <td style={{width:"180px"}}>Jumlah Soal</td>
                        <td style={{width:"1px"}}>:</td>
                        <td>00</td>
                      </tr>

                      <tr>
                        <td>Jumlah Responden</td>
                        <td>:</td>
                        <td>00</td>
                      </tr>

                      <tr>
                        <td>Tanggal Mulai</td>
                        <td>:</td>
                        <td>00</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>

                <Col md={5} lg={5}>
                  <Table striped size="sm">
                    <tbody>
                      <tr>
                        <td style={{width:"180px"}}>Lama Menjawab (menit)</td>
                        <td style={{width:"1px"}}>:</td>
                        <td>00</td>
                      </tr>

                      <tr>
                        <td>Reward Perorang (Rp)</td>
                        <td>:</td>
                        <td>00</td>
                      </tr>

                      <tr>
                        <td>Tanggal Akhir</td>
                        <td>:</td>
                        <td>00</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>

                <Col md={2} lg={2}>
                  <Button variant="success" size="sm" href="#">Detail Study</Button>
                  <Button variant="warning" size="sm" className="m-t-5" href="#">Detail Pertanyaan</Button>
                  <Button variant="info" size="sm" className="m-t-5" href="#">Detail Jawaban</Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Tabs defaultActiveKey="Project" id="noanim-tab-example">
              <Tab eventKey="Project" title="Project" className="m-t-15">
                <Row>
                  <Col>
                  <div className="part-one">
                    <Form.Group>
                      <Form.Label>Judul Survey</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Jumlah Soal</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Lama Menjawab (menit)</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Jumlah Responden</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Reward Perorang (Rp)</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Tanggal Mulai</Form.Label>
                      <Row>
                        <Col><DatePicker selected={startDate}/></Col>
                      </Row>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Tanggal Akhir</Form.Label>
                      <Row>
                        <Col><DatePicker selected={startDate}/></Col>
                      </Row>
                    </Form.Group>
                  </div>
                  </Col>
                </Row>
              </Tab>

              <Tab eventKey="Responden" title="Responden" className="m-t-15">
                <Row>
                  <Col>
                    <div className="part-one">
                      <Form.Group>
                        <Form.Label>Kategori Profil Responden</Form.Label>
                        <Form.Control as="select">
                          <option>-- Pilih --</option>
                          <option>Keluarga</option>
                          <option>Harta</option>
                          <option>Kesehatan</option>
                          <option>Pekerjaan</option>
                        </Form.Control>
                      </Form.Group>
                    </div>
                  </Col>
                </Row>
              </Tab>

              <Tab eventKey="Question" title="Question" className="m-t-15">
                <QuestionList/>
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

export default withRouter(FormSurveyor)