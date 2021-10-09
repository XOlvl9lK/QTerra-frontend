import axios from 'axios'
import { apiUrl } from '../common/constants'


export const apiClient = axios.create({
  baseURL: apiUrl,
})