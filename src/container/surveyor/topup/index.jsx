import React, { useEffect, useState } from 'react';
import { useDispatch, useStore, Connect } from 'react-redux';
import { withRouter, useHistory, useLocation, Link } from 'react-router-dom'

import './css/style.css';
import { Container, Row, Col, Form, Button, Accordion, Card} from 'react-bootstrap'

import { logoutProcess } from '../../../store/actions/userAction'

import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'

const TopUpSurveyor = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const processLogout = () => {
    dispatch(logoutProcess(history, location))
  }

  return(
    <>
      <Navbar/>
      <div id="topup-surveyor">
      <Container>
        <Row>
          <Col md={{ span: 8, offset:2}} lg={{ span: 8, offset:2}}>
            <h3 className="title-one text-center"><strong>Top Up</strong></h3>
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <Link to='/surveyor' style={{textDecoration:"none"}}>
                  <h4 className="title-three">Dashboard Surveyor</h4>
                  </Link>
                </li>
                <li className="list-inline-item">|</li>
                <li className="list-inline-item">
                  <h4 className="title-three">Top Up</h4>
                </li>
              </ul>
          </Col>
        </Row>


        <Row>
          <Col md={12} lg={12}>
            <div className="part-one">
              <Row>
                <Col md={6} lg={6}>
                    <Form.Group>
                      <Form.Label>Jumlah Saldo Topup</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Bank</Form.Label>
                      <Form.Control as="select">
                        <option>-- Pilih --</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group>
                      <Button variant="primary">Simpan</Button>
                    </Form.Group>
                </Col>
                <Col md={6} lg={6}>
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
            </div>
          </Col>
        </Row>
      </Container>
      </div>
      <Footer/>
    </>
  )
}

export default withRouter(TopUpSurveyor)