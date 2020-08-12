import React, { useEffect, useState } from 'react';
import { useDispatch, useStore, Connect } from 'react-redux';
import { withRouter, useHistory, useLocation, Link } from 'react-router-dom'

import './css/style.css';
import { Container, Row, Col, Form, Button, Accordion, Card, Tabs, Tab, Table} from 'react-bootstrap'

import { logoutProcess } from '../../../store/actions/userAction'
import { TOPUP_PAYMENT_SURVEYOR } from '../../../store/actions/topupAction'
import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'

const TopUpSurveyor = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const [amount, setAmount] = useState('')

  const processLogout = () => {
    dispatch(logoutProcess(history, location))
  }

  const postTopUpSurveyor = () => {
    dispatch(TOPUP_PAYMENT_SURVEYOR(amount, history))
  }

  return(
    <>
      <Navbar/>
        <div id="topup-surveyor">
          <Container>
            <Row>
              <Col md={{ span: 8, offset:2}} lg={{ span: 8, offset:2}}>
                <h3 className="title-one text-center"><strong>Isi Ulang Saldo</strong></h3>
                  <ul className="list-inline text-center">
                    <li className="list-inline-item">
                      <Link to='/surveyor' style={{textDecoration:"none"}}>
                      <h4 className="title-three">Beranda Surveyor</h4>
                      </Link>
                    </li>
                    <li className="list-inline-item">|</li>
                    <li className="list-inline-item">
                      <h4 className="title-three">Isi Ulang Saldo</h4>
                    </li>
                  </ul>
              </Col>
            </Row>
            <Row className="m-t-30">
              <Col md={{ span: 8, offset:2}} lg={{ span: 8, offset:2}}>
                <Tabs defaultActiveKey="Isi Ulang" id="noanim-tab-example">
                  <Tab eventKey="Isi Ulang" title="Isi Ulang">
                    <Row className="m-t-30">
                      <Col md={12} lg={12}>
                        <div className="part-one">
                          <Form.Group>
                            <Form.Label>Nominal Isi Ulang</Form.Label>
                            <Form.Control type="number" placeholder="" onChange={ (e) => setAmount(e.target.value)}/>
                          </Form.Group>

                          <Form.Group>
                          
                            <Button variant="primary" onClick={ postTopUpSurveyor}>Lanjut</Button>
                          
                          </Form.Group>
                        </div>
                      </Col>
                    </Row>
                  </Tab>

                  <Tab eventKey="Riwayat" title="Riwayat Isi Ulang">
                    <Row className="m-t-30">
                      <Col md={12} lg={12}>
                        <Table striped bordered hover>
                          <thead>
                            <tr>
                              <th>No.</th>
                              <th>Tanggal Isi Ulang</th>
                              {/* <th>Bank</th> */}
                              <th>Nominal Isi Ulang</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>-</td>
                              <td>-</td>
                              {/* <td>-</td> */}
                              <td>-</td>
                            </tr>
                          </tbody>
                        </Table>
                      </Col>
                    </Row>
                  </Tab>
                  <Tab eventKey="Metode" title="Metode Pembayaran Isi Ulang">
                    <Row className="m-t-30">
                      <Col md={12} lg={12}>
                      <Accordion>
                        <Card>
                          <Accordion.Toggle as={Card.Header} eventKey="0" style={{cursor:"pointer"}}>
                            Metode Pembayaran 1
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! I'm the body</Card.Body>
                          </Accordion.Collapse>
                        </Card>
                        <Card>
                          <Accordion.Toggle as={Card.Header} eventKey="1" style={{cursor:"pointer"}}>
                            Metode Pembayaran 2
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! I'm another body</Card.Body>
                          </Accordion.Collapse>
                        </Card>

                        <Card>
                          <Accordion.Toggle as={Card.Header} eventKey="2" style={{cursor:"pointer"}}>
                            Metode Pembayaran 3
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="2">
                            <Card.Body>Hello! I'm another body</Card.Body>
                          </Accordion.Collapse>
                        </Card>

                        <Card>
                          <Accordion.Toggle as={Card.Header} eventKey="4" style={{cursor:"pointer"}}>
                            Metode Pembayaran 4
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="4">
                            <Card.Body>Hello! I'm another body</Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
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

export default withRouter(TopUpSurveyor)