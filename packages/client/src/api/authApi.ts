import { API } from './api'
import {
  SignupRequestData,
  LoginRequestData,
  SignupResponse,
} from '../types/api/authApi'

export const authAPI = {
  async login(userData: LoginRequestData): Promise<string> {
    return API.post<LoginRequestData, string>('auth/signin', userData)
  },

  async logout(): Promise<void> {
    return API.post('auth/logout')
  },

  async getUser(): Promise<void> {
    return API.get('auth/user')
  },

  async signup(userData: SignupRequestData): Promise<SignupResponse> {
    return API.post<SignupRequestData, SignupResponse>('auth/signup', userData)
  },
}
