import { instance } from '../../../config/axios'
import axios from 'axios'

export const dataProvinsi = () => async dispatch => {
  try{
    const { data } = await axios({
      method: 'GET',
      url: 'http://backoffice.survplus.id/get_prov'
    })
    dispatch({type: 'DATA_PROVINSI', payload: data})
    return data
  }
  catch(err){
    console.log(err.response)
  }
}

export const dataKota = (idProvinsi) => async dispatch => {
  try{
    console.log(idProvinsi)
    const { data } = await axios({
      method: 'GET',
      url: `http://backoffice.survplus.id/get_kab/${idProvinsi}`
    })
    console.log(data)
    dispatch({type: 'DATA_KOTA', payload: data})
  }
  catch(err){
    console.log(err.response)
  }
}