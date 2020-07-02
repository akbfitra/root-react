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
            <h3 className="title-one text-center"><strong>Tambah Study</strong></h3>
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
                  <h4 className="title-three">Tambah Study</h4>
                </li>
              </ul>
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
                      <Form.Label>Waktu Menjawab (menit)</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Jumlah Responden Yang Dibutuhkan</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Reward Per Responden (Rp)</Form.Label>
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

              <Tab eventKey="Kriteria Responden" title="Kriteria Responden" className="m-t-15">
                <Row className="m-t-30">
                  <Col md={12} lg={12}>
                    <div className="part-one">
                      <Row>
                        <Col md={12} lg={12}>
                          <Form.Group>
                            <Form.Label>Kriteria Responden</Form.Label>
                            <Form.Control as="select">
                              <option>-- Pilih --</option>
                              <option>Keluarga</option>
                              <option>Harta</option>
                              <option>Kesehatan</option>
                              <option>Pekerjaan</option>
                            </Form.Control>
                          </Form.Group>
                        </Col>

                        <Col md={12} lg={12}>
                        <hr className="m-b-0"></hr>
                        </Col>

                        <Col md={12} lg={12}>
                        <Row className="m-t-30">
                          <Col md={12} lg={12}>
                            <div className="box-pertanyaan">
                              <div className="left"><h5>1.</h5></div>
                              <div className="right"><h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, necessitatibus asperiores omnis laudantium voluptas doloribus eius alias modi ex maiores quis mollitia, tempora commodi officiis voluptatibus esse repellendus dignissimos optio?</h5></div>
                            </div>
                          </Col>
                          <Col md={12} lg={12}>
                            <div className="box-answer">
                            <Form.Group style={{width:'100%'}}>
                              <Form.Control as="select" >
                                <option>-- Pilih --</option>
                              </Form.Control>
                            </Form.Group>
                            </div>
                          </Col>
                        </Row>
                        <Row className="m-t-30">
                          <Col md={12} lg={12}>
                            <div className="box-pertanyaan">
                              <div className="left"><h5>1.</h5></div>
                              <div className="right"><h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, necessitatibus asperiores omnis laudantium voluptas doloribus eius alias modi ex maiores quis mollitia, tempora commodi officiis voluptatibus esse repellendus dignissimos optio?</h5></div>
                            </div>
                          </Col>
                          <Col md={12} lg={12}>
                            <div className="box-answer">
                            <Form.Group style={{width:'100%'}}>
                              <Form.Control as="select" >
                                <option>-- Pilih --</option>
                              </Form.Control>
                            </Form.Group>
                            </div>
                          </Col>
                        </Row>
                        </Col>
                        <Col md={12} lg={12}>
                          <hr/>
                          <ul className="list-inline text-right m-b-0">
                            <li className="list-inline-item">
                              <Button variant="primary">Tambah Kriteria</Button>{' '}
                            </li>
                            <li className="list-inline-item">|</li>
                            <li className="list-inline-item">
                              <Button variant="danger">Hapus Kriteria</Button>{' '}
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>

                <Row className="m-t-30">
                  <Col md={12} lg={12}>
                    <div className="part-one">
                      <Row>
                        <Col md={12} lg={12}>
                          <Form.Group>
                            <Form.Label>Kriteria Responden</Form.Label>
                            <Form.Control as="select">
                              <option>-- Pilih --</option>
                              <option>Keluarga</option>
                              <option>Harta</option>
                              <option>Kesehatan</option>
                              <option>Pekerjaan</option>
                            </Form.Control>
                          </Form.Group>
                        </Col>

                        <Col md={12} lg={12}>
                        <hr className="m-b-0"></hr>
                        </Col>

                        <Col md={12} lg={12}>
                        <Row className="m-t-30">
                          <Col md={12} lg={12}>
                            <div className="box-pertanyaan">
                              <div className="left"><h5>1.</h5></div>
                              <div className="right"><h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, necessitatibus asperiores omnis laudantium voluptas doloribus eius alias modi ex maiores quis mollitia, tempora commodi officiis voluptatibus esse repellendus dignissimos optio?</h5></div>
                            </div>
                          </Col>
                          <Col md={12} lg={12}>
                            <div className="box-answer">
                            <Form.Group style={{width:'100%'}}>
                              <Form.Control as="select" >
                                <option>-- Pilih --</option>
                              </Form.Control>
                            </Form.Group>
                            </div>
                          </Col>
                        </Row>
                        <Row className="m-t-30">
                          <Col md={12} lg={12}>
                            <div className="box-pertanyaan">
                              <div className="left"><h5>1.</h5></div>
                              <div className="right"><h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, necessitatibus asperiores omnis laudantium voluptas doloribus eius alias modi ex maiores quis mollitia, tempora commodi officiis voluptatibus esse repellendus dignissimos optio?</h5></div>
                            </div>
                          </Col>
                          <Col md={12} lg={12}>
                            <div className="box-answer">
                            <Form.Group style={{width:'100%'}}>
                              <Form.Control as="select" >
                                <option>-- Pilih --</option>
                              </Form.Control>
                            </Form.Group>
                            </div>
                          </Col>
                        </Row>
                        </Col>
                        <Col md={12} lg={12}>
                          <hr/>
                          <ul className="list-inline text-right m-b-0">
                            <li className="list-inline-item">
                              <Button variant="primary">Tambah Kriteria</Button>{' '}
                            </li>
                            <li className="list-inline-item">|</li>
                            <li className="list-inline-item">
                              <Button variant="danger">Hapus Kriteria</Button>{' '}
                            </li>
                          </ul>
                        </Col>
                      </Row>
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