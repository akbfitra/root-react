import React, { useEffect, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { withRouter, Link, useHistory } from 'react-router-dom'
import { dataCategoryUser, getDataAnswerUser } from '../../../store/actions/aboutUsAction'
import { getKetertarikan, dataProfileUser, EDIT_KRITERIA_RESPONDEN } from '../../../store/actions/userAction'
import './css/style.css';
import { Container, Row, Col, Button, Modal, Form, Alert} from 'react-bootstrap'
import { CardCategory } from '../../../components/aboutUs/cardCategory/index'
import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'

const AboutUsResponden = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [category, setCategory ] = useState([])
  const [dataAnswerUser, setDataAnswerUser ] = useState([])
  const [ ketertarikan, setKetertarikan ] = useState([])
  const [ kriteria, setKriteria ] = useState([])
  const [changeData, setChangeData ] = useState(false)

  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getCategory = () =>{
    dispatch(dataCategoryUser())
      .then( data => {
        setCategory(data)
        setChangeData(false)
      })
  }

  const handleProcessUpdate = () => {
    console.log(kriteria)
    if(kriteria.length < 4){
      setShowAlert(true)
    } else {
      dispatch(EDIT_KRITERIA_RESPONDEN( kriteria, history))
      setChangeData(true)
      setShow(false)
      setShowAlert(false)
    }
  }


  const handlePilihKriteria = (data) => {
    let cek = kriteria.includes(data)
    if(!cek){
      setKriteria(arr => [...kriteria, data])
    }else if(kriteria.indexOf(data > -1)){
      setKriteria(kriteria.filter(item => item !== data))
    }
  }

  
  const getDataProfile = () => {
      dispatch(dataProfileUser())
        .then(data => {
          setKriteria(data.categories)
          setChangeData(false)
        })
  }

  const getAnswerUser = () => {
    dispatch(getDataAnswerUser())
      .then( data => {
        setDataAnswerUser(data)
        setChangeData(false)
        // break;
      })
  }

  const getDataKetertarikan = () => {
    dispatch(getKetertarikan())
      .then( data => {
        setKetertarikan(data)
        setChangeData(false)
      })
  }

  useEffect(() => {
    if(!kriteria.length || changeData){
      getDataProfile()
    }
  }, [])

  useEffect(() => {
    if(!ketertarikan.length || changeData){
      getDataKetertarikan()
    }
  },[])

  useEffect(() => {
    if(!category.length || changeData){
      getCategory()
    }
  })

  useEffect(() => {
    if(!dataAnswerUser.length || changeData){
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
            <h3 className="title-one text-center color-blue"><strong>Ketertarikan Responden</strong></h3>
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <Link to='/responden' style={{textDecoration:"none"}}>
                  <h4 className="title-three color-blue">Beranda Responden</h4>
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
          <Alert variant="primary">
            <Alert.Heading className="text-center m-b-0">Semakin lengkap mengisi maka semakin besar peluang anda menerima tawaran studi</Alert.Heading>
          </Alert>
          </Col>
        </Row>

        <Row>
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

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Ketertarikan</Modal.Title>
        </Modal.Header>
          <Alert show={showAlert} variant="danger">
            Kriteria Minimal 4
          </Alert>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Row>
                {
                  ketertarikan
                    .map((data, i) => {
                    return(
                      <Col md={4} lg={4} key={i}>
                        <Form.Check
                          type="checkbox"
                          checked={kriteria.some((nama) => nama === data.name)}
                          label={`${data.name}`}
                          value={`${data.name}`}
                          onChange={ (e) => {handlePilihKriteria(e.target.value)}}
                        />
                      </Col>
                    )
                  })
                }
              </Row>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Tutup
          </Button>
          <Button variant="primary" onClick={handleProcessUpdate}>
            Simpan
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