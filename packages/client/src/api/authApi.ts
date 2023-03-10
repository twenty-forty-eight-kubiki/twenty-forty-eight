import { BASE_URL } from '../constants'
import { API } from './api'

type SignupRequestData = {
  first_name: string,
  second_name: string,
  login: string,
  email: string,
  password: string,
  phone: string
};

export type LoginRequestData = {
  login: string;
  password: string;
};

export const authAPI = {
  async login(userData: BodyInit): Promise<LoginRequestData> {
    return API.post<BodyInit, LoginRequestData>(`${BASE_URL}/auth/signin`, userData)
  },
  async logout(): Promise<[]> {
    return API.post<BodyInit, []>(`${BASE_URL}/auth/logout`)
  },

  async me(): Promise<string> {
    return API.get<string>(`${BASE_URL}/auth/logout`)
  },

  async signup(userData: BodyInit): Promise<SignupRequestData> {
    return API.post<BodyInit, SignupRequestData>(`${BASE_URL}/auth/signup`, userData)
  }
}
