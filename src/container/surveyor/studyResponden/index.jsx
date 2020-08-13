import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, Link, useParams, useHistory } from 'react-router-dom'

import './css/style.css';
import { Container, Row, Col, Button, Form, Modal} from 'react-bootstrap'

import { Navbar } from '../../../components/navbar/index'
import { Footer } from '../../../components/footer/index'

import { FIND_STUDY_RESPONDEN_BY_SURVEYOR, UPDATE_DATA_APPROVAL_RESPONDEN_PAGE , UPDATE_DATA_REJECT_RESPONDEN_PAGE  } from '../../../store/actions/surveyFormAction'

const StudyResponden = (props) => {
  const dispatch = useDispatch()
  const params = useParams()
  const history = useHistory()

  let { studyId, respondenId } = params
  const [ listOfQuestions, setListofQuestions ] = useState([])
  const [dataText, setDataText ] = useState( [{answer: ' test'}] )
  const [getChangeData, setGetChangeData ] = useState(false)

  const [ alasanApproval, setAlasanApproval ] = useState('')
  const [ alasanReject, setAlasanReject ] = useState('')

  const [showApproved, setShowApproved] = useState(false);
  const [showReject, setShowReject] = useState(false);

  const handleCloseApproved = () => setShowApproved(false);
  const handleCloseReject = () => setShowReject(false);
  const handleShowApproved = () => setShowApproved(true);
  const handleShowReject = () => setShowReject(true);

  console.log(respondenId)
  const getListQuestions = () => {
    dispatch(FIND_STUDY_RESPONDEN_BY_SURVEYOR(studyId, respondenId, alasanApproval))
      .then( data => {
        setListofQuestions(data)
        setDataText(data)
        // setGetChangeData(false)
      })
      .catch(err => console.log(err))
  }

  useEffect( () => {
    // if(!listOfQuestions.length || getChangeData){
      getListQuestions()
    // }
  }, [])

  console.log(alasanApproval)

  const updatedDataApproval = (idUser) => {
    // setGetChangeData(true)
    dispatch(UPDATE_DATA_APPROVAL_RESPONDEN_PAGE(studyId, idUser, alasanApproval, history))
  }

  const updatedDataReject = (idUser) => {
    // setGetChangeData(true)
    dispatch(UPDATE_DATA_REJECT_RESPONDEN_PAGE(studyId, idUser, alasanReject, history))
  }
  // const chooseAnswer = (answer, questionId) => {
  //   setGetChangeData(true)
  //   dispatch(POST_INPUT_ANSWER_TO_FORM_BY_RESPONDEN(answer, questionId, studyId))
  // }

  // const cekTextArea = (jawaban, pertanyaanId) => {
  //   setGetChangeData(true)
  //   dispatch(POST_INPUT_ANSWER_TO_FORM_BY_RESPONDEN(jawaban, pertanyaanId, studyId))
  // }

  // const handleTextChange = (e) => {
    
  //   const updatedText = [...dataText];
  //   updatedText[e.target.dataset.i][e.target.className.split(' ')[0]] = e.target.value;
  //   setDataText(updatedText);
  // };

  // const userCompleted = () => {
  //   dispatch(PUSH_USER_COMPLETED_TO_STUDY(studyId, history))
  // }

  return(
    <>
    <Navbar/>

      <div id="study">
        <Container>
          <Row>
            <Col md={12} lg={12}>
              <h3 className="title-one text-center"><strong>Detail Jawaban Responden</strong></h3>
                <ul className="list-inline text-center">
                  <li className="list-inline-item">
                    <Link to='/surveyor' style={{textDecoration:"none"}}>
                    <h4 className="title-three">Beranda Surveyor</h4>
                    </Link>
                  </li>

                  <li className="list-inline-item">|</li>

                  <li className="list-inline-item">
                    <Link to='/surveyor/liststudy' style={{textDecoration:"none"}}>
                    <h4 className="title-three">Data Studi</h4>
                    </Link>
                  </li>
                  
                  <li className="list-inline-item">|</li>

                  <li className="list-inline-item">
                    <Link to={`/surveyor/detailstudy/${studyId}`} style={{textDecoration:"none"}}>
                    <h4 className="title-three">Detail Studi</h4>
                    </Link>
                  </li>

                  <li className="list-inline-item">|</li>

                  <li className="list-inline-item">
                    <h4 className="title-three">Detail Jawaban Responden</h4>
                  </li>
                </ul>
            </Col>
          </Row>
          <Row className="m-t-30">
            <Col md={12} lg={12}>
              <div className="part-one">
              {
                !listOfQuestions.length ? 
                  <p>loading</p>
                :
                listOfQuestions.map((data, i) => {
                  return(
                    <Row key={i}>
                      <Col md={12} lg={12}>
                        <div className="box-pertanyaan m-b-10">
                        <div className="left"><h5> { i+1 }. </h5></div>
                          <div className="right"><h5> { data.name } </h5></div>
                        </div>
                      </Col>
                      {
                        data.type === "TEXT" 
                        ?
                          <Col md={12} lg={12}>
                            <div className="box-answer">
                              <div className="left"></div>
                              <div className="right">
                              <Form.Group controlId="exampleForm.ControlTextarea1">
                              <Form.Control 
                              as="textarea"
                              disabled
                              style={{marginBottom:'0px'}}
                              data-i={i}
                              className="answer"
                              value={listOfQuestions[i].answer} 
                              rows="3" 
                              // onChange={handleTextChange}
                              // onBlur={ (e) => cekTextArea(e.target.value,data._id)} 
                              />
                              </Form.Group>
                              </div>
                            </div>
                            
                          </Col>
                        : data.type === "PILIHAN GANDA" ? 
                          data.listAnswer.map((dataAnswer, i) => {
                            return(
                              <Col md={12} lg={12} key={i}>
                                <div className="box-answer">
                                  <div className="left"></div>
                                  <div className="right">
                                  <Button disabled variant={data.answer === dataAnswer.title ? "primary" : "outline-dark"} >&nbsp;{dataAnswer.title}</Button>
                                  </div>
                                </div>
                              </Col>
                            )
                          })
                        : data.type === "KOTAK CENTANG" ? 
                        data.listAnswer.map((dataAnswer, i) => {
                          let dataAnswerUser = data.answer
                          let indexData = dataAnswerUser.indexOf(dataAnswer.title)

                          console.log(dataAnswerUser, indexData, 'dalam map')
                          return(
                            <Col md={12} lg={12} key={i} >
                              <div className="box-answer m-b-10" >
                                <div className="left"></div>
                                <div className="right">
                                  <Button disabled variant={
                                    // console.log(dataAnswerUser)
                                    dataAnswerUser[indexData] === dataAnswer.title 
                                    ?
                                      "primary" 
                                    : 
                                      "outline-dark"
                                    } 
                                      onClick={() => {
                                        let index = dataAnswerUser.indexOf(dataAnswer.title);
                                        if (index > -1) {
                                          dataAnswerUser.splice(index, 1);
                                        }else {
                                          dataAnswerUser.push(dataAnswer.title)
                                        }
                                        // chooseAnswerMulti(dataAnswerUser, data._id)
                                      }}
                                  >
                                    {dataAnswer.title}
                                  </Button>
                                </div>
                              </div>
                            </Col>
                          )
                        })
                        :
                        <>
                        </>
                          
                      }
                      </Row>
                    )
                  })
                }

                {/* <Row className="m-t-30">
                  <Col md={12} lg={12}>
                    <div className="box-pertanyaan">
                      <div className="left"><h5>1.</h5></div>
                      <div className="right"><h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, necessitatibus asperiores omnis laudantium voluptas doloribus eius alias modi ex maiores quis mollitia, tempora commodi officiis voluptatibus esse repellendus dignissimos optio?</h5></div>
                    </div>
                  </Col>
                  <Col md={12} lg={12}>
                    <div className="box-answer">
                      <Button variant="outline-dark">A.&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit</Button>
                    </div>
                    <div className="box-answer">
                      <Button variant="outline-dark">A.&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit</Button>
                    </div>
                    <div className="box-answer">
                      <Button variant="outline-dark">A.&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit</Button>
                    </div>
                    <div className="box-answer">
                      <Button variant="outline-dark">A.&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit</Button>
                    </div>
                  </Col>
                </Row> */}


                <Row>
                  <Col md={12} lg={12}>
                    <hr/>
                  </Col>
                
                  {/* <Col md={12} lg={12}>

                    <Button variant="outline-success" onClick = { () => updatedDataApproval(respondenId)} >Approved</Button>{' '}
                  </Col>
                  <Col md={12} lg={12}>
                    <Button variant="outline-danger" onClick = { () => updatedDataApproval(respondenId)} >Reject</Button>{' '}
                  </Col> */}
                  
                  <Col md={12} lg={12}>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                    <Button variant="success" onClick={handleShowApproved}>Approved</Button>
                    </li>

                    <li className="list-inline-item">|</li>

                    <li className="list-inline-item">
                    <Button variant="danger"onClick={handleShowReject}>Reject</Button>
                    </li>
                  </ul>
                  </Col>
                  

                </Row>
              </div>
            </Col>

            
          </Row>
        </Container>
      </div>
      <Footer/>

      <Modal show={showApproved} onHide={handleCloseApproved}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>Apakah anda sudah yakin dengan jawaban responden?</Modal.Body>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Berikan Alasan Anda</Form.Label>
              <Form.Control as="textarea" rows="3" onChange={ (e) => setAlasanApproval(e.target.value)}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick ={ () => { updatedDataApproval(respondenId) }} >
            Approved
          </Button>
          <Button variant="secondary" onClick={handleCloseApproved}>
            Tidak
          </Button>
        </Modal.Footer>
      </Modal>

      {/* onClick ={ () => { updatedDataApproval(respondenId) }} */}
      <Modal show={showReject} onHide={handleCloseReject}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Apakah anda sudah yakin menolak jawaban responden ?
        </Modal.Body>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Berikan Alasan Anda</Form.Label>
              <Form.Control as="textarea" rows="3" onChange={ (e) => setAlasanReject(e.target.value)}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick ={ () => { updatedDataReject(respondenId) }}  >
            Reject
          </Button>
          <Button variant="secondary" onClick={handleCloseReject}>
            Tidak
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default withRouter(StudyResponden)