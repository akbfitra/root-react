import { instanceBackOffice } from '../../../config/axios'
import axios from 'axios'

export const dataProvinsi = () => async dispatch => {
  try{
    const { data } = await instanceBackOffice({
      method: 'GET',
      url: '/get_prov'
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
    const { data } = await instanceBackOffice({
      method: 'GET',
      url: `/get_kab/${idProvinsi}`
    })
    dispatch({type: 'DATA_KOTA', payload: data})

    console.log(data)
    // const createOption = (label) => ({
    //   label,
    //   value: label.toLowerCase().replace(/\W/g, ''),
    // });

    // let dataKota = data.map((kota,i) => { return createOption(kota)})
    let dataKota = [];
    data.forEach(function(element) {
        dataKota.push({ label:element['Kabupaten/kota'], value: element['Kabupaten/kota'] })
    });
    
    return dataKota
  }
  catch(err){
    console.log(err.response)
  }
}