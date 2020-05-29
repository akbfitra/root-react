import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { withRouter, useHistory, useLocation, Link } from 'react-router-dom'

import { registerSurveyorProcess } from '../../../store/actions/userAction'
import './css/style.css';
import { Button, Modal, Tabs, Tab, Container, Row, Col, Nav, Form} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RegisterSurveyor = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch()

  const [ email, setEmail] = useState('')
  const [ password, setPassword] = useState('')
  const [ username, setUsername] = useState('')
  const [ phone, setPhone] = useState('')
  const [ birth, setBirth] = useState('')
  const [ provinsi, setProvinsi] = useState('')
  const [ kota, setKota] = useState('')
  const [ pekerjaan, setPekerjaan] = useState('')
  const [ sumber, setSumber] = useState('')
  const [ tujuan, setTujuan ] = useState('')
  const [ ktp, setKtp] = useState('')

  const history = useHistory()
  const location = useLocation()

  const processRegisterSurveyor = () => {
    dispatch(registerSurveyorProcess(email, password, username, phone, birth, provinsi, kota, pekerjaan, sumber, history, location))
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

      <div id="register-surveyor">
      <Container>
        <Row>
          <Col md={{ span: 8, offset:2}} lg={{ span: 8, offset:2}}>
            <div className="part-one">
              <Row>
                <Col>
                  <h3 className="title-one text-center"><strong>Daftar Surveyor</strong></h3>
                  <hr className=""/>
                </Col>
              </Row>

              <Row>
                <Col>
                <Form 
                  onSubmit={(e) => {
                    e.preventDefault()
                    processRegisterSurveyor()
                  }}
                >
                  <Form.Group>
                    <Form.Label>Nama Lengkap</Form.Label>
                    <Form.Control type="text" placeholder="" onChange={ (e) => {setUsername( e.target.value )}}/>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="" onChange={ (e) => {setPassword( e.target.value )}}/>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Konfirmasi Password</Form.Label>
                    <Form.Control type="password" placeholder="" onChange={ (e) => {setPassword( e.target.value )}}/>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="" onChange={ (e) => {setEmail( e.target.value )}}/>
                  </Form.Group>
                  
                  <Form.Group>
                    <Form.Label>No. Telepon</Form.Label>
                    <Form.Control type="text" placeholder="" onChange={ (e) => {setPhone (e.target.value )}}/>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Tujuan Survey (bisa pilih lebih dari satu)</Form.Label>
                    <Form.Control as="select" onChange={ (e) => {setTujuan( e.target.value )}}>
                      <option>-- Pilih --</option>
                      <option>Keperluan Pribadi</option>
                      <option>Keperluan Pekerjaan</option>
                      <option>Keperluan Tugas Kuliah/Pendidikan</option>
                      <option>Lainnya</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>No. Identitas</Form.Label>
                    <Form.Control type="text" placeholder="" onChange={ (e) => {setKtp( e.target.value )}}/>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Tanggal Lahir</Form.Label>
                    <Row>
                    <Col><DatePicker selected={startDate} onChange={date => setStartDate(date)} /></Col>
                    </Row>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Jenis Pekerjaan</Form.Label>
                    <Form.Control as="select" onChange={ (e) => {setPekerjaan( e.target.value )}}>
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
                    <Form.Label>Provinsi Tempat Tinggal</Form.Label>
                    <Form.Control as="select" onChange={ (e) => {setProvinsi( e.target.value )}}>
                      <option>-- Pilih --</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Kabupaten/Kota Tempat Tinggal</Form.Label>
                    <Form.Control as="select" onChange={ (e) => {setKota( e.target.value )}}>
                      <option>-- Pilih --</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Bagaimana Anda Mengetahui suRvplus</Form.Label>
                    <Form.Control as="select" onChange={ (e) => {setSumber( e.target.value )}}>
                      <option>-- Pilih --</option>
                      <option>Jaringan Pribadi</option>
                      <option>Media Sosial</option>
                      <option>Iklan Surat Kabar/TV</option>
                      <option>Lainnya</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Form.Check type="checkbox" label="Saya telah membaca, memahami, dan menyetujui Syarat dan Ketentuan bagi Surveyor" />
                    <Form.Check type="checkbox" label="Saya bersedia menerima informasi promosi dan penawaran dari suRvplus terkait dengan layanan survey online dan lainnya" />
                  </Form.Group>
                  
                  <Row>
                    <Col>
                    <hr/>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={{ span: 6, offset:3}}>
                    <Button variant="primary" type="submit" block>Daftar Surveyor</Button>
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

export default withRouter(RegisterSurveyor)
