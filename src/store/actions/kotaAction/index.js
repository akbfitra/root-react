import axios from 'axios'

export const dataProvinsi = () => async dispatch => {
  try{
    const { data } = await axios({
      method: 'GET',
      url: 'http://dev.farizdotid.com/api/daerahindonesia/provinsi'
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
    const { data } = await axios({
      method: 'GET',
      url: `https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${idProvinsi}`
    })
    console.log(data)
    dispatch({type: 'DATA_KOTA', payload: data.kota_kabupaten})
  }
  catch(err){
    console.log(err.response)
  }
}