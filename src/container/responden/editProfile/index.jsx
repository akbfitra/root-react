import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom'

import './css/style.css';
import { Tabs, Tab, Container, Row, Col, Form} from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'

const EditProfileResponden = (props) => {
  const [startDate, setStartDate] = useState(new Date());

  return(
    <>
      <Navbar/>

      <div id="edit-profile-responden">
      <Container>
        <Row>
          <Col md={{ span: 8, offset:2}} lg={{ span: 8, offset:2}}>
            <h3 className="title-one text-center"><strong>Edit Profile Responden</strong></h3>
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <Link to='/responden' style={{textDecoration:"none"}}>
                  <h4 className="title-three">Dashboard Responden</h4>
                  </Link>
                </li>

                <li className="list-inline-item">|</li>

                <li className="list-inline-item">
                  <Link to='/responden/profile' style={{textDecoration:"none"}}>
                  <h4 className="title-three">Profile Responden</h4>
                  </Link>
                </li>

                <li className="list-inline-item">|</li>

                <li className="list-inline-item">
                  <h4 className="title-three">Edit Profile Responden</h4>
                </li>
              </ul>
          </Col>
        </Row>
        <Row className="m-t-30">
          <Col md={12} lg={12}>
            <div className="part-one">
            <Tabs defaultActiveKey="Account" id="noanim-tab-example">
              <Tab eventKey="Account" title="Account" className="m-t-15">
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Konfirmasi Password</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>
              </Tab>
              <Tab eventKey="Identitas Diri" title="Identitas Diri" className="m-t-15">
                  <Form.Group>
                    <Form.Label>Nama Lengkap</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Tanggal Lahir</Form.Label>
                    <Row>
                    <Col><DatePicker selected={startDate} onChange={date => setStartDate(date)} /></Col>
                    </Row>
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
                    <Form.Label>Unggah Kartu Tanda Penduduk</Form.Label>
                    <Form.Control type="file" placeholder="" />
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
              </Tab>
              <Tab eventKey="tempat" title="Tempat Tinggal" className="m-t-15">
                  <Form.Group>
                    <Form.Label>Provinsi Tempat Tinggal</Form.Label>
                    <Form.Control as="select">
                      <option>-- Pilih --</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Kabupaten/Kota Tempat Tinggal</Form.Label>
                    <Form.Control as="select">
                      <option>-- Pilih --</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Kecamatan Tempat Tinggal</Form.Label>
                    <Form.Control as="select">
                      <option>-- Pilih --</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Kelurahan Tempat Tinggal</Form.Label>
                    <Form.Control as="select">
                      <option>-- Pilih --</option>
                    </Form.Control>
                  </Form.Group>
              </Tab>

              <Tab eventKey="pendidikan" title="Pendidikan & Pekerjaan" className="m-t-15">
                  <Form.Group>
                    <Form.Label>Pendidikan Terakhir</Form.Label>
                    <Form.Control as="select">
                      <option>-- Pilih --</option>
                      <option>SD</option>
                      <option>SMP</option>
                      <option>SMA</option>
                      <option>S1</option>
                      <option>S2</option>
                      <option>S3</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Bidang Pendidikan (bisa lebih dari satu)</Form.Label>
                    <Form.Control as="select">
                      <option>-- Pilih --</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Unggah Kartu Mahasiswa</Form.Label>
                    <Form.Control type="file" placeholder="" />
                  </Form.Group>


                  <Form.Group>
                    <Form.Label>Jenis Pekerjaan</Form.Label>
                    <Form.Control as="select">
                      <option>-- Pilih --</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Lama Kerja Dari Awal Kerja Tetap</Form.Label>
                    <Form.Control as="select">
                      <option>-- Pilih --</option>
                      <option>0-5 Tahun</option>
                      <option>6-10 Tahun</option>
                      <option>> 11 Tahun</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Jumlah Pendapatan</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>
              </Tab>

              <Tab eventKey="keluarga" title="Keluarga" className="m-t-15">
                  <Form.Group>
                    <Form.Label>Status Pernikahan</Form.Label>
                    <Form.Control as="select">
                      <option>-- Pilih --</option>
                      <option>Menikah</option>
                      <option>Cerai</option>
                      <option>Belum Menikah</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Jumlah Anak</Form.Label>
                    <Form.Control as="select">
                      <option>-- Pilih --</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Jenis Kelamin (sediakan field sesuai dengan jumlah anak yang dipilih)</Form.Label>
                    <Form.Control as="select">
                      <option>-- Pilih --</option>
                      <option>Laki-Laki</option>
                      <option>Perempuan</option>
                    </Form.Control>
                  </Form.Group>
              </Tab>

              <Tab eventKey="kesehatan" title="Kesehatan" className="m-t-15">
                  <Form.Group>
                    <Form.Label>Golongan Darah</Form.Label>
                    <Form.Control as="select">
                      <option>-- Pilih --</option>
                      <option>O</option>
                      <option>A</option>
                      <option>B</option>
                      <option>AB</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Sakit Yang Pernah Dialami</Form.Label>
                    <Form.Control as="select">
                      <option>-- Pilih --</option>
                    </Form.Control>
                  </Form.Group>
              </Tab>

              <Tab eventKey="minat" title="Minat & Hobby" className="m-t-15">
                  <Form.Group>
                    <Form.Label>Jenis Kendaraan Yang Dimiliki</Form.Label>
                    <Form.Control as="select">
                      <option>-- Pilih --</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Apa Saja Hobby Anda ? (*bisa lebih dari satu)</Form.Label>
                    <Form.Control as="select">
                      <option>-- Pilih --</option>
                    </Form.Control>
                  </Form.Group>
              </Tab>
            </Tabs>

            </div>
          </Col>
        </Row>
      </Container>
      </div>

      <Footer/>
    </>
  )
}

export default withRouter(EditProfileResponden)