import axios from 'axios'
// import { useHistory } from 'react-router-dom'
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 12000
})

const errorHandler = (error) => {
  if (error.response) {
    const data = error.response.data
    console.log(error.response)
    // const token = localStorage.getItem('token')
    if (error.response.status === 403) {
        console.log(data)
    }
  }
  return Promise.reject(error.response)
}

// request interceptor
request.interceptors.request.use(config => config, errorHandler)

// response interceptor
request.interceptors.response.use((response) => {
  console.log('------------------- BOOTCAMP -------------------')
  console.log(response)
  return response.data
}, errorHandler)


export default request

