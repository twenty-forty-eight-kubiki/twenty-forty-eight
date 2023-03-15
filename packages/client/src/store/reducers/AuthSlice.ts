import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { authAPI } from '../../api/authApi'
import { UserInfoResponse } from '../../types/api/authApi'
import { isAPIError } from '../../utils/isAPIError'
import { GenericState, Status } from '../store.types'

const initialState: GenericState<UserInfoResponse> = {
  status: Status.FULFILLED,
  error: null,
  data: null,
  authorizationStatus: false,
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
        state.status = Status.PENDING
        state.error = null
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = Status.FULFILLED
        state.data = action.payload
        state.authorizationStatus = true
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = Status.REJECTED
        state.error = action.payload as string
        state.data = null
        state.authorizationStatus = false
      })
      .addCase(logoutUser.pending, state => {
        state.status = Status.PENDING
        state.error = null
      })
      .addCase(logoutUser.fulfilled, state => {
        state.status = Status.FULFILLED
        state.data = null
        state.authorizationStatus = false
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.status = Status.REJECTED
        state.error = action.payload as string
        state.data = null
      })
  },
})

export const { clear } = authSlice.actions
export default authSlice.reducer
