import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authAPI } from '../../api/authApi';
import { IDLE, LOADING, SUCCEEDED, FAILED } from '../../utils/statuses';

const initialState = {
    user: null,
    status: IDLE,
    error: null,
}

export const fetchUser = createAsyncThunk(
    'auth/fetchUser',
    async (thunkAPI) => {
        try {
            return await authAPI.getUser()
        } catch (error: unknown) {
            const message = (error.response && error.response.data && error.response.data.message)
                            || error.message
                            || error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.status = IDLE
            state.error = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.status = LOADING
                state.error = null;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.status = SUCCEEDED
                state.user = action.payload
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.status = FAILED
                state.error = action.payload
                state.user = null
            })
    }
})

export const { reset } = authSlice.actions
export default authSlice.reducer
