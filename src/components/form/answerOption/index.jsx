import React from 'react'
import { Button,  Row } from 'react-bootstrap'
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
            
          <div className="table-cell-three">
            <center>
              <Button variant="primary" size="sm" onClick = {addNewAnswer}>
                Tambah Opsi
              </Button>
            </center>
          </div>
        </Row>
      </div>
      
    </>
  )
} 