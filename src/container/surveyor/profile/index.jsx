import React from 'react';
import { withRouter, Link } from 'react-router-dom'

import './css/style.css';
import { Button, Container, Row, Col, Table} from 'react-bootstrap'

import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'

const ProfileSurveyor = (props) => {

  return(
    <>
    <Navbar/>

      <div id="profile-surveyor">
      <Container>
        <Row>
          <Col md={{ span: 8, offset:2}} lg={{ span: 8, offset:2}}>
            <h3 className="title-one text-center"><strong>Profile Surveyor</strong></h3>
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <Link to='/surveyor' style={{textDecoration:"none"}}>
                  <h4 className="title-three">Dashboard Surveyor</h4>
                  </Link>
                </li>

                <li className="list-inline-item">|</li>

                <li className="list-inline-item">
                  <h4 className="title-three">Profile Surveyor</h4>
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
                      <h3 className="title-two  m-t-15 text-center"><strong>Nama Lengkap</strong></h3>
                </Col>
              </Row>

              <Row className="m-t-15">
                <Col>
                <hr/>
                <Link to='/surveyor/profile/edit' style={{textDecoration:"none"}}>
                  <Button variant="primary" block>Edit Profile</Button>
                </Link>
                </Col>
              </Row>
              
            </div>
          </Col>

          <Col md={9} lg={9} className="">
            <div className="part-two">
            <Row>
                  <Col className="table-no-border">
                    <Table bordered className="m-b-0">
                      <tbody>
                        <tr>
                          <td style={{width:"250px"}}>Nama Lengkap</td>
                          <td style={{width:"1px"}}>:</td>
                          <td>-</td>
                        </tr>
                        
                        <tr>
                          <td>Email</td>
                          <td>:</td>
                          <td>-</td>
                        </tr>

                        <tr>
                          <td>No. Telepon</td>
                          <td>:</td>
                          <td>-</td>
                        </tr>

                        <tr>
                          <td>No. Identitas</td>
                          <td>:</td>
                          <td>-</td>
                        </tr>

                        <tr>
                          <td>Tanggal Lahir</td>
                          <td>:</td>
                          <td>-</td>
                        </tr>

                        <tr>
                          <td>Provinsi Tempat Tinggal</td>
                          <td>:</td>
                          <td>-</td>
                        </tr>

                        <tr>
                          <td>Kabupaten/Kota Tempat Tinggal</td>
                          <td>:</td>
                          <td>-</td>
                        </tr>

                        <tr>
                          <td>Jenis Pekerjaan</td>
                          <td>:</td>
                          <td>-</td>
                        </tr>
                        
                        <tr>
                          <td>Nama Institusi</td>
                          <td>:</td>
                          <td>-</td>
                        </tr>

                        <tr>
                          <td>Tujuan Survey</td>
                          <td>:</td>
                          <td>-</td>
                        </tr>

                        <tr>
                          <td>Bagaimana Anda Mengetahui suRvplus</td>
                          <td>:</td>
                          <td>-</td>
                        </tr>
                      </tbody>
                    </Table>
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

export default withRouter(ProfileSurveyor)