import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, useHistory, useLocation } from 'react-router-dom'

import './css/style.css';
import {  Container, Row, Col, Table} from 'react-bootstrap'
import { logoutProcess } from '../../../store/actions/userAction'
import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'

const TentangKami = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const processLogout = () => {
    dispatch(logoutProcess(history, location))
  }

  return(
    <>
    <Navbar/>
      <div id="tentang-kami">
        <Container>
          <Row>
            <Col md={12} lg={12}>
              <div className="part-one">
              <Row>
                <Col md={12} lg={12}>
                  <h3 className="title-one text-center"><strong>Tentang Survplus</strong></h3>
                  <hr className=""/>
                </Col>
              </Row>

              <Row>
                <Col md={12} lg={12}>
                <p>Survplus merupakan portal survei online dengan manfaat plus-plus.</p>
                <p>Survplus hadir untuk menjembatani antara dua pihak utama sebagai berikut :</p>
                <Table borderless  size="sm" className="m-b-0">
                  <tbody>
                    <tr>
                      <td>1.</td>
                      <td>Surveyor, yaitu pihak yang membutuhkan pendapat untuk dijadikan pertimbangan dalam pengambilan keputusan;</td>
                    </tr>
                    <tr>
                      <td>2.</td>
                      <td>Responden, yaitu pihak yang memberikan pendapat tentang sesuatu hal yang dibutuhkan surveyor.</td>
                    </tr>
                  </tbody>
                </Table>
                <p>Kami meyakini setiap keputusan yang diambil berdasarkan partisipasi pendapat dari lebih
                banyak orang, akan menghasilkan keputusan yang lebih baik.</p>
                <p>Dalam menjembatani antara surveyor dengan responden, Survplus menyediakan fasilitas pembuatan kuesioner dan pelaksanaan survei dalam satu platform. Survplus juga melakukan
                penyaringan kesesuain profil dan ketertarikan responden yang dibutuhkan oleh surveyor.</p>
                <p>Manfaat utama bagi surveyor dan responden adalah:</p>
                <Table borderless  size="sm" className="m-b-0">
                  <tbody>
                    <tr>
                      <td>1.</td>
                      <td>Surveyor akan menerima pendapat yang lebih berkualitas karena berasal dari responden dengan profil dan ketertarikan yang relevan;</td>
                    </tr>
                    <tr>
                      <td>2.</td>
                      <td>Responden akan merasa lebih nyaman dan antusias dalam mengisi kuesioner karena pendapat yang ditanyakan sesuai dengan profil dan bidang ketertarikannya.</td>
                    </tr>
                  </tbody>
                </Table>
                <p>Selamat bergabung dengan Survplus untuk menjadi bagian dari suatu kolaborasi yang akan terus menghasilkan keputusan-keputusan terbaik bagi masa depan.</p>
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

export default withRouter(TentangKami)