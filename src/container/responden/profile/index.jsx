import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'

import { dataProfileUser } from '../../../store/actions/userAction'

import './css/style.css';
import { Button,Tabs, Tab, Container, Row, Col, Table} from 'react-bootstrap'
import moment from 'moment'

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
              <Row>
                  <Col className="table-no-border">
                    <Table bordered className="m-b-0">
                      <tbody>
                        <tr>
                          <td style={{width:"340px"}}>Nama Lengkap</td>
                          <td style={{width:"1px"}}>:</td>
                          <td>{dataProfile.name}</td>
                        </tr>

                        <tr>
                          <td>No. Telepon</td>
                          <td>:</td>
                          <td>{dataProfile.phone}</td>
                        </tr>

                        <tr>
                          <td>No. Identitas</td>
                          <td>:</td>
                          <td>{dataProfile.ktp}</td>
                        </tr>

                        <tr>
                          <td>Tanggal Lahir</td>
                          <td>:</td>
                          <td>{moment(dataProfile.birth).format("DD/MM/YYYY")}</td>
                        </tr>

                        <tr>
                          <td>Pekerjaan</td>
                          <td>:</td>
                          <td>{dataProfile.pekerjaan}</td>
                        </tr>

                        <tr>
                          <td style={{ width: "250px" }}>Provinsi Tempat Tinggal</td>
                          <td style={{ width: "1px" }}>:</td>
                          <td>{dataProfile.provinsi}</td>
                        </tr>

                        <tr>
                          <td>Kab/Kota Tempat Tinggal</td>
                          <td>:</td>
                          <td>{dataProfile.kota}</td>
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