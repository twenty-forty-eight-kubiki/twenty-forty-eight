import { createAsyncThunk } from '@reduxjs/toolkit'
import { UserInfoResponse } from '../types/api/authApi'
import { authAPI } from '../api/authApi'
import { isAPIError } from '../utils/isAPIError'

export const fetchUser = createAsyncThunk<UserInfoResponse, undefined>(
  'auth/fetchUser',
  async (_, thunkApi) => {
    try {
      return await authAPI.getUser()
    } catch (error: unknown) {
      const reason = isAPIError(error)
        ? error.reason
        : 'Неизвестная ошибка авторизации'
      return thunkApi.rejectWithValue(reason)
    }
  }
)

export const logoutUser = createAsyncThunk<void, undefined>(
  'auth/logoutUser',
  async (_, thunkApi) => {
    try {
      return await authAPI.logout()
    } catch (error: unknown) {
      const reason = isAPIError(error)
        ? error.reason
        : 'Ошибка завершения сессии.'
      return thunkApi.rejectWithValue(reason)
    }
  }
)
