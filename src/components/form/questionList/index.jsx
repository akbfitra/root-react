import React from 'react'
import { Button,  Row, Col, Form } from 'react-bootstrap'
import { AnswerOptions } from '../answerOption'
import { useDispatch } from 'react-redux';

import { changeQuestionType } from '../../../store/actions/questionsAction'
import { deleteQuestion } from '../../../store/actions/questionsAction'

export const QuestionList = (props) => {
  const dispatch = useDispatch()
  let type = props.question.type
  
  const handleChangeQUestions = (typeQuestion) => {
    if(typeQuestion === 'Text'){
      dispatch(changeQuestionType({
        questionId: props.question._id,
        type: 'TEXT'
      }))
    } else if(typeQuestion === 'Pilihan Ganda'){
      dispatch(changeQuestionType({
        questionId: props.question._id,
        type: 'PILIHAN GANDA'
      }))
    } else if(typeQuestion === 'Kotak Centang'){
      dispatch(changeQuestionType({
        questionId: props.question._id,
        type: 'KOTAK CENTANG'
      }))
    }
  }
  
  const handleDeleteQuestion = () => {
    console.log(props.question._id)
    dispatch(
      deleteQuestion({
        questionId: props.question._id, 
        surveyId: props.surveyId })
    )
  }

  return(
    <>
      <Row>
        <Col md={12} lg={12}>
        <div className="part-two">
          <Row className="question">
            <Col md={8} lg={8}>
              <div className="table-100">
                <div className="table-row">
                  <div className="table-cell-one">
                    <Form.Group>
                      <Form.Label>Soal</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>
                  </div>
                </div>
              </div>
            </Col>
            <Button variant="danger" size="sm" onClick={ handleDeleteQuestion }>
                          delete {props.question._id}
              </Button>
            <Col md={4} lg={4}>
              <div className="table-100">
                <div className="table-row">
                  <div className="table-cell-one">
                      <Form.Group>
                      <Form.Label>Jawaban</Form.Label>
                      <Form.Control as="select" onChange = { (e) => { handleChangeQUestions( e.target.value )} }>
                        <option>-- Pilih --</option>
                        <option>Pilihan Ganda</option>
                        <option>Text</option>
                        <option>Kotak Centang</option>
                      </Form.Control>
                    </Form.Group>
                  </div>
                </div>
              </div>
            </Col>
          </Row>


          <Row className="answer">
            <Col>
            {/* pilihan ganda */}
              {
                type === 'PILIHAN GANDA' &&
                <AnswerOptions
                  answerOptions = {props.question.answerOptions}
                  questionId={props.question._id}
                />
              }
            {/* end pilihan ganda */}
            {/* text */}
              {
                type === 'TEXT' &&
                <Row className="m-t-15">
                  <Col md={8} lg={8}>
                  <Form.Control as="textarea" rows="3" />
                  </Col>
                </Row>
              }
            {/* end text */}
            </Col>
            
          </Row>
        </div>
        </Col>
      </Row>
    </>
  )
}