import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'
import { dataCategory } from '../../../store/action'
import './css/style.css';
import { Container, Row, Col} from 'react-bootstrap'
import { CardCategory } from '../../../components/aboutUs/cardCategory/index'
import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'

const AboutUsResponden = (props) => {
  const dispatch = useDispatch()
  const [category, setCategory ] = useState([])

  const getCategory = () =>{
    dispatch(dataCategory())
      .then( data => {
        setCategory(data)
      })
  }

  useEffect(() => {
    getCategory()
  })

  return(
    <>
      <Navbar/>

      <div id="about-responden">
      <Container>
        <Row>
          <Col md={{ span: 8, offset:2}} lg={{ span: 8, offset:2}}>
            <h3 className="title-one text-center"><strong>About Responden</strong></h3>
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <Link to='/responden' style={{textDecoration:"none"}}>
                  <h4 className="title-three">Dashboard Responden</h4>
                  </Link>
                </li>

                <li className="list-inline-item">|</li>

                <li className="list-inline-item">
                <h4 className="title-three">About Responden</h4>
                </li>
              </ul>
          </Col>
        </Row>
        <Row>
          {
            category.map( (data, i) => 
              
                <CardCategory key={i} categories = {data} />
              
            )
          }
        </Row>
      </Container>
      </div>

      <Footer/>
    </>
  )
}

export default withRouter(AboutUsResponden)