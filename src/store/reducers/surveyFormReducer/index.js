import update from 'immutability-helper'

const surveyForm = (state = {}, action) => {
  switch( action.type ){
    case 'INIT_QUESTIONS':{
      const {_id} = action.payload;
      return {
        [_id]: action.payload
      };
    }

    case 'ADD_NEW_QUESTION': {
      const {
        question,
        surveyId
      } = action.payload;
      return update(state, {
        [surveyId]: {
          questions: {
            $push: [question._id]
          }
        }
      });
    }
    case 'QUESTION_DELETE': {
      const {
        questionId,
        surveyId
      } = action.payload;
      const questionIndex = state[surveyId].questions.indexOf(questionId);

      return update(state, {
        [surveyId]: {
          questions: {
            $splice: [[questionIndex, 1]]
          }
        }
      });
    }

    default:
      return state
  }
}

export default surveyForm