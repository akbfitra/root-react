export const getInitialFormBuilderValues = (state) => {
  const surveyId = Object.keys(state.surveys)[0]; // Current implementation allows only one survey

  if (!surveyId) {
    return undefined;
  }

  
  const survey = state.surveys[surveyId];
  console.log(survey, 'inital from A')

  return{
    judul: survey.judul,
    jumlahSoal: survey.jumlahSoal,
    waktuJawab: survey.waktuJawab,
    jumlahResponden: survey.jumlahResponden,
    rewardResponden: survey.rewardResponden,
    tanggalMulai: new Date(survey.tanggalMulai),
    tanggalAkhir: new Date(survey.tanggalAkhir),
    questions: Object.keys(state.questions).reduce((result, nextKey) => {
        result[nextKey] = state.questions[nextKey].title;
        return result;
      }, {}),
    answerOptions: Object.keys(state.answerOptions).reduce((result, nextKey) => {
        result[nextKey] = state.answerOptions[nextKey].title;
        return result;
      }, {})
  }
  // return {
  //   surveyName: survey.name,
  //   surveyDescription: survey.description,
  //   questions: Object.keys(state.questions).reduce((result, nextKey) => {
  //     result[nextKey] = state.questions[nextKey].title;
  //     return result;
  //   }, {}),
  //   answerOptions: Object.keys(state.answerOptions).reduce((result, nextKey) => {
  //     result[nextKey] = state.answerOptions[nextKey].title;
  //     return result;
  //   }, {})
  // };


};
