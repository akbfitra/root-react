import { instance } from '../../../config/axios'

export const dataProvinsi = () => async dispatch => {
  try{
    const { data } = await instance({
      method: 'GET',
      url: '/user/provinsi'
    })
    dispatch({type: 'DATA_PROVINSI', payload: data.provinsi})
    return data.provinsi
  }
  catch(err){
    console.log(err.response)
  }
}

export const dataKota = (idProvinsi) => async dispatch => {
  try{
    const { data } = await instance({
      method: 'GET',
      url: `/user/kota/${idProvinsi}`
    })
    dispatch({type: 'DATA_KOTA', payload: data.kota_kabupaten})
  }
  catch(err){
    console.log(err.response)
  }
}