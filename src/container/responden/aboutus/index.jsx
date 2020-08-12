import React, { useEffect, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'
import { dataCategoryUser, getDataAnswerUser } from '../../../store/actions/aboutUsAction'
import './css/style.css';
import { Container, Row, Col, Button, Modal} from 'react-bootstrap'
import { CardCategory } from '../../../components/aboutUs/cardCategory/index'
import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'

const AboutUsResponden = (props) => {
  const dispatch = useDispatch()
  const [category, setCategory ] = useState([])
  const [dataAnswerUser, setDataAnswerUser ] = useState([])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getCategory = () =>{
    dispatch(dataCategoryUser())
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
  },[])

  useEffect(() => {
    if(!dataAnswerUser.length){
      getAnswerUser()
    }
  },[])

  return(
    <>
      <Navbar/>

      <div id="about-responden">
      <Container>
        <Row>
          <Col md={{ span: 8, offset:2}} lg={{ span: 8, offset:2}}>
            <h3 className="title-one text-center"><strong>Ketertarikan Responden</strong></h3>
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <Link to='/responden' style={{textDecoration:"none"}}>
                  <h4 className="title-three">Beranda Responden</h4>
                  </Link>
                </li>

                <li className="list-inline-item">|</li>

                <li className="list-inline-item">
                <h4 className="title-three">Ketertarikan Responden</h4>
                </li>
              </ul>
          </Col>
        </Row>

        <Row className="m-t-30">
          <Col md={12} lg={12}>
          <Button variant="primary" onClick={handleShow}>
            Tambah Ketertarikan
          </Button>
          </Col>
        </Row>
        <Row>
          {
            category.map( (data, i) => {
              let dataAnswer
              // console.log(data)
              // console.log(dataAnswerUser)
              // console.log(dataAnswerUser.answer)
              dataAnswerUser ?
                dataAnswer = dataAnswerUser.flatMap(x => [(x.categoryId === data._id) && (x.answer.length ) ? x : null ])
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Ketertarikan</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
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