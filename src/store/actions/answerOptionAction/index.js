import {v4} from 'uuid';

export const addNewAnswerOption = ({questionId}) => ({
  type: 'ANSWER_OPTION_ADD_NEW',
  payload: {
    answerOptionId: v4(),
    title: '',
    questionId
  }
});

export const deleteAnswerOption = ({questionId, answerOptionId}) => ({
  type: 'ANSWER_OPTION_DELETE',
  payload: {
    questionId,
    answerOptionId
  }
});