import { API } from './api'
import { SignupRequestData, LoginRequestData } from '../types/api'

export const authAPI = {
  async login(userData: LoginRequestData) {
    return API.post<LoginRequestData>(
      'auth/signin',
      userData
    )
  },
  async logout() {
    return API.post('auth/logout')
  },

  async me() {
    return API.get('auth/logout')
  },

  async signup(userData: SignupRequestData) {
    return API.post<SignupRequestData>(
      'auth/signup',
      userData
    )
  },
}
