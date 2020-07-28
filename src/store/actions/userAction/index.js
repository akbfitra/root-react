
import { instance } from '../../../config/axios'
import { verifyToken } from '../../../config/jwt'

import Cookies from 'js-cookie'

export const loginProcess = (email, password, history, location)  => async dispatch => {
  try{
    const { data } = await instance({
      method: 'POST',
      url: '/user/login',
      data: {
        email,
        password
      }
    })
    Cookies.set('test', data.token, { expires: 1 })
    Cookies.set('role', data.role, { expires: 1 })
    Cookies.set('username', data.username, { expires: 1 })

    await dispatch({ type: 'LOGIN_USER', payload: data})
    if(data.role === 'surveyor'){
      history.replace(location.state ? location.state.from : '/surveyor')
    } else {
      history.replace(location.state ? location.state.from : '/responden')
    }
  }
  catch(err){
    console.log(err.response)
  }
}

export const CekLogin = () => {
    const isLogin = Cookies.get('test')
    const role = Cookies.get('role')
    const username = Cookies.get('username')
    
    const data = {
      isLogin, role, username
    }

    return(
      { type: 'CEK_LOGIN', payload: data}
    )
}

export const registerProcess = (email, password, name, phone, birth, provinsi, kota, pekerjaan, sumber, history, location, ktp ) => async dispatch => {
  try{
    // console.log(email, password, name, phone, birth, provinsi, kota, pekerjaan, sumber,ktp, history, location)
    const { data } = await instance({
      method: 'POST',
      url: '/user/register/',
      data: {
        email, password, name, phone, birth, provinsi: 'jateng', kota: 'semarang', pekerjaan, sumber, ktp
      }
    })
    if(data){
      history.replace(location.state ? location.state.from : '/login')
    }

  }
  catch(err){
    console.log(err.response)
  }
}

export const registerSurveyorProcess = (email, password, name, phone, birth, provinsi, kota, pekerjaan, sumber, tujuan, ktp, history, location) => async dispatch => {
  try{
    const { data } = await instance({
      method: 'POST',
      url: '/user/register/surveyor',
      data: {
        email, password, name, phone, birth, provinsi: 'jateng', kota: 'semarang', pekerjaan, sumber, tujuan, ktp
      }
    })
    history.replace(location.state ? location.state.from : '/login')
  }
  catch(err){
    console.log(err.response)
  }
}

export const logoutProcess = (history, location) => async dispatch => {
  Cookies.remove('test')
  Cookies.remove('role')
  Cookies.remove('username')
  await dispatch({ type: 'LOGOUT_USER'})
  history.push('/')
}

export const dataProfileUser = () => async dispatch => {
  try{
    const { id } = verifyToken(Cookies.get('test'))
  
    const { data } = await instance ({
      method: 'GET',
      url: `user/profile/${id}`
    })
    console.log(data)
    return data
  }
  catch(err){
    console.log(err.response)
  }
}

export const editProfileResponden = (username, phone, birth, provinsi, kota, pekerjaan, sumber, ktp, history) => async dispatch => {
  try{
    const { data } = await instance({
      method: 'PUT',
      url: `user/updateprofileresponden`,
      data: {
        username, phone, birth, provinsi, kota, pekerjaan, sumber, ktp
      },
      headers:{
        "accesstoken": `${Cookies.get('test')}`
      }
    })
    history.push('/responden/profile')
  }
  catch(err){
    console.log(err.response)
  }
}

export const editProfileSurveyor = (username, phone, birth, provinsi, kota, pekerjaan, sumber, ktp, tujuan, history) => async dispatch => {
  try{
      const { data } = await instance({
      method: 'PUT',
      url: `user/updateprofilesurveyor`,
      data: {
        username, phone, birth, provinsi, kota, pekerjaan, sumber, ktp, tujuan
      },
      headers:{
        "accesstoken": `${Cookies.get('test')}`
      }
    })
    history.push('/surveyor/profile')
  }
  catch(err){
    console.log(err.response)
  }
}
