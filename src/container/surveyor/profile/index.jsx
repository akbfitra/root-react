import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'

import { dataProfileUser } from '../../../store/actions/userAction'

import './css/style.css';
import { Button, Container, Row, Col, Table} from 'react-bootstrap'
import moment from 'moment'

import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'

const ProfileSurveyor = (props) => {
  const dispatch = useDispatch()

  const [dataProfile, SetDataProfile] = useState('')

  const getDataProfile = () => {
    if (!dataProfile) {
      dispatch(dataProfileUser())
        .then(data => {
          SetDataProfile(data)
        })
    }
  }

  useEffect(() => {
    getDataProfile()
  })

  return(
    <>
    <Navbar/>

      <div id="profile-surveyor">
      <Container>
        <Row>
          <Col md={{ span: 8, offset:2}} lg={{ span: 8, offset:2}}>
            <h3 className="title-one text-center"><strong>Profil Surveyor</strong></h3>
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <Link to='/surveyor' style={{textDecoration:"none"}}>
                  <h4 className="title-three">Beranda Surveyor</h4>
                  </Link>
                </li>

                <li className="list-inline-item">|</li>

                <li className="list-inline-item">
                  <h4 className="title-three">Profil Surveyor</h4>
                </li>
              </ul>
          </Col>
        </Row>
        <Row className="m-t-30">
          <Col md={3} lg={3}>
            <div className="part-one">
              <Row>
                <Col md={12} lg={12}>
                  <center>
                  <img src="../images/user_profil.png" style={{borderRadius:"100%", width:'180px'}}/>
                  </center>
                </Col>
              </Row>
              <Row>
                <Col md={12} lg={12}>
                      <h3 className="title-two  m-t-15 text-center"><strong> {dataProfile.name} </strong></h3>
                </Col>
              </Row>

              <Row>
                <Col md={12} lg={12}>
                <hr/>
                <Link to='/surveyor/profile/edit' style={{textDecoration:"none"}}>
                  <Button variant="primary" block>Edit Profil</Button>
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
                          <td>Email</td>
                          <td>:</td>
                          <td>{dataProfile.email}</td>
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
                          <td>Provinsi Tempat Tinggal</td>
                          <td>:</td>
                          <td>{dataProfile.provinsi}</td>
                        </tr>

                        <tr>
                          <td>Kabupaten/Kota Tempat Tinggal</td>
                          <td>:</td>
                          <td>{dataProfile.kota}</td>
                        </tr>

                        
                        
                        {/* <tr>
                          <td>Nama Institusi</td>
                          <td>:</td>
                          <td>-</td>
                        </tr> */}

                        <tr>
                          <td>Tujuan Survey</td>
                          <td>:</td>
                          <td>{dataProfile.tujuan}</td>
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

export default withRouter(ProfileSurveyor)