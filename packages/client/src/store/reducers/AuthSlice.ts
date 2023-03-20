import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserInfoResponse } from '../../types/api/authApi';
import { GenericState } from '../store.types';
import { AuthorizationStatus } from '../../constants';
import { fetchUser, logoutUser } from '../auth-actions';

const initialState: GenericState<UserInfoResponse> = {
	error: null,
	data: null,
	authorizationStatus: AuthorizationStatus.Unknown
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		clear: () => initialState,
		updateUserData: (state, action: PayloadAction<UserInfoResponse>) => {
			state.data = action.payload;
		}
	},
	extraReducers: builder => {
		builder
			.addCase(fetchUser.pending, state => {
				state.error = null;
				state.authorizationStatus = AuthorizationStatus.Unknown;
			})
			.addCase(fetchUser.fulfilled, (state, action) => {
				state.data = action.payload;
				state.authorizationStatus = AuthorizationStatus.Auth;
			})
			.addCase(fetchUser.rejected, (state, action) => {
				state.error = action.payload as string;
				state.data = null;
				state.authorizationStatus = AuthorizationStatus.NoAuth;
			})
			.addCase(logoutUser.pending, state => {
				state.authorizationStatus = AuthorizationStatus.Unknown;
				state.error = null;
			})
			.addCase(logoutUser.fulfilled, state => {
				state.authorizationStatus = AuthorizationStatus.NoAuth;
				state.data = null;
			})
			.addCase(logoutUser.rejected, (state, action) => {
				state.authorizationStatus = AuthorizationStatus.Auth;
				state.error = action.payload as string;
				state.data = null;
			});
	}
});

export const { clear, updateUserData } = authSlice.actions;
export default authSlice.reducer;
