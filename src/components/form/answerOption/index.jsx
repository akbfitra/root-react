import React from 'react'
import { Button,  Col, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

import { addNewAnswerOption } from '../../../store/actions/answerOptionAction'
import { AnswerOptionList} from '../anwerOptionList/index'

export const AnswerOptions = ({ answerOptions, questionId }) =>{
  const dispatch = useDispatch()
  const addNewAnswer = () => {
    dispatch(addNewAnswerOption({questionId}))
  }

  return(
    <>
      <div>

        <Row className="m-t-15">
          {
            answerOptions.map((answerOption,index) => (
                <AnswerOptionList
                  key= { index }
                  index= { index }
                  answerOptionId = {answerOption._id}
                  questionId = {questionId}
                />
            ))
          }
          
          <Col md={12} lg={12}>
            <Button variant="warning" size="sm" onClick = {addNewAnswer}>
                Tambah Opsi
            </Button>
          </Col>
        </Row>
      </div>
      
    </>
  )
} 