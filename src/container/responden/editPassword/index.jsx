import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, useHistory, useLocation, Link} from 'react-router-dom'

import './css/style.css';
import { Container, Row, Col, Form, Button, Alert} from 'react-bootstrap'

import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'

import { EDIT_PASSWORD_RESPONDEN } from '../../../store/actions/userAction/index'

const EditPasswordResponden = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const [passwordLama, setPasswordLama] = useState('')
  const [ changePassword, setChangePassword ] = useState('')
  const [ konfirmasiPasswordBaru, setKonfirmasiPasswordBaru] = useState('')
  const [ errs, setErrs] = useState('') 
  const [ show, setShow ] = useState(false);
  const [validated, setValidated] = useState(false);
  

  const handleSubmit = event => {
    event.preventDefault()
    const form = event.currentTarget;

    if ((form.checkValidity() === false) && (changePassword !== konfirmasiPasswordBaru) ) {
      event.preventDefault();
      event.stopPropagation();
    } else if( (form.checkValidity() === true) && (changePassword === konfirmasiPasswordBaru)) {
      processEditPasswordResponden()
    }
    setValidated(true);
  };

  const processEditPasswordResponden = () => {
    dispatch(EDIT_PASSWORD_RESPONDEN(changePassword, passwordLama, history))
      .then(() => {
        
      })
      .catch( err => {
        setErrs(err)
        setShow(true)
      })
  }

  return(
    <>
    <Navbar/>
      <div id="profile-responden">
      <Container>
        <Row>
          <Col md={{ span: 8, offset:2}} lg={{ span: 8, offset:2}}>
            <h3 className="title-one text-center color-blue"><strong>Ubah Password</strong></h3>
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
                  <h4 className="title-three">Ubah Password</h4>
                </li>
              </ul>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 8, offset:2}} lg={{ span: 8, offset:2}}>
            <div className="part-one">
            <Row>
              <Col md={12} lg={12}>
                <Form 
                noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group>
                    <Form.Label>Password lama</Form.Label>
                    <Form.Control 
                      required
                      type="password" 
                      placeholder=""
                      onChange={(e) => setPasswordLama(e.target.value)}
                      />
                    <Form.Control.Feedback type="invalid">
                      Tolong Isi Password Lama Anda
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Password baru</Form.Label>
                    <Form.Control 
                      required
                      type="password" 
                      placeholder=""
                      onChange ={(e) => setChangePassword(e.target.value)}
                      />
                    <Form.Control.Feedback type="invalid">
                      Tolong Isi Password Baru Anda
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Konfirmasi password baru</Form.Label>
                    <Form.Control 
                      type="password" 
                      placeholder=""
                      isInvalid={ konfirmasiPasswordBaru !== changePassword ? true : false}
                      onChange ={(e) => setKonfirmasiPasswordBaru(e.target.value)}
                      />
                    <Form.Control.Feedback type="invalid">
                      Konfirmasi Password Anda tidak sama
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Alert show={show} variant="danger" onClose={() => setShow(false)} dismissible>
                      <Alert.Heading>Error?!</Alert.Heading>
                      <p>
                        { errs }
                      </p>
                    </Alert>
                  <Button variant="primary" type="submit">Ubah</Button>
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

export default withRouter(EditPasswordResponden)