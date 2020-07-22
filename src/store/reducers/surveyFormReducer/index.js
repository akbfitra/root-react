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
    case 'SURVEY_BIND_FORM_DATA': {
      const {
        judul,
        jumlahResponden,
        jumlahSoal,
        rewardResponden,
        tanggalAkhir,
        tanggalMulai,
        waktuJawab
      } = action.payload;

      const surveyId = Object.keys(state)[0];

      return update(state, {
        [surveyId]: {
          $merge: {
            judul: judul,
            jumlahResponden: jumlahResponden,
            jumlahSoal: jumlahSoal,
            rewardResponden: rewardResponden,
            tanggalAkhir: tanggalAkhir,
            tanggalMulai: tanggalMulai,
            waktuJawab: waktuJawab
          }
        }
      });
    }

    default:
      return state
  }
}

export default surveyForm