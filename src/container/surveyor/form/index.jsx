<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { useDispatch, useStore, Connect } from 'react-redux';
import { withRouter, useHistory, useLocation, Link } from 'react-router-dom'

import { logoutProcess } from '../../../store/action'
import './css/style.css';
import { Button, Modal, Tabs, Tab, Container, Row, Col, Nav, Form, Table} from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FormSurveyor = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const processLogout = () => {
    dispatch(logoutProcess(history, location))
  }

  return(
    <>
      <div id="general-header">
        <div className="main-header-one">
          <Container>
            <Row>
              <Col md={8} lg={8} className="part-one">
                <div className="table-100">
                  <div className="table-row">
                    <div className="table-cell-one">
                      <img src="https://via.placeholder.com/60"></img>
                    </div>

                    <div className="table-cell-two">
                      <h4 className="m-t-0 m-b-0 title-two"><strong>suRvplus</strong></h4>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4} lg={4} className="part-two">
                <div className="table-100">
                  <div className="table-row">
                    <div className="table-cell-one">
                    <Button variant="primary" className="float-right">LOGIN</Button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
=======
import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom'

import './css/style.css';
import { Tabs, Tab, Container, Row, Col, Form} from 'react-bootstrap'
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
>>>>>>> 5b6fb794b707104fe5f2645ddddc09b3c8a70803

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
          <Col>
            <Tabs defaultActiveKey="Project" id="noanim-tab-example">
              <Tab eventKey="Project" title="project" className="m-t-15">
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

              <Tab eventKey="Question" title="question" className="m-t-15">
<<<<<<< HEAD
                <Row>
                  <Col md={12} lg={12}>
                  <div className="part-two">
                    <Row className="question">
                      <Col md={8} lg={8}>
                        <div className="table-100">
                          <div className="table-row">
                            <div className="table-cell-one">
                              <Form.Group>
                                <Form.Label>Soal</Form.Label>
                                <Form.Control type="text" placeholder="" />
                              </Form.Group>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col md={4} lg={4}>
                        <div className="table-100">
                          <div className="table-row">
                            <div className="table-cell-one">
                                <Form.Group>
                                <Form.Label>Jawaban</Form.Label>
                                <Form.Control as="select" >
                                  <option>-- Pilih --</option>
                                  <option>Pilihan Ganda</option>
                                  <option>Text</option>
                                  <option>Kotak Centang</option>
                                </Form.Control>
                              </Form.Group>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>


                    <Row className="answer">
                      <Col>
                      {/* pilihan ganda */}
                        <Row className="m-t-15">
                          <Col md={8} lg={8}>
                            <div className="table-100">
                              <div className="table-row">
                                <div className="table-cell-one">
                                  <h4 className="title-three">Opsi 1</h4>
                                </div>

                                <div className="table-cell-two">
                                  <Form.Control type="text" placeholder="" placeholder="Opsi"/>
                                </div>

                                <div className="table-cell-three">
                                  <center>
                                  <Button variant="primary" size="sm">
                                    Tambah Opsi
                                  </Button>
                                  </center>
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      {/* end pilihan ganda */}
                      {/* text */}
                        <Row className="m-t-15">
                          <Col md={8} lg={8}>
                          <Form.Control as="textarea" rows="3" />
                          </Col>
                        </Row>
                      {/* end text */}
                      </Col>
                      
                    </Row>
                  </div>
                  </Col>
                </Row>
=======
                <QuestionList/>
>>>>>>> 5b6fb794b707104fe5f2645ddddc09b3c8a70803
              </Tab>
            </Tabs>
          </Col>
          


          
        </Row>
      </Container>
      </div>

<<<<<<< HEAD
      <div id="main-footer-one">
        <Container>
          <Row>
            <Col md={4} lg={4} className="part-one">
              <Row>
                <Col><h3 className="title-one"><strong>suRvplus</strong></h3></Col>
              </Row>

              <Row className="m-t-30">
                <Col><p>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat.</p></Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="main-footer-two">
        <Container>
          <Row>
            <Col><h4 className="text-center title-three">Copyright © 2020 suRvplus  </h4></Col>
          </Row>
        </Container>
      </div>
=======
      <Footer/>
>>>>>>> 5b6fb794b707104fe5f2645ddddc09b3c8a70803
    </>
  )
}

export default withRouter(FormSurveyor)