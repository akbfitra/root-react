import axios from 'axios'
import { instance, instanceTempat } from '../config/axios'
import { verifyToken } from '../config/jwt'

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

export const registerProcess = (email, password, name, phone, birth, provinsi, kota, pekerjaan, sumber, history, location) => async dispatch => {
  try{
    console.log(email, password, name, phone, birth, provinsi, kota, pekerjaan, sumber, history, location)
    const { data } = await instance({
      method: 'POST',
      url: '/user/register',
      data: {
        email, password, name, phone, birth, provinsi: 'jateng', kota: 'semarang', pekerjaan, sumber
      }
    })
    history.replace(location.state ? location.state.from : '/login')
  }
  catch(err){
    console.log(err.response)
  }
}

export const registerSurveyorProcess = (email, password, name, phone, birth, provinsi, kota, pekerjaan, sumber, history, location) => async dispatch => {
  try{
    const { data } = await instance({
      method: 'POST',
      url: '/user/register/surveyor',
      data: {
        email, password, name, phone, birth, provinsi: 'jateng', kota: 'semarang', pekerjaan, sumber
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

export const dataProvinsi = () => async dispatch => {
  try{
    const { data } = await axios({
      method: 'GET',
      url: 'http://dev.farizdotid.com/api/daerahindonesia/provinsi'
    })
    dispatch({type: 'DATA_PROVINSI', payload: data.semuaprovinsi})
    return data.semuaprovinsi
  }
  catch(err){
    console.log(err.response)
  }
}

export const dataKota = (idProvinsi) => async dispatch => {
  try{
    const { data } = await axios({
      method: 'GET',
      url: `http://dev.farizdotid.com/api/daerahindonesia/provinsi/${idProvinsi}/kabupaten`
    })
    dispatch({type: 'DATA_KOTA', payload: data.kabupatens})
  }
  catch(err){
    console.log(err.response)
  }
}

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

export const dataProfileUser = (id) => async dispatch => {
  try{
    const { id } = verifyToken(Cookies.get('test'))
    const { data } = await instance ({
      method: 'GET',
      url: `user/profile/${id}`
    })
    return data
  }
  catch(err){
    console.log(err.response)
  }
}


