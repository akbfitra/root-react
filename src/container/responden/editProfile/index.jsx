import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, Link, useHistory } from 'react-router-dom'

import './css/style.css';
import {  Container, Row, Col, Form, Button} from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { dataProfileUser, editProfileResponden, getKetertarikan } from '../../../store/actions/userAction'

import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'

import { dataProvinsi, dataKota } from '../../../store/actions/kotaAction'

const EditProfileResponden = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [dataProfile, setDataProfile] = useState([])
  const [ username, setUsername] = useState('')
  const [ phone, setPhone] = useState('')
  const [ birth, setBirth] = useState(new Date())
  const [ provinsi, setProvinsi] = useState('')
  const [ kota, setKota] = useState('')
  const [ pekerjaan, setPekerjaan] = useState('')
  const [ sumber, setSumber] = useState('')
  const [ ktp, setKtp] = useState('')
  const [ jenisKelamin, setJenisKelamin ] = useState('')
  const [ listProvinsi, SetListProvinsi ] = useState([])
  const [ kriteria, setKriteria ] = useState([])
  const [ ketertarikan, setKetertarikan ] = useState([])
  
  let listKota = useSelector( state => state.tempat.tempat.kota)
  
  const optionDataPekerjaan = ['Swasta', 'PNS/TNI/Polri', 'Sekolah/Kuliah ', 'Ibu Rumah Tangga', 'Lainnya']
  const optionSumber = ["Jaringan Pribadi", "Media Sosial", "Iklan Surat Kabar/TV", "Lainnya"]

  const handleProcessUpdate = () => {
    dispatch(editProfileResponden(username, phone, birth, provinsi, kota, pekerjaan, sumber, ktp, jenisKelamin, kriteria, history))
  }

  const handlePilihKriteria = (data) => {
    let cek = kriteria.includes(data)
    if(!cek){
      setKriteria(arr => [...kriteria, data])
    }else if(kriteria.indexOf(data > -1)){
      setKriteria(kriteria.filter(item => item !== data))
    }
  }

  console.log(kriteria)

  const getDataProfile = () => {
    if (!dataProfile.length) {
      dispatch(dataProfileUser())
        .then(data => {
          setDataProfile(data)
          setUsername(data.name)
          setPhone(data.phone)
          setBirth(data.birth ? new Date(data.birth) : new Date())
          setProvinsi(data.provinsi)
          setKota(data.kota)
          setJenisKelamin(data.jenisKelamin)
          setPekerjaan(data.pekerjaan)
          setSumber(data.sumber)
          setKtp(data.ktp)
          setKriteria(data.categories)
        })
    }
  }

  function processSelectProvinsi(data){
    setProvinsi(data)
    dispatch(dataKota(data))
  }
  
  function getDataProvinsi(){
    dispatch(dataProvinsi())
      .then( data => {
        SetListProvinsi(data)
      })
  }

  const getDataKetertarikan = () => {
    dispatch(getKetertarikan())
      .then( data => {
        setKetertarikan(data)
      })
  }

  useEffect(() => {
    getDataKetertarikan()
  }, [])

  useEffect(() => {
    getDataProfile()
  }, [])

  useEffect(() => {
    getDataProvinsi()
  }, [])

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
              <h3 className="title-one text-center color-blue"><strong>Edit Profil Responden</strong></h3>
                <ul className="list-inline text-center">
                  <li className="list-inline-item">
                    <Link to='/responden' style={{textDecoration:"none"}}>
                    <h4 className="title-three color-blue">Beranda Responden</h4>
                    </Link>
                  </li>

                  <li className="list-inline-item">|</li>

                  <li className="list-inline-item">
                    <Link to='/responden/profile' style={{textDecoration:"none"}}>
                    <h4 className="title-three color-blue">Profil Responden</h4>
                    </Link>
                  </li>

                  <li className="list-inline-item">|</li>

                  <li className="list-inline-item">
                    <h4 className="title-three">Edit Profil Responden</h4>
                  </li>
                </ul>
            </Col>
          </Row>
          <Row className="m-t-30">
            <Col md={{ span: 8, offset:2}} lg={{ span: 8, offset:2}}>
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
                        <Col><DatePicker 
                          dateFormat="dd/MM/yyyy"
                          peekNextMonth
                          showMonthDropdown
                          showYearDropdown  
                          selected={birth}
                          onChange={date => setBirth(date)} /></Col>
                      </Row>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Jenis Kelamin</Form.Label>
                      <Form.Control as="select" required onChange ={ (e) => { setJenisKelamin(e.target.value) }}>
                        <option value= {`${dataProfile.jenisKelamin}`} > { dataProfile.jenisKelamin } </option>
                        {
                          !dataProfile.jenisKelamin ?
                          <>
                            <option value="Laki-laki">Laki-laki</option>
                            <option value="Perempuan">Perempuan</option>
                          </>
                          :
                            dataProfile.jenisKelamin === 'Laki-laki' 
                          ? 
                          <>
                            <option value="Perempuan">Perempuan</option>
                          </>
                          :
                          <>
                            <option value="Laki-laki">Laki-laki</option>
                          </>
                        }
                        {/* <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option> */}
                      </Form.Control>
                      <Form.Control.Feedback type="invalid">
                        Tolong Isi Jenis Kelamin Anda
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Jenis Pekerjaan</Form.Label>
                      <Form.Control as="select" onChange={(e) => setPekerjaan(e.target.value)}>
                        <option>{dataProfile.pekerjaan}</option>
                        {
                          optionDataPekerjaan
                            .filter(pekerjaan => pekerjaan != dataProfile.pekerjaan)
                            .map((dataOption, i) => {
                              return(
                                <option key={i}>{ dataOption }</option>
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
                      <Form.Control as="select"  onChange={ (e) => {processSelectProvinsi(e.target.value); }}>
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
                            <option key={data.id}>{data["Kabupaten/kota"]}</option>
                            )
                        }

                      </Form.Control>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Bagaimana Anda Mengetahui suRvplus</Form.Label>
                      <Form.Control as="select" onChange={(e) => setSumber(e.target.value)}>
                        <option>{dataProfile.sumber}</option>
                        {
                          optionSumber
                            .filter(sumber => sumber != dataProfile.sumber)
                            .map((dataOption, i) => {
                              return(
                                <option key={i}>{ dataOption }</option>
                              )
                            })
                        }
                      </Form.Control>
                    </Form.Group>

                    {/* <Form.Group>
                      <Form.Label>Ketertarikan</Form.Label>
                      <Row>
                        {
                          ketertarikan
                            .map((data, i) => {
                            return(
                              <Col md={3} lg={3} key={i}>
                                <Form.Check
                                  type="checkbox"
                                  checked={kriteria.some((nama) => nama === data.name)}
                                  label={`${data.name}`}
                                  value={`${data.name}`}
                                  onChange={ (e) => {handlePilihKriteria(e.target.value)}}
                                />
                              </Col>
                            )
                          })
                        }
                      </Row>
                    </Form.Group> */}

                    <Row>
                        <Col md={12} lg={12}>
                          <hr/>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={{ span: 4, offset:4}} lg={{span: 4, offset:4}}>
                        <Button variant="primary" type="submit" block>Simpan</Button>
                        </Col>
                      </Row>

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