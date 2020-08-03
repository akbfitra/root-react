import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { withRouter, useHistory, useLocation, Link } from 'react-router-dom'

import './css/style.css';
import { Button, Container, Row, Col, Form, Alert} from 'react-bootstrap';
import { Footer } from '../../../components/footer';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


import { registerSurveyorProcess, getKetertarikan } from '../../../store/actions/userAction'
import { dataProvinsi, dataKota } from '../../../store/actions/kotaAction'

const RegisterSurveyor = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  let listKota = useSelector( state => state.tempat.tempat.kota)

  const [ email, setEmail] = useState('')
  const [ password, setPassword] = useState('')
  const [ username, setUsername] = useState('')
  const [ phone, setPhone] = useState('')
  const [ birth, setBirth] = useState('')
  const [ provinsi, setProvinsi] = useState('')
  const [ kota, setKota] = useState('')
  const [ pekerjaan, setPekerjaan] = useState('')
  const [ sumber, setSumber] = useState('')
  const [ tujuan, setTujuan ] = useState('')
  const [ ktp, setKtp] = useState('')
  const [ listProvinsi, SetListProvinsi ] = useState([])
  const [validated, setValidated] = useState(false);
  const [ errs, setErrs] = useState('') 
  const [show, setShow] = useState(false);
  const [ ketertarikan, setKetertarikan ] = useState([])

  const [ pilihCategories, setPilihCategories ] = useState([])

  const handlePilihKriteria = (kriteria) => {
    let cek = pilihCategories.includes(kriteria)
    if(!cek){
      setPilihCategories(arr => [...pilihCategories, kriteria])
    }else if(pilihCategories.indexOf(kriteria > -1)){
      setPilihCategories(pilihCategories.filter(item => item !== kriteria))
    }
  }
  

  const getDataKetertarikan = () => {
    dispatch(getKetertarikan())
      .then( data => {
        setKetertarikan(data)
      })
  }

  const processRegisterSurveyor = () => {
    dispatch(registerSurveyorProcess(email, password, username, phone, birth, provinsi, kota, pekerjaan, sumber, tujuan, ktp,pilihCategories, history, location))
    .then(() => {
        
    })
    .catch( err => {
      setErrs(err)
      setShow(true)
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    processRegisterSurveyor()
    setValidated(true);
  };

  function processSelectProvinsi(data){
    setProvinsi(data)
    // let idProvinsi = listProvinsi.find( el => el.nama === data )
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
    getDataKetertarikan()
  }, [])

  if(Array.isArray(errs)){
    setErrs(errs.join(' , '))
  }

  
  
  return(
    <>
      <div id="general-header">
        <div className="main-header-one">
          <Container>
            <Row>
              <Col md={8} lg={8} className="part-one">
                <Link to='/'>
                  <div className="table-100">
                    <div className="table-row">
                      <div className="table-cell-one">
                        <img src="../images/logo three.png" style={{height:'60px'}}></img>
                      </div>

                      <div className="table-cell-two">
                        <h3 className="m-t-0 m-b-0"><strong>suRvplus</strong></h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </Col>
              {/* <Col md={4} lg={4} className="part-two">
                <div className="table-100">
                  <div className="table-row">
                    <div className="table-cell-one">
                      <Link to="/login">
                        <Button variant="primary" className="float-right">LOGIN</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Col> */}
            </Row>
          </Container>
        </div>
      </div>

      <div id="register-surveyor">
      <Container>
        <Row>
          <Col md={{ span: 8, offset:2}} lg={{ span: 8, offset:2}}>
            <div className="part-one">
              <Row>
                <Col>
                  <h3 className="title-one text-center"><strong>Daftar Surveyor</strong></h3>
                  <hr className=""/>
                </Col>
              </Row>

              <Row>
                <Col>
                <Form
                  noValidate validated={validated} onSubmit={ handleSubmit }
                >
                  <Form.Group>
                    <Form.Label>Nama Lengkap</Form.Label>
                    <Form.Control type="text" placeholder="" required onChange={ (e) => {setUsername( e.target.value )}}/>
                    <Form.Control.Feedback type="invalid">
                      Tolong Isi Nama Lengkap Anda
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="" required onChange={ (e) => {setPassword( e.target.value )}}/>
                    <Form.Control.Feedback type="invalid">
                      Tolong Isi Password Anda
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Konfirmasi Password</Form.Label>
                    <Form.Control type="password" placeholder="" required onChange={ (e) => {setPassword( e.target.value )}}/>
                    <Form.Control.Feedback type="invalid">
                      Tolong Isi Konfirmasi Password Anda
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="" required onChange={ (e) => {setEmail( e.target.value )}}/>
                    <Form.Control.Feedback type="invalid">
                      Tolong Isi Email Anda
                    </Form.Control.Feedback>
                  </Form.Group>
                  
                  <Form.Group>
                    <Form.Label>No. Telepon</Form.Label>
                    <Form.Control type="text" placeholder="" required onChange={ (e) => {setPhone (e.target.value )}}/>
                    <Form.Control.Feedback type="invalid">
                      Tolong Isi Nomor Telepon Anda
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>No. Identitas</Form.Label>
                    <Form.Control type="number" placeholder="" required onChange={ (e) => {setKtp( e.target.value )}}/>
                    <Form.Control.Feedback type="invalid">
                      Tolong Nomor Identitas Anda
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Tanggal Lahir</Form.Label>
                    <Row>
                    <Col>
                      <DatePicker 
                        selected={birth}
                        dateFormat="dd/MM/yyyy"
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown  
                        onChange={date => setBirth(date)} 
                      />
                    </Col>
                    </Row>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Jenis Pekerjaan</Form.Label>
                    <Form.Control as="select" onChange={ (e) => {setPekerjaan( e.target.value )}} required>
                      <option value="Swasta">Swasta</option>
                      <option value="PNS/TNI/Polri">PNS/TNI/Polri</option>
                      <option value="Sedang mencari pekerjaan tetap">Sedang mencari pekerjaan tetap</option>
                      <option value="Sekolah/Kuliah">Sekolah/Kuliah</option>
                      <option value="Ibu Rumah Tangga">Ibu Rumah Tangga</option>
                      <option value="Lainnya">Lainnya</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                      Tolong Isi Jenis Pekerjaan Anda
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Provinsi Tempat Tinggal</Form.Label>
                    <Form.Control as="select" onChange={ (e) => {processSelectProvinsi(e.target.value); }} required>
                      <option value="">-- Pilih --</option>
                      { 
                        !listProvinsi 
                        ? 
                          <option>-- Pilih --</option>
                        :
                          listProvinsi.map( (data, i) => 
                          <option key={data._id} value={`${data.Provinsi}`}>{data.Provinsi}</option>
                          )
                      }
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                      Tolong Isi Provinsi Tempat Tinggal Anda
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Kabupaten/Kota Tempat Tinggal</Form.Label>
                    <Form.Control as="select" onChange={ (e) => {setKota( e.target.value )}} required>
                      <option value="">-- Pilih --</option>
                      { 
                        !listKota 
                        ? 
                          <option value="">-- Pilih --</option>
                        :
                          listKota.map( (data, i) => 
                          <option key={data._id} value={`${data["Kabupaten/kota"]}`}>{data["Kabupaten/kota"]}</option>
                          )
                      }
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                      Tolong Isi Kota Tempat Tinggal Anda
                    </Form.Control.Feedback>
                  </Form.Group>
                  
                  <Form.Group>
                    <Form.Label>Tujuan Survey</Form.Label>
                    <Form.Control as="select" onChange={ (e) => {setTujuan( e.target.value )}} required>
                      <option value="">-- Pilih --</option>
                      <option value="Keperluan Pribadi">Keperluan Pribadi</option>
                      <option value="Keperluan Pekerjaan" >Keperluan Pekerjaan</option>
                      <option value="Keperluan Tugas Kuliah/Pendidikan">Keperluan Tugas Kuliah/Pendidikan</option>
                      <option value="Lainnya">Lainnya</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                      Tolong Isi Tujuan Survey Anda
                    </Form.Control.Feedback>
                  </Form.Group>
                  
                  <Form.Group>
                    <Form.Label>Bagaimana Anda Mengetahui suRvplus</Form.Label>
                    <Form.Control as="select" onChange={ (e) => {setSumber( e.target.value )}} required>
                      <option value="">-- Pilih --</option>
                      <option value="Jaringan Pribadi">Jaringan Pribadi</option>
                      <option value="Media Sosial">Media Sosial</option>
                      <option value="Iklan Surat Kabar/TV">Iklan Surat Kabar/TV</option>
                      <option value="Lainnya">Lainnya</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                      Tolong Isi dimana Anda mengetahaui survplus
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Ketertarikan</Form.Label>
                    <Row>
                      {
                        ketertarikan.map((data, i) => {
                          return(
                            <Col md={3} lg={3} key={i}>
                              <Form.Check
                              type="checkbox" 
                              label={`${data.name}`}
                              value={`${data.name}`}
                              onChange={ (e) => {handlePilihKriteria(e.target.value)}}
                              />
                            </Col>
                          )
                        })
                      }
                      {/* <Col md={3} lg={3}>
                        <Form.Check 
                        type="checkbox" 
                        label="Ketertarikan2" 
                        required/>
                      </Col>
                      <Col md={3} lg={3}>
                        <Form.Check
                        type="checkbox" 
                        label="Ketertarikan1"
                        required/>
                      </Col>
                      <Col md={3} lg={3}>
                        <Form.Check 
                        type="checkbox" 
                        label="Ketertarikan2" 
                        required/>
                      </Col>
                      <Col md={3} lg={3}>
                        <Form.Check
                        type="checkbox" 
                        label="Ketertarikan1"
                        required/>
                      </Col>
                      <Col md={3} lg={3}>
                        <Form.Check 
                        type="checkbox" 
                        label="Ketertarikan2" 
                        required/>
                      </Col>
                      <Col md={3} lg={3}>
                        <Form.Check
                        type="checkbox" 
                        label="Ketertarikan1"
                        required/>
                      </Col>
                      <Col md={3} lg={3}>
                        <Form.Check 
                        type="checkbox" 
                        label="Ketertarikan2" 
                        required/>
                      </Col> */}
                    </Row>
                    
                    
                  </Form.Group>

                  <Row>
                    <Col md={12} lg={12}>
                    <hr/>
                    </Col>
                  </Row>

                  <Form.Group className="m-b-0">
                    <Form.Check type="checkbox" required label="Saya telah membaca, memahami, dan menyetujui Syarat dan Ketentuan bagi Surveyor" />
                    <Form.Check type="checkbox" required label="Saya bersedia menerima informasi promosi dan penawaran dari suRvplus terkait dengan layanan survey online dan lainnya" />
                  </Form.Group>
                  
                  <>
                    <Alert show={show} variant="danger" onClose={() => setShow(false)} dismissible>
                      <Alert.Heading>Error?!</Alert.Heading>
                      <p>
                        { errs }
                      </p>
                    </Alert>
                  </>

                  <Row>
                    <Col>
                    <hr/>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={{ span: 4, offset:4}}>
                    <Button variant="primary" type="submit" block>Daftar</Button>
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

export default withRouter(RegisterSurveyor)
