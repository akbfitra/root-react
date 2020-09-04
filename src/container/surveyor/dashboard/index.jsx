import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import './css/style.css';
import { Container, Row, Col} from 'react-bootstrap'

import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'

import { getDataAllUser } from '../../../store/actions/userAction'

const SurveyorDashboard = (props) => {


  const dispatch = useDispatch()

  const [ allUser, setAllUser ] = useState('')

  let dataResponden = 0
  let dataSurveyor = 0


  if(allUser){
    dataResponden = allUser.filter(el => el.role === 'responden').length
    dataSurveyor = allUser.filter(el => el.role === 'surveyor').length
  }

  const getAllUser = () => {
    dispatch(getDataAllUser())
      .then( data => {
        setAllUser(data)
      })
  }

  useEffect(() => {
    getAllUser()
  }, [])

  return(
    <>
      <Navbar/>

      <h1>{dataResponden} responden</h1>
      <h1>{dataSurveyor} surveyor</h1>

      <div id="dashboard-surveyor">
      <Container>
        <Row>
          <Col>
            <h3 className="title-one text-center"><strong>Beranda Surveyor</strong></h3>
          </Col>
        </Row>
        <Row className="m-t-30">
          <Col md={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }}>
            <Row>
            <Col md={4} lg={4}>
              <Link to = '/surveyor/profile' style={{textDecoration:"none"}}>
              <div className="part-one">
                <center>
                <img src="images/ProfilSurveyor.svg" style={{height:'160px', width:'160px'}}/>
                <h4 className="title-two m-t-15"><strong>Profil</strong></h4>
                </center>
              </div>
              </Link>
            </Col>

            <Col md={4} lg={4}>
              <Link to = '/surveyor/liststudy' style={{textDecoration:"none"}}>
              <div className="part-one">
                <center>
                <img src="images/StudiSurveyor.svg" style={{height:'160px', width:'160px'}}/>
                <h4 className="title-two m-t-15"><strong>Studi</strong></h4>
                </center>
              </div>
              </Link>
            </Col>

            <Col md={4} lg={4}>
              <Link to = '/surveyor/topup' style={{textDecoration:"none"}}>
              <div className="part-one">
                <center>
                <img src="images/TopupSurveyor.svg" style={{height:'160px', width:'160px'}}/>
                <h4 className="title-two m-t-15"><strong>Isi Ulang Saldo</strong></h4>
                </center>
              </div>
              </Link>
            </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      </div>

     <Footer/>
    </>
  )
}

export default withRouter(SurveyorDashboard)