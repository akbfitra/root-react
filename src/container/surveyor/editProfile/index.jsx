import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter,  Link, useHistory } from 'react-router-dom'

import { dataProfileUser, editProfileSurveyor } from '../../../store/actions/userAction'

import './css/style.css';
import { Button, Container, Row, Col, Form, Spinner} from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'

import { dataProvinsi, dataKota } from '../../../store/actions/kotaAction'

const EditProfileSurveyor = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  
  const [ dataProfile, setDataProfile ] = useState('')
  const [ birth, setBirth ] = useState(new Date());
  const [ username, setUsername] = useState('')
  const [ phone, setPhone] = useState('')
  const [ provinsi, setProvinsi] = useState('')
  const [ kota, setKota] = useState('')
  const [ pekerjaan, setPekerjaan] = useState('')
  const [ sumber, setSumber] = useState('')
  const [ ktp, setKtp] = useState('')
  const [ tujuan, setTujuan] = useState('')
  const [ listProvinsi, SetListProvinsi ] = useState([])
  
  let listKota = useSelector( state => state.tempat.tempat.kota)

  const optionDataPekerjaan = ['Swasta', 'PNS/TNI/Polri', 'Sekolah/Kuliah ', 'Ibu Rumah Tangga', 'Lainnya']
  const optionSumber = ["Jaringan Pribadi", "Media Sosial", "Iklan Surat Kabar/TV", "Lainnya"]
  const optionTujuan = ["Keperluan Pribadi", "Keperluan Pekerjaan", "Keperluan Tugas/Pendidikan", "Lainnya"]

  const getDataProfile = () => {
    if (!dataProfile) {
      dispatch(dataProfileUser())
        .then(data => {
          setDataProfile(data)
          setDataProfile(data)
          setUsername(data.name)
          setPhone(data.phone)
          setBirth(new Date(data.birth))
          setProvinsi(data.provinsi)
          setKota(data.kota)
          setPekerjaan(data.pekerjaan)
          setSumber(data.sumber)
          setKtp(data.ktp)
          setTujuan(data.tujuan)
        })
    }
  }

  function processSelectProvinsi(data){
    setProvinsi(data)
    // let idProvinsi = listProvinsi.find( el => el.nama == data )
    dispatch(dataKota(data))
  }
  
  function getDataProvinsi(){
    dispatch(dataProvinsi())
      .then( data => {
        SetListProvinsi(data)
      })
  }

  useEffect(() => {
    getDataProvinsi()
  }, [])


  useEffect(() => {
    getDataProfile()
  })

  const handleProcessUpdate = () => {
    dispatch(editProfileSurveyor(username, phone, birth, provinsi, kota, pekerjaan, sumber, ktp, tujuan, history))
  }

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
                  <h4 className="title-three">Beranda Surveyor</h4>
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
                  <h4 className="title-three">Edit Profil Surveyor</h4>
                </li>
              </ul>
          </Col>
        </Row>
        <Row className="m-t-30">
          <Col md={{ span: 8, offset:2}} lg={{ span: 8, offset:2}}>
            <div className="part-one">
              <Row>
                <Col>
                <Form
                   onSubmit={(e) => {
                    e.preventDefault()
                    handleProcessUpdate()
                  }}
                >
                  <Form.Group>
                    <Form.Label>Nama Lengkap</Form.Label>
                        <Form.Control type="text" placeholder="" value={ username } onChange ={ (e) => { setUsername(e.target.value) }}/>
                  </Form.Group>

                  {/* <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="" />
                  </Form.Group> */}

                  {/* <Form.Group>
                    <Form.Label>Konfirmasi Password</Form.Label>
                    <Form.Control type="password" placeholder="" />
                  </Form.Group> */}

                  {/* <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="" />
                  </Form.Group> */}
                  
                  <Form.Group>
                    <Form.Label>No. Telepon</Form.Label>
                        <Form.Control type="text" placeholder="" value={ phone } onChange ={ (e) => { setPhone(e.target.value) }}/>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>No. Identitas</Form.Label>
                        <Form.Control type="text" placeholder="" value={ ktp } onChange ={ (e) => { setKtp(e.target.value) }}/>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Tanggal Lahir</Form.Label>
                    <Row>
                      <Col>
                        <DatePicker
                          dateFormat="dd/MM/yyyy"
                          peekNextMonth
                          showMonthDropdown
                          showYearDropdown  
                          selected={birth} 
                          onChange={date => setBirth(date)}/>
                      </Col>
                    </Row>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Jenis Pekerjaan</Form.Label>
                      <Form.Control as="select" onChange={(e) => setPekerjaan(e.target.value)}>
                      <option>{ dataProfile.pekerjaan }</option>
                        {
                          optionDataPekerjaan
                            .filter(e => e != dataProfile.pekerjaan)
                            .map((dataOption) => {
                              return(
                                <option>{ dataOption }</option>
                              )
                            })
                        }
                    </Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Provinsi Tempat Tinggal</Form.Label>
                    <Form.Control as="select" onChange={ (e) => {processSelectProvinsi(e.target.value); }}>
                      <option>{ dataProfile.provinsi } </option>
                        { 
                          !listProvinsi 
                          ? 
                            <option>-- Pilih --</option>
                          :
                            listProvinsi.map( (data, i) => 
                            <option key={data._id}>{data.Provinsi}</option>
                            )
                        }
                    </Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Kabupaten/Kota Tempat Tinggal</Form.Label>
                    <Form.Control as="select" onChange={ (e) => {setKota( e.target.value )}}>
                      <option> { dataProfile.kota } </option>
                        { 
                          !listKota 
                          ? 
                            <option>-- Pilih --</option>
                          :
                            listKota.map( (data, i) => 
                            <option key={data._id}>{data["Kabupaten/kota"]}</option>
                            )
                        }
                    </Form.Control>
                  </Form.Group>
                  
                  {/* <Form.Group>
                    <Form.Label>Nama Institusi</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group> */}

                  <Form.Group>
                    <Form.Label>Tujuan Survey</Form.Label>
                    <Form.Control as="select" onChange={(e) => setTujuan(e.target.value)}>
                      <option>{ dataProfile.tujuan }</option>
                        {
                          optionTujuan
                            .filter(e => e != dataProfile.tujuan)
                            .map((dataOption) => {
                              return(
                                <option>{ dataOption }</option>
                              )
                            })
                        }
                    </Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Bagaimana Anda Mengetahui suRvplus</Form.Label>
                    <Form.Control as="select" onChange={(e) => setSumber(e.target.value)}>
                      <option>{ dataProfile.sumber }</option>
                        {
                          optionSumber
                            .filter(e => e != dataProfile.sumber)
                            .map((dataOption) => {
                              return(
                                <option>{ dataOption }</option>
                              )
                            })
                        }
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