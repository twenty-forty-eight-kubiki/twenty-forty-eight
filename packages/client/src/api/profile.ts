import { API } from './api';
import {
  ProfileRequestData,
  PasswordRequestData,
  FileRequestData
} from '../types/api/profie';
import { UserInfoResponse } from '../types/api/auth';

export const profileAPI = {
  async profile(userData: ProfileRequestData): Promise<UserInfoResponse> {
    return API.put<ProfileRequestData, UserInfoResponse>(
      'user/profile',
      userData
    );
  },

  async password(passwordData: PasswordRequestData) {
    return API.put<PasswordRequestData, void>('user/password', passwordData);
  },

  async avatar(data: FileRequestData) {
    return API.putFile<void>('user/profile/avatar', data);
  }
};
