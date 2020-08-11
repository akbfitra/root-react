import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, useHistory, useLocation, Link } from 'react-router-dom'

import './css/style.css';
import { Container, Row, Col, Button, Table} from 'react-bootstrap'

import { logoutProcess } from '../../../store/actions/userAction'

import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'

const CheckoutTopSurveyor = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const processLogout = () => {
    dispatch(logoutProcess(history, location))
  }

  return(
    <>
      <Navbar/>
        <div id="checkout-topup">
          <Container>
            <Row>
              <Col md={{ span: 8, offset:2}} lg={{ span: 8, offset:2}}>
                <h3 className="title-one text-center"><strong>Checkout Isi Ulang Saldo</strong></h3>
                  <ul className="list-inline text-center">
                    <li className="list-inline-item">
                      <Link to='/surveyor' style={{textDecoration:"none"}}>
                      <h4 className="title-three">Beranda Surveyor</h4>
                      </Link>
                    </li>
                    <li className="list-inline-item">|</li>
                    <li className="list-inline-item">
                     <Link to='/surveyor/topup' style={{textDecoration:"none"}}>
                      <h4 className="title-three">Isi Saldo</h4>
                      </Link>
                    </li>
                    <li className="list-inline-item">|</li>
                    <li className="list-inline-item">
                      <h4 className="title-three">Checkout Isi Ulang Saldo</h4>
                    </li>
                  </ul>
              </Col>
            </Row>


            <Row className="m-t-30">
              <Col md={{ span: 8, offset:2}} lg={{ span: 8, offset:2}}>
                <div className="part-one table-no-border">
                  <Table bordered>
                    <tbody>
                      <tr>
                        <td style={{width:'200px'}}>Bank</td>
                        <td style={{width:'1px'}}>:</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>Nominal Isi Ulang</td>
                        <td>:</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>Biaya Admin</td>
                        <td>:</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td colSpan="2">Total Pembayaran</td>
                        <td>Rp 0,-</td>
                      </tr>
                    </tbody>
                  </Table>

                  <Row>
                  <Col md={2} lg={2}>
                    <Button variant="primary" block>Bayar</Button>
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

export default withRouter(CheckoutTopSurveyor)