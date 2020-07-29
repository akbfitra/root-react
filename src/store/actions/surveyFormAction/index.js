import Cookies from 'js-cookie'
import {v4} from 'uuid';
import { instance } from '../../../config/axios'
import {getDenormalizedSurvey} from '../../selectors/denormalizesurvey'

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
        judul: '',
        jumlahSoal: '',
        waktuJawab: 0,
        jumlahResponden: 0,
        rewardResponden: 0,
        tanggalMulai: '',
        tanggalAkhir: '',
        questions: [],
        inputed: false,
        kriteria:[]
      }
    })
    
  }
}

export const SAVE_STUDY = (surveyFormData, history) => async (dispatch, getState) => {
  try{

    await dispatch({
      type: 'SURVEY_BIND_FORM_DATA',
      payload: surveyFormData
    });

    const state = getState()
    const survey = getDenormalizedSurvey(state)
  
    const { data } = await instance({
      method: 'POST',
      url:'/project',
      headers:{
        "accesstoken": `${Cookies.get('test')}`
      },
      data:{
        survey
      }
    })
    
    history.push('/surveyor/liststudy')

  } catch(err){
    console.log(err)
  }
}

export const FIND_STUDY_USER = () => async dispatch  => {
  try{
    const { data }  = await instance({
      method: 'GET',
      url: '/project',
      headers:{
        "accesstoken": `${Cookies.get('test')}`
      }
    })
    
    return data
  }
  catch(err){
    console.log(err)
  }
}

export const FIND_STUDY_WITH_RESPONDEN = () => async dispatch => {
  try{
    const { data } = await instance({
      method: 'GET',
      url:'/project/responden',
      headers:{
        "accesstoken": `${Cookies.get('test')}`
      }
    })
    return data
  }
  catch(err){
    console.log(err)
  }
}

export const FIND_STUDY_WITH_RESPONDEN_BY_ID = (idStudy) => async dispatch => {
  try{
    const { data } = await instance({
      method: 'GET',
      url:`/project/responden/${idStudy}`,
      headers:{
        "accesstoken": `${Cookies.get('test')}`
      }
    })
    return data
  }
  catch(err){
    console.log(err)
  }
}



export const FIND_ANSWER_QUESTIONS_WITH_RESPONDEN_BY_ID = (idStudy) => async dispatch => {
  try{
    const { data } = await instance({
      method: 'GET',
      url:`/answer_form/${idStudy}`,
      headers:{
        "accesstoken": `${Cookies.get('test')}`
      }
    })
    return data
  }
  catch(err){
    console.log(err)
  }
}

export const POST_INPUT_ANSWER_TO_FORM_BY_RESPONDEN = (answer, questionId, projectId) => async dispatch => {
  try{
    const { data } = await instance({
      method: 'POST',
      url: `/answer_form/${projectId}/${questionId}`,
      headers:{
        "accesstoken": `${Cookies.get('test')}`
      },
      data:{ answer }
    })
    
  }
  catch(err){
    console.log(err.response)
  }
}

