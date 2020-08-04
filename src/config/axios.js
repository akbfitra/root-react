import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://backend.survplus.id'
})

export const instanceTempat = axios.create({
  baseUrl: 'http://dev.farizdotid.com/api/daerahindonesia'
})
