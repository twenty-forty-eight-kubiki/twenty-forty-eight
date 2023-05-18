import { BASE_URL } from '../constants';
import { API } from './api';
import {
  ProfileRequestData,
  PasswordRequestData,
  FileRequestData
} from '../types/api/profile';
import { UserInfoResponse } from '../types/api/auth';

export const profileAPI = {
  async profile(userData: ProfileRequestData): Promise<UserInfoResponse> {
    return API.put<ProfileRequestData, UserInfoResponse>(
      `${BASE_URL}/user/profile`,
      userData
    );
  },

  async password(passwordData: PasswordRequestData) {
    return API.put<PasswordRequestData, void>(
      `${BASE_URL}/user/password`,
      passwordData
    );
  },

  async avatar(data: FileRequestData) {
    return API.putFile<void>(`${BASE_URL}/user/profile/avatar`, data);
  }
};
