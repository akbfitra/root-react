import React, { useEffect, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'
import { dataCategory, getDataAnswerUser } from '../../../store/actions/aboutUsAction'
import './css/style.css';
import { Container, Row, Col} from 'react-bootstrap'
import { CardCategory } from '../../../components/aboutUs/cardCategory/index'
import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'
import ConnectedFormSurveyor from '../../surveyor/form';

const AboutUsResponden = (props) => {
  const dispatch = useDispatch()
  const [category, setCategory ] = useState([])
  const [dataAnswerUser, setDataAnswerUser ] = useState([])

  const getCategory = () =>{
    dispatch(dataCategory())
      .then( data => {
        setCategory(data)
        // break;
      })
  }

  const getAnswerUser = () => {
    dispatch(getDataAnswerUser())
      .then( data => {
        setDataAnswerUser(data)
        // break;
      })
  }

  useEffect(() => {
    if(!category.length){
      getCategory()
    }
  })

  useEffect(() => {
    if(!dataAnswerUser.length){
      getAnswerUser()
    }
  })

  return(
    <>
      <Navbar/>

      <div id="about-responden">
      <Container>
        <Row>
          <Col md={{ span: 8, offset:2}} lg={{ span: 8, offset:2}}>
            <h3 className="title-one text-center"><strong>Biodata Responden</strong></h3>
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <Link to='/responden' style={{textDecoration:"none"}}>
                  <h4 className="title-three">Beranda Responden</h4>
                  </Link>
                </li>

                <li className="list-inline-item">|</li>

                <li className="list-inline-item">
                <h4 className="title-three">Biodata Responden</h4>
                </li>
              </ul>
          </Col>
        </Row>
        <Row>
          {
            category.map( (data, i) => {
              let dataAnswer
              
              dataAnswerUser ?
                dataAnswer = dataAnswerUser.flatMap(x => [x.categoryId === data._id ? x : null ])
              :
                dataAnswer = []
              
                return(
                  <CardCategory key={i} categories = {data} dataUser = {!dataAnswerUser.length ? []: dataAnswer}/>
                )
              }
            )
          }
        </Row>
      </Container>
      </div>

      <Footer/>
    </>
  )
}

// const mapStateToProps = state => ({
//   category: state.category.category,
//   listAnswers: state.category.listAnswers
// });

// const ConnectedAboutUsResponden = connect(
//   mapStateToProps,
// )(AboutUsResponden);

export default withRouter(AboutUsResponden)