import axios from 'axios'
import qs from 'qs'
const service = axios.create({
  baseURL: process.env.BASE_API,
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
  headers: { 'content-type': 'application/json' }
})
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    if (!response.data) {
      return Promise.reject(new Error('Error'))
    }
    return response.data
  },
  error => {
    console.log(error.response.status) //404之类的处理
    return Promise.reject(error)
  }
)

export default service
