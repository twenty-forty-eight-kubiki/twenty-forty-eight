import { API } from './api'
import {
  SignupRequestData,
  LoginRequestData,
  signupResponse,
  APIError,
} from '../types/api/authApi'

export const authAPI = {
  async login(userData: LoginRequestData): Promise<APIError> {
    return API.post<LoginRequestData, APIError>('auth/signin', userData)
  },
  async logout(): Promise<any> {
    return API.post('auth/logout')
  },

  async me(): Promise<any> {
    return API.get('auth/logout')
  },

  async signup(userData: SignupRequestData): Promise<signupResponse> {
    return API.post<SignupRequestData, signupResponse>('auth/signup', userData)
  },
}
