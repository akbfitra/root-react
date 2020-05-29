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

