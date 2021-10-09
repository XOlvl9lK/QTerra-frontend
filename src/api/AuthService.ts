import { apiClient } from '../apiClient/apiClient'
import { AxiosResponse } from 'axios'
import { User } from '../features/authPage/store/types'

class AuthService {

  async login(email: string, password: string): Promise<AxiosResponse<User>> {
    return await apiClient.post('/auth/login', {
      email,
      password
    })
  }

  async register(email: string, password: string, userName: string): Promise<AxiosResponse<User>> {
    return await apiClient.post('/auth/register', {
      email,
      password,
      userName
    })
  }
}

export default new AuthService()