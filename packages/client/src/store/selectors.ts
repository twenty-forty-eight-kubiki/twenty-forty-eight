import { State } from './store.types'

export const getAuthorizationStatus = (state: State): boolean =>
  state.auth.authorizationStatus === true

export const getAuthCheckedStatus = (state: State): boolean =>
  state.auth.authorizationStatus !== 'Unknown'
