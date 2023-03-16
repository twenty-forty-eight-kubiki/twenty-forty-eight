import { State } from './store.types'
import { AuthorizationStatus } from '../constants'

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state.auth.authorizationStatus;

export const getAuthCheckedStatus = (state: State): boolean =>
  state.auth.authorizationStatus !== AuthorizationStatus.Unknown;
