import update from 'immutability-helper';


const answerOptionsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ANSWER_OPTION_ADD_NEW':
    case 'ANSWER_OPTION_CHANGE_TITLE': {
      const {answerOptionId, title} = action.payload;
      console.log(state,'aaaaaaaaaaaaaaaaaaaa, masuk ga ya')
      return update(state, {
        $merge: {
          [answerOptionId]: {
            _id: answerOptionId,
            title
          }
        }
      })
    }

    default:
      return state;
  }
};

export default answerOptionsReducer;