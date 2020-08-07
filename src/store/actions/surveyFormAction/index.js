import Cookies from 'js-cookie'
import {v4} from 'uuid';
import { normalize } from 'normalizr';
import { instance } from '../../../config/axios'
import axios from 'axios'
import {getDenormalizedSurvey} from '../../selectors/denormalizesurvey'
import { verifyToken } from '../../../config/jwt'
import survey from '../../models/schema';

export const loadSurvey = (idStudy) => (dispatch) => {
  return INIT_QUESTION(dispatch, `/project/responden/${idStudy}`);
};

export const INIT_QUESTION = async (dispatch, urlPath) => {
  const isLogin = Cookies.get('test')
  const role = Cookies.get('role')
  const username = Cookies.get('username')
  const dataUser = {
    isLogin, role, username
  }

  const {data} = await instance({
    method: 'GET',
    url: urlPath,
    headers:{
      "accesstoken": `${Cookies.get('test')}`
    }
  })

  console.log(data)


  if(data  && role === 'surveyor'){
    // console.log(normalize(data, survey))
    dispatch({
      type: 'SURVEY_LOAD_SUCCESS',
      payload: normalize(data, survey)
    });
   
  } else if(dataUser.isLogin && role === 'surveyor'){
    dispatch({ 
      type: 'INIT_QUESTIONS' , 
      payload: { 
        _id: v4(),
        judul: '',
        // jumlahSoal: '',
        waktuJawab: 0,
        jumlahResponden: 0,
        rewardResponden: 0,
        tanggalMulai: new Date(),
        tanggalAkhir: new Date(),
        questions: [],
        inputed: false,
        kriteria:[]
      }
    })
    
  }
}

export const SAVE_STUDY = (surveyFormData, answerKriteria, jenisKelamin, umurMin, umurMax, provinsi,kriteria, kota, history) => async (dispatch, getState) => {
  try{

    await dispatch({
      type: 'SURVEY_BIND_FORM_DATA',
      payload: surveyFormData
    });

    const state = getState()
    const survey = getDenormalizedSurvey(state)

    survey.answerKriteria = answerKriteria
    survey.jenisKelamin = jenisKelamin
    survey.umurMin = umurMin
    survey.umurMax = umurMax
    survey.provinsi = provinsi
    survey.kota = kota
    survey.kriteria = kriteria
    
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
    const { id } = await verifyToken(Cookies.get('test'))
    const { data } = await axios({
      method: 'GET',
      url:`https://backoffice.survplus.id/manajemen_responden/getProject/${id}`,
      // headers:{
      //   "accesstoken": `${Cookies.get('test')}`
      // }
    })
    return data
  }
  catch(err){
    console.log(err)
  }
}

export const FIND_STUDY_WITH_RESPONDEN_BY_ID = (idStudy) => async dispatch => {
  try{
    const { id } = await verifyToken(Cookies.get('test'))
    const { data } = await instance({
      method: 'GET',
      url:`/project/responden/${idStudy}`,
      headers:{
        "accesstoken": `${Cookies.get('test')}`
      }
    })
    let userCompleted = data.completedUser.find(el => el.userId._id === id)

    let dataDetail = {
      data,
      userCompleted
    }
    return dataDetail
  }
  catch(err){
    console.log(err)
  }
}

export const FIND_STUDY_RESPONDEN_BY_SURVEYOR = (idStudy, idResponden) => async dispatch => {
  try{
    const { data } = await instance({
      method: 'GET',
      url:`/answer_form/${idStudy}/${idResponden}`,
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

export const PUSH_USER_COMPLETED_TO_STUDY = (projectId, history) => async dispatch => {
  try{
    const { data } = await instance({
      method: 'PUT',
      url: `/project/pushuser/${projectId}`,
      headers:{
        "accesstoken": `${Cookies.get('test')}`
      }
    })
    history.push('/responden/submission')
  }
  catch(err){
    console.log(err)
  }
}

export const COMPLETED_USER = () => async dispatch => {
  try{
    const { data } = await instance({
      method: 'GET',
      url: `/project/completed`,
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

export const COUNTER_RESPONDEN = ( answerKriteria,jenisKelamin, umurMin, umurMax, provinsi, kota, kriteria ) => async dispatch => {
  try{
    const { data } = await axios({
      method: 'POST',
      url: `https://backoffice.survplus.id/manajemen_responden/counter/`,
      data: {
        jenisKelamin, umurMin, umurMax, provinsi, kota, answerKriteria, kriteria
      }
    })
    return data
  }
  catch(err){
    console.log(err)
  }
}

export const UPDATE_DATA_APPROVAL_RESPONDEN = (idStudy, idResponden) => async dispatch => {
  try{
    const { data } = await instance({
      method: 'PUT',
      url: `/project/approval/${idStudy}/${idResponden}`,
      headers:{
        "accesstoken": `${Cookies.get('test')}`
      }
    })
    // history.push('/surveyor/')
  }
  catch(err){
    console.log(err)
  }
}

export const UPDATE_DATA_APPROVAL_RESPONDEN_PAGE = (idStudy, idResponden, history) => async dispatch => {
  try{
    const { data } = await instance({
      method: 'PUT',
      url: `/project/approval/${idStudy}/${idResponden}`,
      headers:{
        "accesstoken": `${Cookies.get('test')}`
      }
    })
    history.push(`/surveyor/detailstudy/${idStudy}`)
  }
  catch(err){
    console.log(err)
  }
}

export const GET_DATA_ONGOING_RESPONDEN = () => async dispatch => {
  try{
    const { id } = await verifyToken(Cookies.get('test'))
    const { data } = await axios({
      method: 'GET',
      url:`https://backoffice.survplus.id/manajemen_responden/getOnGoingProject/${id}`,
      // headers:{
      //   "accesstoken": `${Cookies.get('test')}`
      // }
    })
    return data
  }
  catch(err){
    console.log(err)
  }
}
