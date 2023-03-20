import { State } from './store.types';
import { AuthorizationStatus } from '../constants';

export const getAuthorizationStatus = (state: State): AuthorizationStatus =>
	state.auth.authorizationStatus;

export const getAuthCheckedStatus = (state: State): boolean =>
	state.auth.authorizationStatus !== AuthorizationStatus.Unknown;

export const getUserData = (state: State) => state.auth.data;

export const getUserAvatar = (state: State) => state.auth.data?.avatar;
