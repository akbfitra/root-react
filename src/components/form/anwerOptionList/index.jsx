import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Field } from 'redux-form';
import { required } from 'redux-form-validators'

import { deleteAnswerOption } from '../../../store/actions/answerOptionAction'

import { FormInput } from '../../../components/inputForm'

export const AnswerOptionList = ({ questionId, answerOptionId, index}) =>{
  const dispatch = useDispatch()

  const deleteAnswer = () => {
    dispatch(deleteAnswerOption({questionId, answerOptionId}))
  }
  return(
    <>
      <Col md={8} lg={8} key={index}>
        <Row>
          <Col md={2} lg={2}>
            <div style={{width:'100%', display:'flex', alignItems:'center', height:'38px', backgroundColor:''}}>
              <h4 className="title-three">Opsi {index +1}</h4>
            </div>
          </Col>
          <Col md={8} lg={8}>
              <Field
                className="input survey-builder__answer"
                type="text"
                component={FormInput}
                name={`answerOptions.${answerOptionId}`} 
                placeholder="jawaban"
                validate={[required()]}
              />
          </Col>
          <Col md={2} lg={2}>
            <div style={{width:'100%', display:'flex', alignItems:'center', height:'38px', backgroundColor:''}}>
                <Button variant="danger" size="sm" onClick = {deleteAnswer}>
                  Hapus Opsi
                </Button>
            </div>
          </Col>
        </Row>
      </Col>
    </>
  )
} 