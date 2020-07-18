import Cookies from 'js-cookie'
import {v4} from 'uuid';
import { instance } from '../../../config/axios'

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
        reward: 0,
        tanggalMulai: '',
        tanggalAkhir: '',
        questions: []
      }
    })
    
  }
}

export const SAVE_STUDY = (_id, judul, jumlahSoal, waktuJawab, jumlahResponden, rewardResponden, tanggalMulai, tanggalAkhir, questions) => async dispatch => {
  // let survey = {
  //   _id, judul, jumlahSoal, waktuJawab, jumlahResponden, rewardResponden, tanggalMulai, tanggalAkhir, questions
  // }
  // console.log(survey)
  try{
    const { data } = instance({
      method: 'POST',
      url:'/project',
      headers:{
        "accesstoken": `${Cookies.get('test')}`
      },
      data:{
        _id, judul, jumlahSoal, waktuJawab, jumlahResponden, rewardResponden, tanggalMulai, tanggalAkhir, questions
      }
    })
    alert(data)
  } catch(err){
    console.log(err)
  }
}