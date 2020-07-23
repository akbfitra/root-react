
import {v4} from 'uuid';
import Cookies from 'js-cookie'
import { addNewAnswerOption } from '../answerOptionAction'
import { instance } from '../../../config/axios'

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

export const getDataQuestions = (categoryId) => async dispatch => {
  try{
    const { data } = await instance({
      method: 'GET',
      url: `/question/${categoryId}`,
      headers:{
        "accesstoken": `${Cookies.get('test')}`
      }
    })
    
    return data
  }
  catch(err){
    console.log(err.response)
  }
}