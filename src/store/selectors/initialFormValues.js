// export const getInitialFormBuilderValues = (state) => {
//   const surveyId = Object.keys(state.form)[0]; // Current implementation allows only one survey

//   if (!surveyId) {
//     return undefined;
//   }

//   const survey = state.form[surveyId];
//   console.log(state)
//   console.log(state.question)
//   return {
//     surveyName: survey.name,
//     surveyDescription: survey.description,
//     questions: Object.keys(state.questions).reduce((result, nextKey) => {
//       result[nextKey] = state.questions[nextKey].title;
//       return result;
//     }, {}),
//     answerOptions: Object.keys(state.answerOptions).reduce((result, nextKey) => {
//       result[nextKey] = state.answerOptions[nextKey].title;
//       return result;
//     }, {})
//   };


// };
