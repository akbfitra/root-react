import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, useHistory, useLocation, Link } from 'react-router-dom'

import './css/style.css';
import {  Container, Row, Col, Form, Button, Table, Tab, Tabs} from 'react-bootstrap'
import { logoutProcess } from '../../../store/actions/userAction'
import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'

const TarikSaldo = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const processLogout = () => {
    dispatch(logoutProcess(history, location))
  }

  return(
    <>
    <Navbar/>
      <div id="tarik-saldo">
        <Container>
          <Row>
            <Col md={{ span: 8, offset:2}} lg={{ span: 8, offset:2}}>
              <h3 className="title-one text-center"><strong>Tarik Saldo</strong></h3>
                <ul className="list-inline text-center">
                  <li className="list-inline-item">
                    <Link to='/responden' style={{textDecoration:"none"}}>
                    <h4 className="title-three">Beranda Responden</h4>
                    </Link>
                  </li>

                  <li className="list-inline-item">|</li>

                  <li className="list-inline-item">
                  <h4 className="title-three">Tarik Saldo</h4>
                  </li>
                </ul>
            </Col>
          </Row>

          <Row className="m-t-30">
            <Col md={{ span: 8, offset:2}} lg={{ span: 8, offset:2}}>
              <Tabs defaultActiveKey="Tarik Saldo" id="noanim-tab-example">
                <Tab eventKey="Tarik Saldo" title="Tarik Saldo">
                  <Row>
                    <Col md={12} lg={12}>
                      <div className="part-one">
                        <Form.Group>
                          <Form.Label>No. Rekening</Form.Label>
                          <Form.Control 
                            type="text" 
                            placeholder=""/>
                        </Form.Group>

                        <Form.Group>
                          <Form.Label>Bank</Form.Label>
                          <Form.Control as="select">
                            <option value="">-- Pilih --</option> 
                            <option value="BCA">BCA</option> 
                            <option value="Mandiri">Mandiri</option> 
                            <option value="CIMB Niaga">CIMB Niaga</option> 
                          </Form.Control>
                        </Form.Group>

                        <Form.Group>
                          <Form.Label>Saldo Yang diinginkan</Form.Label>
                          <Form.Control 
                            type="text" 
                            placeholder="Minimal Rp 50.000,-"/>
                        </Form.Group>

                        <Row>
                          <Col md={12} lg={12}>
                            <Button variant="primary" type="submit">Simpan </Button>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>

                </Tab>

                <Tab eventKey="History" title="History Tarik Saldo">
                  <Row>
                    <Col md={12} lg={12}>
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>No.</th>
                            <th>Tanggal Penarikan</th>
                            <th>No. Rekening</th>
                            <th>Bank</th>
                            <th>Jumlah Penarikan</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </div>
    <Footer/>
    </>
  )
}

export default withRouter(TarikSaldo)