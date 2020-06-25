import React from 'react'
import { QuestionList} from '../questionList'

export const QuestionBuilder = (props) =>{
  return(
    <>
      <div>
      {props.questions.map((questions,i) => (
        <QuestionList
          key={i}
          question = {questions}
          surveyId = {props.surveyId}
        />
      ))}
    </div>
    </>
  )
} 