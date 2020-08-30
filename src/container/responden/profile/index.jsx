import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import { instance } from '../../../config/axios'

import { dataProfileUser } from '../../../store/actions/userAction'

import './css/style.css';
import { Button, Modal, Container, Row, Col, Table, Alert, Form, Badge} from 'react-bootstrap'
import moment from 'moment'

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { MdAddAPhoto } from 'react-icons/md'

import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'

const ProfileResponden = (props) => {
  const dispatch = useDispatch()

  const [dataProfile, SetDataProfile] = useState('')
  const [dataKetertarikan, setDataKetertarikan ] = useState([])
  const [ file, setFile ] = useState('')
  const [ imagePreview, setImagePreview ] = useState('')
  const [ percentUpload, setPercentUpload ] = useState(0)
  const [ changeData, setChangeData] = useState(false)

  const [modalShow, setModalShow] = useState(false);
  
  const handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      
      setFile(file)
      setImagePreview(reader.result)
    }

    reader.readAsDataURL(file)
  }

  const handleUpload = (e) => {
    e.preventDefault();
    const fd = new FormData()
    fd.append('profile', file, file.name)
    console.log(file, file.name)
    
    instance.post('/user/uploadfoto', fd , { headers: {"accesstoken": `${Cookies.get('test')}`}, onUploadProgress: progressEvent => setPercentUpload( Math.round(progressEvent.loaded / progressEvent.total * 100)) })
      .then( data => {
        // setKtp(data.data['NIK'])
        setChangeData(true)
        setModalShow(false)
        toast.info('👌👌👌Anda Mengupload Foto Profile!!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      })
      .catch( err => {
        toast.danger('👌👌👌Terjadi Error', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      })

  } 
  const getDataProfile = () => {
    if(!dataProfile || changeData){
      dispatch(dataProfileUser())
        .then( data => {
          SetDataProfile(data)
          setDataKetertarikan(data.categories)
          setChangeData(false)
        })
    }
  }

  // // let ketertarikanProfile = dataProfile.categories.join(' ,')
  // console.log(dataProfile.categories)

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
            <h3 className="title-one text-center color-blue"><strong>Profil Responden</strong></h3>
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <Link to='/responden' style={{textDecoration:"none"}}>
                  <h4 className="title-three color-blue">Beranda Responden</h4>
                  </Link>
                </li>

                <li className="list-inline-item">|</li>

                <li className="list-inline-item">
                  <h4 className="title-three">Profil Responden</h4>
                </li>
              </ul>
          </Col>
        </Row>
        <Row className="m-t-30">
          <Col md={12} lg={12}>
          <Alert variant="primary">
            <Alert.Heading className="text-center  m-b-0">Lengkapi profil anda, dan mulai menghasilkan uang</Alert.Heading>
          </Alert>
          </Col>
        </Row>
        <Row>
          <Col md={3} lg={3}>
            <div className="part-one">
              <Row>
                <Col md={12} lg={12}>
                  <center>
                  <Button variant="outline-warning" style= {{  top:'50%',
                                    left: '50%',
                                    position: 'absolute',
                                    transform: 'translate(-50%, -50%)'}}
                                    onClick={() => setModalShow(true)}>
                    <MdAddAPhoto/>
                  </Button>
                  <img src={ dataProfile && dataProfile.foto_profile ? `http://149.129.240.254:8889/profile/${dataProfile.foto_profile}`:"../images/user_profil.png"} style={{borderRadius:"100%",width:'180px'}}/>
                  
                  </center>
                </Col>
              </Row>
              <Row>
                <Col md={12} lg={12}>
                  <h3 className="title-two  m-t-15 text-center"><strong>{dataProfile.name}</strong></h3>
                  {/* <h3 className="title-three text-center m-t-5"><strong>{dataProfile.email}</strong></h3>
                  <h3 className="title-three text-center m-t-5"><strong>{dataProfile.phone}</strong></h3> */}
                </Col>
              </Row>

              <Row>
                <Col md={12} lg={12}>
                <hr/>
                <Link to='/responden/profile/edit' style={{textDecoration:"none"}}>
                  <Button variant="primary" block>Edit Profil</Button>
                </Link>
                <Link to='/responden/profile/editpassword' style={{textDecoration:"none"}}>
                  <Button variant="primary" block style={{marginTop:'15px'}}>Edit Password</Button>
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
                          <td>Jenis Kelamin</td>
                          <td>:</td>
                          <td> {dataProfile.jenisKelamin} </td>
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
                          <td>Kabupaten/Kota Tempat Tinggal</td>
                          <td>:</td>
                          <td>{dataProfile.kota}</td>
                        </tr>

                        <tr>
                          <td>Bagaimana Anda Mengetahui suRvplus</td>
                          <td>:</td>
                          <td>{dataProfile.sumber}</td>
                        </tr>

                        <tr>
                          <td>Ketertarikan</td>
                          <td>:</td>
                          <td> {dataKetertarikan.join(', ') } </td>
                        </tr>

                        <tr>
                          <td>KTP</td>
                          <td>:</td>
                          <td> <img src={ dataProfile && dataProfile.foto_ktp ? `http://149.129.240.254:8889/ktp/${dataProfile.foto_ktp}`:"../images/noimage.png"} style={{width:'180px', height:'100px'}}/> </td>
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

      <ToastContainer />

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Upload Foto Profile
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Upload Foto Profile</Form.Label>
            <Form.Control type="file" placeholder=""  onChange={handleImageChange} />
            <Badge variant="info"> {percentUpload}% </Badge>
          </Form.Group>

            {/* <input type="file" onChange={handleImageChange} />
            <button onClick={handleUpload}>Upload Image</button> */}
            {
              imagePreview &&
              <>
                <img src={imagePreview} style={{ height:"200px", width:"320px"}}/>
              </>
            }
        </Modal.Body>
        <Modal.Footer>
            {
              file &&
                <Button onClick={handleUpload}>Submit foto profile</Button>
            }
          <Button variant="secondary" onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}



export default withRouter(ProfileResponden)