import { BASE_URL } from '../constants';
import { API } from './api';
import {
  LoginRequestData,
  SignupRequestData,
  SignupResponse,
  UserInfoResponse
} from '../types/api/auth';

export const authAPI = {
  async login(userData: LoginRequestData) {
    return API.post<LoginRequestData, void>(
      `${BASE_URL}/auth/signin`,
      userData
    );
  },

  async logout() {
    return API.post<never, void>(`${BASE_URL}/auth/logout`);
  },

  async getUser() {
    return API.get<UserInfoResponse>(`${BASE_URL}/auth/user`);
  },

  async signup(userData: SignupRequestData) {
    return API.post<SignupRequestData, SignupResponse>(
      `${BASE_URL}/auth/signup`,
      userData
    );
  }
};
