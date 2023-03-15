import { API } from './api'
import {
  LoginRequestData,
  SignupRequestData,
  SignupResponse,
  UserInfoResponse,
} from '../types/api/authApi'

export const authAPI = {
  async login(userData: LoginRequestData) {
    return API.post<LoginRequestData, void>('auth/signin', userData)
  },

  async logout() {
    return API.post<never, void>('auth/logout')
  },

  async getUser() {
    return API.get<UserInfoResponse>('auth/user')
  },

  async signup(userData: SignupRequestData) {
    return API.post<SignupRequestData, SignupResponse>('auth/signup', userData)
  },
}
