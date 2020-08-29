import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://backend.survplus.id'
})

export const instanceTempat = axios.create({
  baseUrl: 'http://dev.farizdotid.com/api/daerahindonesia'
})

export const instanceBackOffice = axios.create({
  baseURL: 'https://backoffice.survplus.id'
})

// export const instancePayment = axios.create({
//   baseURL: 'http://149.129.240.254:8809'
// })

// export const instanceKerjaKeras = axios.create({
//   baseURL: 'http://149.129.240.254:8810'
// })
