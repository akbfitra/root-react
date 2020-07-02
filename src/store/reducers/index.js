import { combineReducers } from 'redux'

import tempatReducer from './kotaReducer'
import userReducer from './userReducer'
import surveyFormReducer from './surveyFormReducer'
import questionFormReducer from './questionFormReducer'
import answerOptionReducer from './answerOptionReducer'

export default combineReducers({ 
  user: userReducer,
  tempat: tempatReducer, 
  form: surveyFormReducer,
  questions: questionFormReducer,
  answerOptions: answerOptionReducer
})