import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, useHistory, useLocation } from 'react-router-dom'

import './css/style.css';
import {  Container, Row, Col, Table} from 'react-bootstrap'
import { logoutProcess } from '../../../store/actions/userAction'
import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'

const TentangResponden = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const processLogout = () => {
    dispatch(logoutProcess(history, location))
  }

  return(
    <>
      <Navbar/>
      <div id="tentang-responden">
        <Container>
          
          <Row>
            <Col md={12} lg={12}>
              <div className="part-one">
              <Row>
                <Col md={12} lg={12}>
                  <h3 className="title-one text-center"><strong>Responden Survplus</strong></h3>
                  <hr className=""/>
                </Col>
              </Row>

              <Row>
                <Col md={12} lg={12}>
                <p>Responden memberikan pendapat langsung
                melalui Survplus dalam form kuesioner survei yang dibuat oleh surveyor atau juga yang dibuat
                oleh Survplus.</p>
                <p>Survplus sangat mengapresiasi upaya dan waktu yang didedikasikan responden untuk mengisi
                kuesioner. Untuk itu Survpus memberikan kompensasi yang layak bagi responden, antara lain:</p>
                <Table borderless size="sm" className="m-b-0">
                  <tbody>
                    <tr>
                      <td>1.</td>
                      <td>Pemasukan finansial dalam bentuk saldo yang sewaktu-waktu dapat dicairkan;</td>
                    </tr>
                    <tr>
                      <td>2.</td>
                      <td>Kesempatan dalam mengetahui hal-hal baru;</td>
                    </tr>
                    <tr>
                      <td>3.</td>
                      <td>Ruang untuk mengekspresikan pendapat yang akan dijadikan pertimbangan perbaikan layanan produk atau jasa yang digunakan responden.</td>
                    </tr>
                  </tbody>
                </Table>
                <p>Berikut langkah-langkah mudah untuk bergabung menjadi responden Survplus:</p>
                <Table borderless size="sm" className="m-b-0">
                  <tbody>
                    <tr>
                      <td>1.</td>
                      <td>Lakukan pendaftaran akun;</td>
                    </tr>
                    <tr>
                      <td>2.</td>
                      <td>Verifikasi pada alamat email yang digunakan;</td>
                    </tr>
                    <tr>
                      <td>3.</td>
                      <td>Login menggunakan email dan password yang didaftarkan;</td>
                    </tr>
                    <tr>
                      <td>4.</td>
                      <td>Mengisi kuesioner perkenalan untuk memberikan gambaran cara pengisian kuesioner dan sekaligus melakukan aktivasi status responden.</td>
                    </tr>
                  </tbody>
                </Table>

                <p>Setelah status responden Anda aktif, Anda dapat mengeksplorasi menu dalam Survplus, antara
                lain: melengkapi ketertarikan, mengisi kuesioner yang ditawarkan, menerima pemasukan
                finansial dalam saldo, melakukan penarikan saldo.</p>
                <p>Anda akan menerima pemasukan dalam saldo setelah mengisi kuesioner dan selesai
                diverifikasi. Besaran pemasukan yang akan Anda terima bervariasi yang dapat dilihat dalam
                informasi setiap kuesioner yang masuk.</p>
                <p>Pengisian kuesioner yang akan ditawarkan kepada Anda adalah kuesioner yang relevan
                dengan profil dan ketertarikan anda yang ditentukan oleh pembuat kuesioner. Hal ini berarti,
                semakin lengkap anda mengisi ketertarikan Anda, maka semakin besar peluang tawaran
                pengisian kuesioner serta pemasukan finansial yang dapat Anda terima.
                </p>
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

export default withRouter(TentangResponden)