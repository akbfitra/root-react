import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, useHistory, useLocation } from 'react-router-dom'

import './css/style.css';
import {  Container, Row, Col, Table} from 'react-bootstrap'
import { logoutProcess } from '../../../store/actions/userAction'
import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'

const TentangSurveyor = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const processLogout = () => {
    dispatch(logoutProcess(history, location))
  }

  return(
    <>
      <Navbar/>
      <div id="tentang-surveyor">
        <Container>
          
          <Row>
            <Col md={12} lg={12}>
              <div className="part-one">
              <Row>
                <Col md={12} lg={12}>
                  <h3 className="title-one text-center"><strong>Surveyor Survplus</strong></h3>
                  <hr className=""/>
                </Col>
              </Row>

              <Row>
                <Col md={12} lg={12}>
                <p>Surveyor adalah pihak yang membutuhkan pendapat dari responden untuk dijadikan
                pertimbangan dalam pengambilan keputusan. Dalam mengumpulkan pendapat responden,
                surveyor menyusun dan merilis kuesioner kepada calon responden di dalam sistem Survplus.
                Survplus sangat memahami kebutuhan surveyor untuk mengumpulkan pendapat responden
                yang berkualitas, relevan dan valid dalam jumlah besar secara cepat.</p>

                <p>Untuk itu, Survplus telah menyediakan berbagai instrumen handal yang dibutuhkan surveyor
                dalam melakukan survey dengan kuesioner, sebagai berikut:</p>
                <Table borderless size="sm" className="m-b-0">
                  <tbody>
                    <tr>
                      <td>1.</td>
                      <td>Pembuatan kuesioner dengan pilihan jenis jawaban dalam bentuk teks dan pilihan
ganda (single maupun multi select);</td>
                    </tr>
                    <tr>
                      <td>2.</td>
                      <td>Penyaringan responden yang ditentukan oleh surveyor sesuai kebutuhan berdasarkan
variabel demografi maupun ketertarikan;</td>
                    </tr>
                    <tr>
                      <td>3.</td>
                      <td>Pengumpulan isian kuesioner oleh responden secara realtime yang dapat dipantau oleh
surveyor untuk diverifikasi;</td>
                    </tr>
                    <tr>
                      <td>4.</td>
                      <td>Surveyor akan menerima detail jawaban dari setiap responden dan rekapitulasi secara
keseluruhan.</td>
                    </tr>
                  </tbody>
                </Table>
                <p>Berikut langkah-langkah mudah untuk bergabung menjadi surveyor Survplus:</p>
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
                      <td>Memanfaatkan Survplus untuk melakukan survei dengan kuesioner.</td>
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

export default withRouter(TentangSurveyor)