import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, Link, useParams, useHistory } from 'react-router-dom'

import './css/style.css';
import { Container, Row, Col, Button, Form, Modal} from 'react-bootstrap'

import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'

import { FIND_ANSWER_QUESTIONS_WITH_RESPONDEN_BY_ID, POST_INPUT_ANSWER_TO_FORM_BY_RESPONDEN, PUSH_USER_COMPLETED_TO_STUDY } from '../../../store/actions/surveyFormAction'

const StudyResponden = (props) => {
  const dispatch = useDispatch()
  const params = useParams()
  const history = useHistory()
  

  let { studyId } = params
  const [ listOfQuestions, setListofQuestions ] = useState([])
  const [dataText, setDataText ] = useState( [{answer: ' test'}] )
  const [getChangeData, setGetChangeData ] = useState(false)

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getListQuestions = () => {
    dispatch(FIND_ANSWER_QUESTIONS_WITH_RESPONDEN_BY_ID(studyId))
      .then( data => {
        setListofQuestions(data)
        setDataText(data)
        setGetChangeData(false)
      })
      .catch(err => console.log(err))
  }

  useEffect( () => {
    if(!listOfQuestions.length || getChangeData){
      getListQuestions()
    }
  })

  console.log(listOfQuestions)


  const chooseAnswer = (answer, questionId) => {
    setGetChangeData(true)
    console.log(answer)
    dispatch(POST_INPUT_ANSWER_TO_FORM_BY_RESPONDEN(answer, questionId, studyId))
  }

  const cekTextArea = (jawaban, pertanyaanId) => {
    setGetChangeData(true)
    dispatch(POST_INPUT_ANSWER_TO_FORM_BY_RESPONDEN(jawaban, pertanyaanId, studyId))
  }

  const chooseAnswerMulti = (answer, questionId) => {
    console.log(answer, questionId, 'ssssss')
    setGetChangeData(true)
    dispatch(POST_INPUT_ANSWER_TO_FORM_BY_RESPONDEN(answer, questionId, studyId))
  }

  const handleTextChange = (e) => {
    
    const updatedText = [...dataText];
    updatedText[e.target.dataset.i][e.target.className.split(' ')[0]] = e.target.value;
    console.log(updatedText)
    setDataText(updatedText);
  };

  const userCompleted = () => {
    dispatch(PUSH_USER_COMPLETED_TO_STUDY(studyId, history))
  }



  console.log(listOfQuestions)

  return(
    <>
    <Navbar/>

      <div id="study">
        <Container>
          <Row>
            <Col md={12} lg={12}>
              <h3 className="title-one text-center color-blue"><strong>Studi</strong></h3>
                <ul className="list-inline text-center">
                  <li className="list-inline-item">
                    <Link to='/responden' style={{textDecoration:"none"}}>
                    <h4 className="title-three color-blue">Beranda Responden</h4>
                    </Link>
                  </li>

                  <li className="list-inline-item">|</li>

                  <li className="list-inline-item">
                    <Link to='/responden/submission' style={{textDecoration:"none"}}>
                    <h4 className="title-three color-blue">Studi Responden</h4>
                    </Link>
                  </li>

                  <li className="list-inline-item">|</li>
                  <li className="list-inline-item">
                    <h4 className="title-three">Studi</h4>
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
                                style={{marginBottom:'0px'}}
                                data-i={i}
                                className="answer"
                                value={listOfQuestions[i].answer} 
                                rows="3" 
                                onChange={handleTextChange}
                                onBlur={ (e) => cekTextArea(e.target.value,data._id)} />
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
                                    <Button variant={data.answer === dataAnswer.title ? "primary" : "outline-dark"} onClick={() => chooseAnswer(dataAnswer.title, data._id)}>&nbsp;{dataAnswer.title}</Button>
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
                                    <Button variant={
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
                                          chooseAnswerMulti(dataAnswerUser, data._id)
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

                  <Col md={12} lg={12}>
                    {/* <Button variant="primary" onClick ={ () => { userCompleted() }} >Simpan</Button>{' '} */}
                    <Button variant="primary" onClick={handleShow}>Kirim Jawaban Anda Ke Surveyor</Button>
                  </Col>
                </Row>
              </div>
            </Col>

            
          </Row>
        </Container>
      </div>
      <Footer/>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>Apakah anda sudah yakin dengan jawaban anda ?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary"  onClick ={ () => { userCompleted() }}>
            Ya
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Tidak
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default withRouter(StudyResponden)