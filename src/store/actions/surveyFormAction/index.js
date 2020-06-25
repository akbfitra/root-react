import Cookies from 'js-cookie'
import {v4} from 'uuid';

export const INIT_QUESTION = (dispatch) => {
  const isLogin = Cookies.get('test')
  const role = Cookies.get('role')
  const username = Cookies.get('username')
  const data = {
    isLogin, role, username
  }

  if(data.isLogin){
    dispatch({ 
      type: 'INIT_QUESTIONS' , 
      payload: { 
        _id: v4(),
        name: '',
        description: '',
        questions: [] }
    })
    
  }
}

// export const addNewQuestion = (surveyId) => {
//   return {
//     type: 'ADD_NEW_QUESTION',
//     payload: {
//       surveyId,
//       question: {
//         _id: v4(),
//         title: '',
//         type: 'TEXT',
//         answerOptions: []
//       }
//     }
//   };
// };

// export const changeQuestionType = ({type, questionId}) => async dispatch => {
  
//   dispatch({
//     type: 'QUESTION_CHANGE_TYPE',
//     payload: {type, questionId}
//   });
      
//   // if (type === questionTypes.MULTIPLE_ANSWER) {
//   //   dispatch(addNewAnswerOption({questionId}));
//   // }
// };
