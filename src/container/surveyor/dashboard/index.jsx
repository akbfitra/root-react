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
      <div id="dashboard-surveyor">
      <Container>
        <Row>
          <Col>
            <h3 className="title-one text-center"><strong>Beranda Surveyor</strong></h3>
          </Col>
        </Row>
        <Row className="m-t-30">
          <Col md={{ span: 8, offset:2}} lg={{ span: 8, offset:2}}>
            <Row>
              <Col md={6} lg={6} xs={6} sm={6}>
                  <div style={{width:'100%', height:'100px', backgroundColor:'#F9F9F9', display:'flex', justifyContent:'flex-start', alignItems:'center', flexDirection: 'row-reverse', paddingRight:'15px', borderRadius:'8px', boxShadow:' 4px 4px 4px rgba(0,0,0,0.25)'}}>
                    
                    <img src="images/decor4.png" style={{height:'85px', marginLeft:'10px'}}></img>
                    <div style={{display:'flex', flexDirection:'column'}}>
                    <h5 className="text-right d-none d-none d-xl-block d-none d-lg-block d-xl-none d-none d-md-block d-lg-none"><strong>Jumlah Surveyor<br/>Terdaftar</strong></h5>
                    <h6 className="text-right d-none d-none d-sm-block d-md-none d-block d-sm-none"><strong>Jumlah<br/>Surveyor<br/>Terdaftar</strong></h6>
                    <h4 className="text-right"><strong>{dataSurveyor}</strong></h4>
                    </div>
                    
                  </div>
              </Col>
              <Col md={6} lg={6} xs={6} sm={6}>
                  <div style={{width:'100%', height:'100px', backgroundColor:'#F9F9F9', display:'flex', justifyContent:'flex-start', alignItems:'center', paddingLeft:'15px', borderRadius:'8px', boxShadow:' 4px 4px 4px rgba(0,0,0,0.25)'}}>
                    <img src="images/decor5.png" style={{height:'85px', marginRight:'10px'}}></img>
                    <div style={{display:'flex', flexDirection:'column'}}>
                    <h5 className="text-left d-none d-none d-xl-block d-none d-lg-block d-xl-none d-none d-md-block d-lg-none"><strong>Jumlah Responden<br/>Terdaftar</strong></h5>
                    <h6 className="text-left d-none d-none d-sm-block d-md-none d-block d-sm-none"><strong>Jumlah<br/>Responden<br/>Terdaftar</strong></h6>
                    <h4 className="text-left"><strong>{dataResponden}</strong></h4>
                    </div>
                  </div>
              </Col>
            </Row>
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