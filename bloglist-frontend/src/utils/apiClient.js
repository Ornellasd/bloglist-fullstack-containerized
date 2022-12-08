import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
})

console.log(process.REACT_APP_BACKEND_URL, 'what what in the butt')

export default apiClient
