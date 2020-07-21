import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, Link, useHistory } from 'react-router-dom'

import './css/style.css';
import { Tabs, Tab, Container, Row, Col, Form, Button} from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { dataProfileUser, editProfileResponden } from '../../../store/actions/userAction'

import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'

const EditProfileResponden = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [dataProfile, setDataProfile] = useState('')
  const [ username, setUsername] = useState('')
  const [ phone, setPhone] = useState('')
  const [ birth, setBirth] = useState(new Date())
  const [ provinsi, setProvinsi] = useState('')
  const [ kota, setKota] = useState('')
  const [ pekerjaan, setPekerjaan] = useState('')
  const [ sumber, setSumber] = useState('')
  const [ ktp, setKtp] = useState('')
  
  const optionDataPekerjaan = ['Swasta', 'PNS/TNI/Polri', 'Sekolah/Kuliah ', 'Ibu Rumah Tangga', 'Lainnya']
  const optionSumber = ["Jaringan Pribadi", "Media Sosial", "Iklan Surat Kabar/TV", "Lainnya"]

  const handleProcessUpdate = () => {
    console.log(username, phone, birth, provinsi, kota, pekerjaan, sumber, ktp)
    dispatch(editProfileResponden(username, phone, birth, provinsi, kota, pekerjaan, sumber, ktp, history))
  }

  const getDataProfile = () => {
    if (!dataProfile) {
      dispatch(dataProfileUser())
        .then(data => {
          setDataProfile(data)
          setUsername(data.name)
          setPhone(data.phone)
          // setBirth(data.birth)
          setProvinsi(data.provinsi)
          setKota(data.kota)
          setPekerjaan(data.pekerjaan)
          setSumber(data.sumber)
          setKtp(data.ktp)
        })
    }
  }

  useEffect(() => {
    getDataProfile()
  })

  return(
    <>
      {
        !dataProfile ? 
          <p>loading</p> 
        : 
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
              <Form 
                onSubmit={(e) => {
                  e.preventDefault()
                  handleProcessUpdate()
                }}>
                <div className="part-one">
                    <Form.Group>
                      <Form.Label>Nama Lengkap</Form.Label>
                      <Form.Control type="text" placeholder="" value={ username } onChange ={ (e) => { setUsername(e.target.value) }} />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>No. Telepon</Form.Label>
                      <Form.Control type="text" placeholder="" value={phone} onChange ={ (e) => { setPhone(e.target.value) }} />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>No. Identitas</Form.Label>
                      <Form.Control type="number" placeholder="" value={ktp} onChange ={ (e) => { setKtp(e.target.value) }} />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Tanggal Lahir</Form.Label>
                      <Row>
                        <Col><DatePicker selected={birth} onChange={date => setBirth(date)} /></Col>
                      </Row>
                    </Form.Group>


                    <Form.Group>
                      <Form.Label>Jenis Pekerjaan</Form.Label>
                      <Form.Control as="select" onChange={(e) => setPekerjaan(e.target.value)}>
                        <option>{dataProfile.pekerjaan}</option>
                        {
                          optionDataPekerjaan
                            .filter(pekerjaan => pekerjaan != dataProfile.pekerjaan)
                            .map((dataOption) => {
                              return(
                                <option>{ dataOption }</option>
                              )
                            })
                        }
                      </Form.Control>
                    </Form.Group>


                    {/* <Form.Group>
                        <Form.Label>Unggah Kartu Tanda Penduduk</Form.Label>
                        <Form.Control type="file" placeholder="" />
                      </Form.Group> */}

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
                      <Form.Label>Bagaimana Anda Mengetahui suRvplus</Form.Label>
                      <Form.Control as="select" onChange={(e) => setSumber(e.target.value)}>
                        <option>{dataProfile.sumber}</option>
                        {
                          optionSumber
                            .filter(sumber => sumber != dataProfile.sumber)
                            .map((dataOption) => {
                              return(
                                <option>{ dataOption }</option>
                              )
                            })
                        }
                      </Form.Control>
                    </Form.Group>

                    <Form.Group>
                      <Button variant="primary" type="submit" block>Update</Button>
                    </Form.Group>

                </div>
              </Form>
            </Col>
          </Row>
        </Container>
        </div>

        <Footer/>
      </>
      }
    </>
  )
}

export default withRouter(EditProfileResponden)