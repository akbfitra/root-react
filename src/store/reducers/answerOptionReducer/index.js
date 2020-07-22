import update from 'immutability-helper';
import { bindFormDataToState } from '../../utils/formUtils'

const answerOptionsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ANSWER_OPTION_ADD_NEW':
    case 'ANSWER_OPTION_CHANGE_TITLE': {
      const {answerOptionId, title} = action.payload;
      return update(state, {
        $merge: {
          [answerOptionId]: {
            _id: answerOptionId,
            title
          }
        }
      })
    }

    case 'SURVEY_BIND_FORM_DATA': {
      const {answerOptions} = action.payload;

      return bindFormDataToState({
        formFields: answerOptions,
        state
      });
    }


    default:
      return state;
  }
};

export default answerOptionsReducer;