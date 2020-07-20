import axios from 'axios'

export const dataProvinsi = () => async dispatch => {
  try{
    const { data } = await axios({
      method: 'GET',
      url: 'https://api.rajaongkir.com/starter/province',
      headers:{key: '52142a0b9fca3488f5b0a3ee23851eb7'}
    })
    console.log(data)
    dispatch({type: 'DATA_PROVINSI', payload: data.rajaongkir.results})
    return data.rajaongkir.results
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
    dispatch({type: 'DATA_KOTA', payload: data.kota_kabupaten})
  }
  catch(err){
    console.log(err.response)
  }
}