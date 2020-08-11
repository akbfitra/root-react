import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, useHistory, useLocation, Link} from 'react-router-dom'

import './css/style.css';
import { Container, Row, Col, Form, Button} from 'react-bootstrap'
import { logoutProcess } from '../../../store/actions/userAction'

import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'

const EditPasswordResponden = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const processLogout = () => {
    dispatch(logoutProcess(history, location))
  }

  return(
    <>
    <Navbar/>
      <div id="profile-responden">
      <Container>
        <Row>
          <Col md={{ span: 8, offset:2}} lg={{ span: 8, offset:2}}>
            <h3 className="title-one text-center"><strong>Ubah Password</strong></h3>
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <Link to='/responden' style={{textDecoration:"none"}}>
                  <h4 className="title-three">Beranda Responden</h4>
                  </Link>
                </li>
                <li className="list-inline-item">|</li>
                <li className="list-inline-item">
                  <Link to='/responden/profile' style={{textDecoration:"none"}}>
                  <h4 className="title-three">Profil Responden</h4>
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
                <Form>
                  <Form.Group>
                    <Form.Label>Password lama</Form.Label>
                    <Form.Control 
                      type="password" 
                      placeholder=""
                      />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Password baru</Form.Label>
                    <Form.Control 
                      type="password" 
                      placeholder=""
                      />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Konfirmasi password baru</Form.Label>
                    <Form.Control 
                      type="password" 
                      placeholder=""
                      />
                  </Form.Group>

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