
import {v4} from 'uuid';
import { addNewAnswerOption } from '../answerOptionAction'

export const addNewQuestion = (surveyId) => {
  return {
    type: 'ADD_NEW_QUESTION',
    payload: {
      surveyId,
      question: {
        _id: v4(),
        title: '',
        type: 'TEXT',
        answerOptions: []
      }
    }
  };
};

export const changeQuestionType = ({type, questionId}) => async dispatch => {
  dispatch({
    type: 'QUESTION_CHANGE_TYPE',
    payload: {type, questionId}
  });
      
  if (type === 'PILIHAN GANDA') {
    dispatch(addNewAnswerOption({questionId}));
  }
};

export const deleteQuestion = ({questionId, surveyId}) => ({
  type: 'QUESTION_DELETE',
  payload: {
    questionId,
    surveyId
  }
});