
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
    throw err.response.data.message
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

export const registerProcess = (email, password, name, phone, history, location ) => async dispatch => {
  try{
    // console.log(email, password, name, phone, birth, provinsi, kota, pekerjaan, sumber,ktp, history, location)
    const { data } = await instance({
      method: 'POST',
      url: '/user/register',
      data: {
        email, password, name, phone
      }
    })
    if(data){
      history.push(location.state ? location.state.from : '/success')
    }

  }
  catch(err){
    throw err.response.data.message
  }
}

export const registerSurveyorProcess = (email, password, name, phone, history, location) => async dispatch => {
  try{
    const { data } = await instance({
      method: 'POST',
      url: '/user/register/surveyor',
      data: {
        email, password, name, phone
      }
    })
    history.replace(location.state ? location.state.from : '/success')
  }
  catch(err){
    throw err.response.data.message
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
    return data
  }
  catch(err){
    console.log(err.response)
  }
}

export const editProfileResponden = (username, phone, birth, provinsi, kota, pekerjaan, sumber, ktp, jenisKelamin,categories, history) => async dispatch => {
  try{
    const { data } = await instance({
      method: 'PUT',
      url: `user/updateprofileresponden`,
      data: {
        name:username, phone, birth, provinsi, kota, pekerjaan, sumber, ktp, jenisKelamin, categories
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

export const EDIT_KRITERIA_RESPONDEN = (categories, history) => async dispatch => {
  try{

    // console.log(kriteria, 'edddiit actiioonn')
    const { data } = await instance({
      method: 'PUT',
      url: `user/updateprofileresponden`,
      data: {
        categories
      },
      headers:{
        "accesstoken": `${Cookies.get('test')}`
      }
    })
    history.push('/responden/aboutus')
  }
  catch(err){
    console.log(err)
  }
}

export const editProfileSurveyor = (username, phone, birth, provinsi, kota, pekerjaan, sumber, ktp, tujuan, history) => async dispatch => {
  try{
      const { data } = await instance({
      method: 'PUT',
      url: `user/updateprofilesurveyor`,
      data: {
        name:username, phone, birth, provinsi, kota, pekerjaan, sumber, ktp, tujuan
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

export const getDataAllUser = () => async dispatch => {
  try{
    const { data } = await instance({
      method: 'GET',
      url:'user/alluser'
    })
    return data
  }
  catch(err){
    console.log(err.response)
  }
}

export const getFaqHome = () => async dispatch => {
  try{
    const { data } = await instance({
      method: 'GET',
      url: '/faq'
    })
    return data
  }
  catch(err){
    console.log(err.response)
  }
}

export const getPerusahaanHome = () => async dispatch => {
  try{
    const { data } = await instance({
      method: 'GET',
      url: '/perusahaan'
    })
    return data
  }
  catch(err){
    console.log(err.response)
  }
}

export const getKetertarikan = () => async dispatch => {
  try{
    const { data } = await instance({
      method: 'GET',
      url:'/category'
    })
    return data
  }
  catch(err){
    console.log(err.response)
  }
}

export const GET_SALDO = () => async dispatch => {
  try{
    const { data } = await instance({
      method: 'GET',
      url: `/saldo`,
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

export const FORGOT_PASSWORD = (email, history) =>async dispatch => {
  try{
    const { data } = await instance({
      method: 'POST',
      url:'/user/forgotpassword',
      data:{
        email
      }
    })
    history.push('/successforgotpassword')
  }
  catch(err){
    console.log(err)
  }
}

export const EDIT_PASSWORD_RESPONDEN = (password, passwordLama, history) =>async dispatch => {
  try{
    const { data } = await instance({
      method: 'PUT',
      url:'/user/updatepasswordresponden',
      headers:{
        "accesstoken": `${Cookies.get('test')}`
      },
      data:{
        password,
        passwordLama
      }
    })
    history.push('/responden/profile')
  }
  catch(err){
    throw err.response.data.message
  }
}

export const EDIT_PASSWORD_SURVEYOR = (password, passwordLama, history) =>async dispatch => {
  try{
    const { data } = await instance({
      method: 'PUT',
      url:'/user/updatepasswordsurveyor',
      headers:{
        "accesstoken": `${Cookies.get('test')}`
      },
      data:{
        password,
        passwordLama
      }
    })
    history.push('/surveyor/profile')
  }
  catch(err){
    throw err.response.data.message
  }
}

export const TARIK_SALDO_RESPONDEN = (norekening, bank, jumlah) => async dispatch => {
  try{
    const { data } = await instance({
      method: 'POST',
      url: '/tariksaldo',
      headers:{
        "accesstoken": `${Cookies.get('test')}`
      },
      data:{
        norekening,
        bank,
        jumlah
      }
    })
    console.log(data)
    return data
  }
  catch(err){
    throw err.response.data.message
  }
}

export const GET_DATA_TARIK_SALDO_RESPONDEN = (norekening, bank, jumlah) => async dispatch => {
  try{
    const { data } = await instance({
      method: 'GET',
      url: '/tariksaldo',
      headers:{
        "accesstoken": `${Cookies.get('test')}`
      }
    })
    return data
  }
  catch(err){
    throw err.response.data.message
  }
}

export const GET_DATA_NOTIFICATION = () => async dispatch => {
  try{
    const { data } = await instance({
      method: 'GET',
      url: '/notification',
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