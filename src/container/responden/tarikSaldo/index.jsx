import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, useHistory, useLocation } from 'react-router-dom'

import './css/style.css';
import {  Container, Row, Col, Form, Button, Table} from 'react-bootstrap'
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
              <Col  md={{ span: 8, offset:2}} lg={{ span: 8, offset:2}}>
                <div className="part-one">
                <Row>
                  <Col md={12} lg={12}>
                    <h3 className="title-one text-center"><strong>Tarik Saldo</strong></h3>
                    <hr className=""/>
                  </Col>
                </Row>

                <Row>
                  <Col md={12} lg={12}>
                  <Form>
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
                  </Form>
                  </Col>
                </Row>

                <Row>
                  <Col md={12} lg={12}>
                    <hr className=""/>
                  </Col>
                </Row>


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
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    <Footer/>
    </>
  )
}

export default withRouter(TarikSaldo)