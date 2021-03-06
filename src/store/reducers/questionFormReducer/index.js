import update from 'immutability-helper'
import { bindFormDataToState } from '../../utils/formUtils'

const questionForm = (state = {} , action) => {
  switch( action.type ){
    case 'SURVEY_LOAD_SUCCESS': {
      const {questions} = action.payload.entities;

      return {
        ...questions
      }
    }
    
    case 'ADD_NEW_QUESTION': {
      const {question} = action.payload;
      return update(state, {
        $merge: {
          [question._id]: question
        }
      });
    }
    
    case 'QUESTION_CHANGE_TYPE':{
      const {
        questionId,
        type
      } = action.payload;
      return update(state, {
        [questionId]: {
          $merge: {
            answerOptions: [],
            type
          }
        }
      });
    } 

    case 'ANSWER_OPTION_ADD_NEW': {
      const {
        answerOptionId,
        questionId
      } = action.payload;
      return update(state, {
        [questionId]: {
          answerOptions: {
            $push: [answerOptionId]
          }
        }
      });
    }
    case 'ANSWER_OPTION_DELETE': {
      const {
        questionId,
        answerOptionId
      } = action.payload;
      const answerOptionIndex = state[questionId].answerOptions.indexOf(answerOptionId);
      
      return update(state, {
        [questionId]: {
          answerOptions: {
            $splice: [[answerOptionIndex, 1]]
          }
        }
      });
    }
    case 'SURVEY_BIND_FORM_DATA': {
      const {questions} = action.payload;
      return bindFormDataToState({
        formFields: questions,
        state
      });
    }


    default:
      return state
  }
}

export default questionForm