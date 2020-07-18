import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form'

import tempatReducer from './kotaReducer'
import userReducer from './userReducer'
import surveyFormReducer from './surveyFormReducer'
import questionFormReducer from './questionFormReducer'
import answerOptionReducer from './answerOptionReducer'

export default combineReducers({ 
  user: userReducer,
  tempat: tempatReducer, 
  surveys: surveyFormReducer,
  form: formReducer,
  questions: questionFormReducer,
  answerOptions: answerOptionReducer
})