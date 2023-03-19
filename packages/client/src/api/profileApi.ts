import { API } from './api'
import {
  ProfileRequestData,
  PasswordRequestData,
  AvatarRequestData,
} from '../types/api/profieApi'
import { UserInfoResponse } from '../types/api/authApi'

export const profileAPI = {
  async profile(userData: ProfileRequestData): Promise<UserInfoResponse> {
    return API.put<ProfileRequestData, UserInfoResponse>(
      'user/profile',
      userData
    )
  },

  async password(passwordData: PasswordRequestData) {
    return API.put<PasswordRequestData, void>('user/password', passwordData)
  },

  async avatar(avatarData: AvatarRequestData) {
    return API.putFile<AvatarRequestData, void>(
      'user/profile/avatar',
      avatarData
    )
  },
}
