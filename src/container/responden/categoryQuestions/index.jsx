import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, Link, useParams } from 'react-router-dom'

import './css/style.css';
import {Container, Row, Col, Button } from 'react-bootstrap'

import { Navbar } from '../../../components/navbar'
import { Footer } from '../../../components/footer'

import { dataQuestionByCategory, createAnswer } from '../../../store/actions/aboutUsAction'

const CategoryQuestions = (props) => {
  const dispatch = useDispatch()

  const params = useParams()

  const [questions, setQuestions ] = useState([])
  const [getChangeData, setGetChangeData ] = useState(false)
  const [ answerUser, setAnswerUser ] = useState([])

  let { categoryId } = params

  const getQuestions = () => {
    dispatch(dataQuestionByCategory(categoryId))
      .then( data => {
        setQuestions(data)
        // setAnswerUser(data.answer)
        setGetChangeData(false)
      })
      .catch(err => console.log(err))
  }
  
  console.log(questions)
  // console.log(answerUser)
  useEffect(() => {
    if(!questions.length || getChangeData ){
      getQuestions()
    }
  })

  const chooseAnswer = (answer, questionId) => {
    dispatch(createAnswer(answer, questionId, categoryId))
    setGetChangeData(true)
  }

  return(
    <>
      <Navbar/>
      <div id="pertanyaan-responden">
      <Container>
      <Row>
          <Col md={{ span: 8, offset:2}} lg={{ span: 8, offset:2}}>
            <h3 className="title-one text-center"><strong>Edit Biodata Responden</strong></h3>
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <Link to='/responden' style={{textDecoration:"none"}}>
                  <h4 className="title-three">Beranda Responden</h4>
                  </Link>
                </li>

                <li className="list-inline-item">|</li>

                <li className="list-inline-item">
                  <Link to='/responden/aboutus' style={{textDecoration:"none"}}>
                  <h4 className="title-three">Biodata Responden</h4>
                  </Link>
                </li>

                <li className="list-inline-item">|</li>

                <li className="list-inline-item">
                  <h4 className="title-three">Edit Biodata Responden</h4>
                </li>
              </ul>
          </Col>
        </Row>

        <Row className="m-t-30">
          <Col md={12} lg={12}>
            <div className="part-one">
                <Row>
                  <Col md={12} lg={12}>
                    <div className="container-pertanyaan">
                      {
                        questions.map((data, i) =>{
                          let dataAnswerUser = data.answer
                          console.log(dataAnswerUser)
                          return(

                            <Row key={i}>

                              <Col md={12} lg={12} >
                                <div className="box-pertanyaan m-b-10" >
                                  <div className="left" ><h5>{i + 1}.</h5></div>
                                  <div className="right"><h5>{data.name}</h5></div>
                                </div>
                              </Col>

                              {
                                data.listAnswers.map((answers, index) => {
                                  let indexData = dataAnswerUser.indexOf(answers)
                                  return(
                                    <Col md={12} lg={12} key={index} >
                                      <div className="box-answer m-b-10" >
                                        <div className="left"></div>
                                        <div className="right">
                                          <Button variant={
                                            // console.log(dataAnswerUser)
                                            dataAnswerUser[indexData] === answers 
                                            ?
                                            "primary" 
                                            : "outline-dark"
                                            } 
                                            onClick={() => {
                                              let index = dataAnswerUser.indexOf(answers);
                                              if (index > -1) {
                                                dataAnswerUser.splice(index, 1);
                                              }else {
                                                dataAnswerUser.push(answers)
                                              }
                                              chooseAnswer(dataAnswerUser, data._id)
                                            }}
                                          >
                                            {answers}
                                          </Button>
                                        </div>
                                      </div>
                                    </Col>
                                  )
                                }

                                )
                              }
                            </Row>
                          )
                        }

                        )
                      }
                    </div>
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

export default withRouter(CategoryQuestions)