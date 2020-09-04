import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, useHistory, useLocation } from 'react-router-dom'

import './css/style.css';
import {  Container, Row, Col, Table} from 'react-bootstrap'
import { logoutProcess } from '../../../store/actions/userAction'
import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'

const KontakKamiResponden = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const processLogout = () => {
    dispatch(logoutProcess(history, location))
  }

  return(
    <>
      <Navbar/>
      <div id="kontak-kami">
        <Container>
          <Row>
            <Col md={12} lg={12}>
              <div className="part-one">
              <Row>
                <Col md={12} lg={12}>
                  <h3 className="title-one text-center"><strong>Kontak Survplus</strong></h3>
                  <hr className=""/>
                </Col>
              </Row>

              <Row>
                <Col md={7} lg={7}>
                  <div style={{width:'100%', height:'400px', backgroundColor:'#e0e0e0'}}></div>
                </Col>
                <Col md={5} lg={5}>
                <Table borderless size="sm" className="m-b-0">
                  <tbody>
                    <tr>
                      <td style={{width:'40px'}}><img src="/images/phone.svg"></img></td>
                      <td style={{width:'1px'}}>:</td>
                      <td>0812 1234 0433</td>
                    </tr>
                    
                    <tr>
                      <td><img src="/images/envelop.svg"></img></td>
                      <td>:</td>
                      <td>admin@survplus.id</td>
                    </tr>
                    
                    <tr>
                      <td><img src="/images/fb.svg"></img></td>
                      <td>:</td>
                      <td><a href="https://www.facebook.com/survplus.id/" target="_blank">Survplus.id</a></td>
                    </tr>

                    <tr>
                      <td><img src="/images/ig.svg"></img></td>
                      <td>:</td>
                      <td><a href="https://www.instagram.com/survplus.id/">Survplus.id</a></td>
                    </tr>

                    <tr>
                      <td><img src="/images/youtube.svg"></img></td>
                      <td>:</td>
                      <td> <a href="https://www.youtube.com/channel/UCgoS1AWjifIoLYvYLou-KSg/?guided_help_flow=5" target="_blank">Survplus Indonesia</a></td>
                    </tr>

                    <tr>
                      <td><img src="/images/twitter.svg"></img></td>
                      <td>:</td>
                      <td><a href="https://twitter.com/survplus" target="_blank">Survplus</a></td>
                    </tr>

                    <tr>
                      <td><img src="/images/wa.svg"></img></td>
                      <td>:</td>
                      <td>0812 1234 0433</td>
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

export default withRouter(KontakKamiResponden)