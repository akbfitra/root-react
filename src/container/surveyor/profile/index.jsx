<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { useDispatch, useStore, Connect } from 'react-redux';
import { withRouter, useHistory, useLocation, Link } from 'react-router-dom'

import { logoutProcess } from '../../../store/action'
import './css/style.css';
import { Button, Modal, Tabs, Tab, Container, Row, Col, Nav, Form, Table} from 'react-bootstrap'

const ProfileSurveyor = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const processLogout = () => {
    dispatch(logoutProcess(history, location))
  }
=======
import React from 'react';
import { withRouter, Link } from 'react-router-dom'

import './css/style.css';
import { Button, Container, Row, Col, Table} from 'react-bootstrap'

const ProfileSurveyor = (props) => {
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
                    <Button variant="primary" className="float-right">LOGIN</Button>{' '}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

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

export default withRouter(ProfileSurveyor)