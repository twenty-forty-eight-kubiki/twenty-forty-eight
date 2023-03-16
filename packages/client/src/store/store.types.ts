import { store, rootReducer } from './store'

export enum Status {
  PENDING = 'pending',
  FULFILLED = 'fulfilled',
  REJECTED = 'rejected',
}

export type GenericState<TData, TError = unknown> = {
  data: TData | null
  error: TError | null
  status: Status
  authorizationStatus: boolean | 'Unknown'
}

export type RootState = ReturnType<typeof rootReducer>
export type State = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
