import React from 'react'
import { Button,  Row, Col, Form } from 'react-bootstrap'
import { AnswerOptions } from '../answerOption'
import { useDispatch } from 'react-redux';
import { Field } from 'redux-form';
import { required } from 'redux-form-validators'

import { changeQuestionType } from '../../../store/actions/questionsAction'
import { deleteQuestion } from '../../../store/actions/questionsAction'
import { FormInput } from '../../../components/inputForm'

export const QuestionList = (props) => {
  const dispatch = useDispatch()
  let type = props.question.type
  
  const handleChangeQUestions = (typeQuestion) => {
    if(typeQuestion === 'TEXT'){
      dispatch(changeQuestionType({
        questionId: props.question._id,
        type: 'TEXT'
      }))
    } else if(typeQuestion === 'PILIHAN GANDA'){
      dispatch(changeQuestionType({
        questionId: props.question._id,
        type: 'PILIHAN GANDA'
      }))
    } else if(typeQuestion === 'KOTAK CENTANG'){
      dispatch(changeQuestionType({
        questionId: props.question._id,
        type: 'KOTAK CENTANG'
      }))
    }
  }
  
  const handleDeleteQuestion = () => {
    dispatch(
      deleteQuestion({
        questionId: props.question._id, 
        surveyId: props.surveyId })
    )
  }

  return(
    <>
      <Row className="m-t-15">
        <Col md={12} lg={12}>
        <Button variant="danger" onClick={handleDeleteQuestion} className="float-right">Hapus Pertanyaan</Button>
        </Col>
        <Col md={12} lg={12}>
        <div className="part-two">
          <Row className="question">
            <Col md={8} lg={8}>
              <div className="table-100">
                <div className="table-row">
                  <div className="table-cell-one">
                    <Form.Group>
                      <Form.Label>Soal</Form.Label>
                        <Field
                          className="input survey-builder__title"
                          type="text"
                          component={FormInput}
                          name={`questions.${props.question._id}`} 
                          placeholder="soal"
                          validate={[required()]}
                        />
                    </Form.Group>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col md={4} lg={4}>
              <div className="table-100">
                <div className="table-row">
                  <div className="table-cell-one">
                      <Form.Group>
                      <Form.Label>Jawaban</Form.Label>
                      <Form.Control as="select" onChange = { (e) => { handleChangeQUestions( e.target.value )} }>
                        <option value= {`${props.question.type}`}> {props.question.type === "KOTAK CENTANG" ? "MULTI SELECT" : props.question.type} </option>
                        <option value="TEXT">TEXT</option>
                        <option value="PILIHAN GANDA">PILIHAN GANDA</option>
                        {/* <option value="Text">Teks</option> */}
                        <option value="KOTAK CENTANG">MULTI SELECT</option>
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
                  {/* <Col md={8} lg={8}>
                  <Form.Control as="textarea" rows="3" />
                  </Col> */}
                </Row>
              }
            {/* end text */}
             {/* pilihan ganda */}
             {
                type === 'KOTAK CENTANG' &&
                <AnswerOptions
                  answerOptions = {props.question.answerOptions}
                  questionId={props.question._id}
                />
              }
            {/* end pilihan ganda */}
            </Col>
            
          </Row>
        </div>
        </Col>
      </Row>
    </>
  )
}