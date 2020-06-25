import update from 'immutability-helper'

const questionForm = (state = {} , action) => {
  switch( action.type ){
    
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
      console.log(state, 'aaaaaaaaa')
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


    default:
      return state
  }
}

export default questionForm