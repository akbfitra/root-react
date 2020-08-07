import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, Link, useParams, useHistory } from 'react-router-dom'

import './css/style.css';
import { Container, Row, Col, Button, Form} from 'react-bootstrap'

import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'

import { FIND_STUDY_RESPONDEN_BY_SURVEYOR, UPDATE_DATA_APPROVAL_RESPONDEN_PAGE  } from '../../../store/actions/surveyFormAction'

const StudyResponden = (props) => {
  const dispatch = useDispatch()
  const params = useParams()
  const history = useHistory()

  let { studyId, respondenId } = params
  const [ listOfQuestions, setListofQuestions ] = useState([])
  const [dataText, setDataText ] = useState( [{answer: ' test'}] )
  const [getChangeData, setGetChangeData ] = useState(false)

  console.log(respondenId)
  const getListQuestions = () => {
    dispatch(FIND_STUDY_RESPONDEN_BY_SURVEYOR(studyId, respondenId))
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

  const updatedDataApproval = (idUser) => {
    // setGetChangeData(true)
    dispatch(UPDATE_DATA_APPROVAL_RESPONDEN_PAGE(studyId, idUser, history))
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
          {/* <Row>
            <Col md={12} lg={12}>
              <h3 className="title-one text-center"><strong>Studi</strong></h3>
                <ul className="list-inline text-center">
                  <li className="list-inline-item">
                    <Link to='/responden' style={{textDecoration:"none"}}>
                    <h4 className="title-three">Beranda Responden</h4>
                    </Link>
                  </li>

                  <li className="list-inline-item">|</li>

                  <li className="list-inline-item">
                    <Link to='/responden/submission' style={{textDecoration:"none"}}>
                    <h4 className="title-three">Studi Responden</h4>
                    </Link>
                  </li>

                  <li className="list-inline-item">|</li>
                  <li className="list-inline-item">
                    <h4 className="title-three">Studi</h4>
                  </li>
                </ul>
            </Col>
          </Row> */}
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
                                disabled
                                as="textarea"
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
                          :
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
                  {/* onClick ={ () => { userCompleted() }} */}
                  <Col md={12} lg={12}>
                    <Button variant="outline-danger" block onClick = { () => updatedDataApproval(respondenId)} >Approved</Button>{' '}
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

export default withRouter(StudyResponden)