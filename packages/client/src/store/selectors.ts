import { State } from './store.types'

export const getAuthorizationStatus = (state: State): boolean =>
  state.auth.authorizationStatus
