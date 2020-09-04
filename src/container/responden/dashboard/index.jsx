import React, { useState, useEffect} from 'react';
import { withRouter, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import './css/style.css';
import { Container, Row, Col} from 'react-bootstrap'

import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'

import { getDataAllUser } from '../../../store/actions/userAction'

const RespondenDashboard = (props) => {

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

      <div id="dashboard-responden">
      <Container>
        <Row>
          <Col md={12} lg={12}>
            <h3 className="title-one text-center color-blue"><strong>Beranda Responden</strong></h3>
          </Col>
        </Row>
        <Row className="m-t-30">
          <Col md={3} lg={3}>
            <Link to = '/responden/profile' style={{textDecoration:"none"}}>
            <div className="part-one">
              <center>
              <img src="images/profil.svg" style={{height:'160px', width:'160px'}}/>
              <h4 className="title-two m-t-15"><strong>Profil</strong></h4>
              </center>
            </div>
            </Link>
          </Col>

          <Col md={3} lg={3}>
            <Link to = '/responden/aboutus' style={{textDecoration:"none"}}>
            <div className="part-one">
              <center>
              <img src="images/ketertarikan.svg" style={{height:'160px', width:'160px'}}/>
              <h4 className="title-two m-t-15"><strong>Ketertarikan</strong></h4>
              </center>
            </div>
            </Link>
          </Col>

          <Col md={3} lg={3}>
            <Link to = '/responden/submission' style={{textDecoration:"none"}}>
            <div className="part-one">
              <center>
              <img src="images/studi.svg" style={{height:'160px', width:'160px'}}/>
              <h4 className="title-two m-t-15"><strong>Studi</strong></h4>
              </center>
            </div>
            </Link>
          </Col>

          <Col md={3} lg={3}>
            <Link to = '/responden/tariksaldo' style={{textDecoration:"none"}}>
            <div className="part-one">
              <center>
              <img src="images/saldo.svg" style={{height:'160px', width:'160px'}}/>
              <h4 className="title-two m-t-15"><strong>Tarik Saldo</strong></h4>
              </center>
            </div>
            </Link>
          </Col>
        </Row>


        {/* <Row className="m-t-30">
          <Col md={3} lg={3}>
          <Link to = '/responden/ticket' style={{textDecoration:"none"}}>
            <div className="part-one">
              <center>
              <img src="images/help.png"/>
              <h4 className="title-two m-t-15"><strong>Bantuan</strong></h4>
              </center>
            </div>
            </Link>
          </Col>
        </Row> */}
      </Container>
      </div>

      <Footer/>
    </>
  )
}

export default withRouter(RespondenDashboard)