import Cookies from 'js-cookie'
import { instance } from '../../../config/axios'

export const dataCategory = () => async dispatch => {
  try{
    const { data } = await instance({
      method: 'GET',
      url: '/category',
      headers:{
        "accesstoken": `${Cookies.get('test')}`
      }
    })
    return data
  }
  catch(err){
    console.log(err.response)
  }
}

export const dataQuestionByCategory = (categoryId) => async dispatch => {
  try{
    const { data } = await instance({
      method: 'GET',
      url: `/answer/${categoryId}`,
      headers:{
        "accesstoken": `${Cookies.get('test')}`
      }
    })
    return data
  }
  catch(err){
    console.log(err.response)
  }
}

export const createAnswer = (answer, questionId, categoryId) => async dispatch => {
  try{
    const { data } = await instance({
      method: 'POST',
      url: `/answer/${categoryId}/${questionId}`,
      headers:{
        "accesstoken": `${Cookies.get('test')}`
      },
      data:{ answer }
    })
    console.log(data)
  }
  catch(err){
    console.log(err.response)
  }
}

