import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { authAPI } from '../../api/authApi'
import { UserInfoResponse } from '../../types/api/authApi'
import { isAPIError } from '../../utils/isAPIError'
import { GenericState } from '../store.types'
import { AuthorizationStatus } from '../../constants'

const initialState: GenericState<UserInfoResponse> = {
  error: null,
  data: null,
  authorizationStatus: AuthorizationStatus.Unknown,
}

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

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clear: () => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUser.pending, state => {
        state.error = null
        state.authorizationStatus = AuthorizationStatus.Unknown
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.data = action.payload
        state.authorizationStatus = AuthorizationStatus.Auth
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.error = action.payload as string
        state.data = null
        state.authorizationStatus = AuthorizationStatus.NoAuth
      })
      .addCase(logoutUser.pending, state => {
        state.authorizationStatus = AuthorizationStatus.Unknown
        state.error = null
      })
      .addCase(logoutUser.fulfilled, state => {
        state.authorizationStatus = AuthorizationStatus.NoAuth
        state.data = null
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth
        state.error = action.payload as string
        state.data = null
      })
  },
})

export const { clear } = authSlice.actions
export default authSlice.reducer
