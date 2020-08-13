import { instance } from '../../../config/axios'
import Cookies from 'js-cookie'


export const TOPUP_PAYMENT_SURVEYOR = (amount, history) => async dispatch => {
  try{
    const { data } = await instance({
      method: 'POST',
      url:'/payment',
      data:{
        amount
      },
      headers:{
        "accesstoken": `${Cookies.get('test')}`
      }
    })
    console.log(data)
    window.location.href = `https://payment.survplus.id/checkout/${data._id}`
    // history.push(`https://google.com/${data._id}`)

  }
  catch(err){
    console.log(err)
  }
}

export const LIST_PAYMENT_USER = () => async dispatch => {
  try{
    const { data } = await instance({
      method: 'GET',
      url:'/payment',
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