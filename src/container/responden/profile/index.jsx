import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, useHistory, useLocation, Link } from 'react-router-dom'

import { logoutProcess, dataProfileUser } from '../../../store/action'

import './css/style.css';
import { Button,Tabs, Tab, Container, Row, Col, Table} from 'react-bootstrap'

import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'

const ProfileResponden = (props) => {
  const dispatch = useDispatch()

  const [dataProfile, SetDataProfile] = useState('')
  
  const getDataProfile = () => {
    if(!dataProfile){
      dispatch(dataProfileUser())
        .then( data => {
          SetDataProfile(data)
        })
    }
  }

  useEffect( () => {
    getDataProfile()
  })
  
  return(
    <>
    <Navbar/>

      <div id="profile-responden">
      <Container>
        <Row>
          <Col md={{ span: 8, offset:2}} lg={{ span: 8, offset:2}}>
            <h3 className="title-one text-center"><strong>Profile Responden</strong></h3>
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <Link to='/responden' style={{textDecoration:"none"}}>
                  <h4 className="title-three">Dashboard Responden</h4>
                  </Link>
                </li>

                <li className="list-inline-item">|</li>

                <li className="list-inline-item">
                  <h4 className="title-three">Profile Responden</h4>
                </li>
              </ul>
          </Col>
        </Row>
        <Row className="m-t-30">
          <Col md={3} lg={3}>
            <div className="part-one">
              <Row>
                <Col>
                  <center>
                  <img src="https://via.placeholder.com/180" style={{borderRadius:"100%"}}/>
                  </center>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3 className="title-two  m-t-15 text-center"><strong>{dataProfile.name}</strong></h3>
                  <h3 className="title-three text-center m-t-5"><strong>{dataProfile.email}</strong></h3>
                  <h3 className="title-three text-center m-t-5"><strong>{dataProfile.phone}</strong></h3>
                </Col>
              </Row>

              <Row className="m-t-15">
                <Col>
                <hr/>
                <Link to='/responden/profile/edit' style={{textDecoration:"none"}}>
                  <Button variant="primary" block>Edit Profile</Button>
                </Link>
                </Col>
              </Row>
              
            </div>
          </Col>

          <Col md={9} lg={9} className="">
            <div className="part-two">
            <Tabs defaultActiveKey="identitas" id="noanim-tab-example">
              <Tab eventKey="identitas" title="Identitas" className="m-t-15">
                <Row>
                  <Col className="table-no-border">
                    <Table bordered className="m-b-0">
                      <tbody>
                        <tr>
                          <td style={{width:"250px"}}>Nama Lengkap</td>
                          <td style={{width:"1px"}}>:</td>
                          <td>{dataProfile.name}</td>
                        </tr>

                        <tr>
                          <td>Tanggal Lahir</td>
                          <td>:</td>
                          <td>{dataProfile.birth}</td>
                        </tr>

                        <tr>
                          <td>No. Telepon</td>
                          <td>:</td>
                          <td>{dataProfile.phone}</td>
                        </tr>

                        <tr>
                          <td>No. Identitas</td>
                          <td>:</td>
                          <td>-</td>
                        </tr>

                        <tr>
                          <td>Kartu Tanda Penduduk</td>
                          <td>:</td>
                          <td>{dataProfile.ktp}</td>
                        </tr>

                        <tr>
                          <td>Bagaimana Anda Mengetahui suRvplus</td>
                          <td>:</td>
                          <td>{dataProfile.sumber}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="tempat" title="Tempat Tinggal" className="m-t-15">
                <Row>
                  <Col className="table-no-border">
                    <Table bordered className="m-b-0">
                      <tbody>
                        <tr>
                          <td style={{width:"250px"}}>Provinsi Tempat Tinggal</td>
                          <td style={{width:"1px"}}>:</td>
                          <td>{dataProfile.provinsi}</td>
                        </tr>

                        <tr>
                          <td>Kecamatan Tempat Tinggal</td>
                          <td>:</td>
                          <td>-</td>
                        </tr>

                        <tr>
                          <td>Kab/Kota Tempat Tinggal</td>
                          <td>:</td>
                          <td>{dataProfile.kota}</td>
                        </tr>

                        <tr>
                          <td>Kelurahan Tempat Tinggal</td>
                          <td>:</td>
                          <td>-</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="pendidikan" title="Pendidikan & Pekerjaan" className="m-t-15">
                <Row>
                  <Col className="table-no-border">
                    <Table bordered className="m-b-0">
                      <tbody>
                          <tr>
                            <td style={{width:'250px'}}>Pendidikan Terakhir</td>
                            <td style={{width:'1px'}}>:</td>
                            <td>-</td>
                          </tr>
                          <tr>
                            <td>Bidang Pendidikan</td>
                            <td>:</td>
                            <td>-</td>
                          </tr>
                          <tr>
                            <td>Jenis Pekerjaan</td>
                            <td>:</td>
                            <td>-</td>
                          </tr>

                          <tr>
                            <td>Lama Kerja Dari Awal Kerja Tetap</td>
                            <td>:</td>
                            <td>-</td>
                          </tr>

                          <tr>
                            <td>Jenis Pendapatan</td>
                            <td>:</td>
                            <td>-</td>
                          </tr>

                          <tr>
                            <td>Kartu Mahasiswa</td>
                            <td>:</td>
                            <td>-</td>
                          </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </Tab>

              <Tab eventKey="keluarga" title="Keluarga" className="m-t-15">
                <Row>
                  <Col className="table-no-border">
                  <Table bordered className="m-b-0">
                      <tbody>
                          <tr>
                            <td style={{width:'250px'}}>Status Pernikahan</td>
                            <td style={{width:'1px'}}>:</td>
                            <td>-</td>
                          </tr>
                          <tr>
                            <td>Jumlah Anak</td>
                            <td>:</td>
                            <td>-</td>
                          </tr>
                          <tr>
                            <td>Jenis Kelamin</td>
                            <td>:</td>
                            <td>-</td>
                          </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </Tab>

              <Tab eventKey="kesehatan" title="Kesehatan" className="m-t-15">
                <Row>
                  <Col className="table-no-border">
                    <Table bordered className="m-b-0">
                      <tbody>
                          <tr>
                            <td style={{width:'250px'}}>Golongan Darah</td>
                            <td style={{width:'1px'}}>:</td>
                            <td>-</td>
                          </tr>
                          <tr>
                            <td>Sakit Yang Pernah Dialamai</td>
                            <td>:</td>
                            <td>-</td>
                          </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row> 
              </Tab>

              <Tab eventKey="minat" title="Minat & Hobby" className="m-t-15">
                <Row>
                  <Col className="table-no-border">
                    <Table bordered className="m-b-0">
                      <tbody>
                          <tr>
                            <td style={{width:'250px'}}>Jenis Kendaraan Yang Dimiliki</td>
                            <td style={{width:'1px'}}>:</td>
                            <td>-</td>
                          </tr>
                          <tr>
                            <td>Apa Saja Hobby Anda</td>
                            <td>:</td>
                            <td>-</td>
                          </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
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

export default withRouter(ProfileResponden)