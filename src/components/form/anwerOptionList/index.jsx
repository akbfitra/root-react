import React from 'react'
import { Button, Col, Form } from 'react-bootstrap'
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
    <div>

    </div>
      <Col md={8} lg={8} key={index}>
        <div className="table-100">
          <div className="table-row">
            <div className="table-cell-one">
              <h4 className="title-three">Opsi {index +1}</h4>
            </div>

            <div className="table-cell-two">
              <Field
                className="input survey-builder__answer"
                type="text"
                component={FormInput}
                name={`${answerOptionId}`} 
                placeholder="jawaban"
                validate={[required()]}
              />
              {/* <Form.Control type="text" placeholder="Opsi"/> */}
            </div>
            <div className="table-cell-three">
              <center>
                <Button variant="danger" size="sm" onClick = {deleteAnswer}>
                  delete
                </Button>
              </center>
            </div>
          </div>
        </div>
      </Col>
    </>
  )
} 