<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { useDispatch, useStore, Connect } from 'react-redux';
import { withRouter, useHistory, useLocation, Link } from 'react-router-dom'

import { logoutProcess } from '../../../store/action'
import './css/style.css';
import { Button, Modal, Tabs, Tab, Container, Row, Col, Nav, Form, Table} from 'react-bootstrap'
=======
import React, { useState } from 'react';
import { withRouter,  Link } from 'react-router-dom'

import './css/style.css';
import { Button, Container, Row, Col, Form} from 'react-bootstrap'
>>>>>>> 5b6fb794b707104fe5f2645ddddc09b3c8a70803
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditProfileSurveyor = (props) => {
  const [startDate, setStartDate] = useState(new Date());
<<<<<<< HEAD
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const processLogout = () => {
    dispatch(logoutProcess(history, location))
  }
=======
>>>>>>> 5b6fb794b707104fe5f2645ddddc09b3c8a70803

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

      <div id="edit-profile-surveyor">
      <Container>
        <Row>
          <Col md={{ span: 8, offset:2}} lg={{ span: 8, offset:2}}>
            <h3 className="title-one text-center"><strong>Edit Profil Surveyor</strong></h3>
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <Link to='/surveyor' style={{textDecoration:"none"}}>
                  <h4 className="title-three">Dashboard Surveyor</h4>
                  </Link>
                </li>

                <li className="list-inline-item">|</li>
                <li className="list-inline-item">
                  <Link to='/surveyor/profile' style={{textDecoration:"none"}}>
                  <h4 className="title-three">Profil Surveyor</h4>
                  </Link>
                </li>
                <li className="list-inline-item">|</li>
                <li className="list-inline-item">
                  <h4 className="title-three">Edit Profile Surveyor</h4>
                </li>
              </ul>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 8, offset:2}} lg={{ span: 8, offset:2}}>
            <div className="part-one">
              <Row>
                <Col>
                <Form>
                  <Form.Group>
                    <Form.Label>Nama Lengkap</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="" />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Konfirmasi Password</Form.Label>
                    <Form.Control type="password" placeholder="" />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="" />
                  </Form.Group>
                  
                  <Form.Group>
                    <Form.Label>No. Telepon</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>No. Identitas</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Tanggal Lahir</Form.Label>
                    <Row>
                    <Col><DatePicker selected={startDate}/></Col>
                    </Row>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Provinsi Tempat Tinggal</Form.Label>
                    <Form.Control as="select" >
                      <option>-- Pilih --</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Kabupaten/Kota Tempat Tinggal</Form.Label>
                    <Form.Control as="select" >
                      <option>-- Pilih --</option>
                    </Form.Control>
                  </Form.Group>
                  
                  <Form.Group>
                    <Form.Label>Jenis Pekerjaan</Form.Label>
                    <Form.Control as="select" >
                      <option>-- Pilih --</option>
                      <option>Swasta</option>
                      <option>PNS/TNI/Polri</option>
                      <option>Sedang mencari pekerjaan tetap</option>
                      <option>Sekola/Kuliah</option>
                      <option>Ibu Rumah Tangga</option>
                      <option>Lainnya</option>
                    </Form.Control>
                  </Form.Group>
                  
                  <Form.Group>
                    <Form.Label>Nama Institusi</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Tujuan Survey (bisa pilih lebih dari satu)</Form.Label>
                    <Form.Control as="select">
                      <option>-- Pilih --</option>
                      <option>Keperluan Pribadi</option>
                      <option>Keperluan Pekerjaan</option>
                      <option>Keperluan Tugas Kuliah/Pendidikan</option>
                      <option>Lainnya</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Bagaimana Anda Mengetahui suRvplus</Form.Label>
                    <Form.Control as="select">
                      <option>-- Pilih --</option>
                      <option>Jaringan Pribadi</option>
                      <option>Media Sosial</option>
                      <option>Iklan Surat Kabar/TV</option>
                      <option>Lainnya</option>
                    </Form.Control>
                  </Form.Group>
                
                  <Row>
                    <Col>
                    <hr/>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={{ span: 4, offset:4}} lg={{span: 4, offset:4}}>
                    <Button variant="primary" type="submit" block>Simpan</Button>
                    </Col>
                  </Row>
                </Form>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      </div>

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
    </>
  )
}

export default withRouter(EditProfileSurveyor)