import { BACKEND_URL } from '@/config/env'
import { getAccessToken } from '@/utils/localstorage'
import axios from 'axios'

const addHeadersRequestConfig = (config) => {
  const token = getAccessToken()
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
}

const axiosInstance = axios.create()

axiosInstance.defaults.baseURL = BACKEND_URL
axiosInstance.interceptors.request.use(addHeadersRequestConfig)

export default axiosInstance
