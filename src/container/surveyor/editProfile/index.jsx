import React, { useState } from 'react';
import { withRouter,  Link } from 'react-router-dom'

import './css/style.css';
import { Button, Container, Row, Col, Form} from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'

const EditProfileSurveyor = (props) => {
  const [startDate, setStartDate] = useState(new Date());

  return(
    <>
      <Navbar/>

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

      <Footer/>
    </>
  )
}

export default withRouter(EditProfileSurveyor)