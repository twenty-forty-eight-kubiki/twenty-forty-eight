export enum Status {
  PENDING = 'pending',
  FULFILLED = 'fulfilled',
  REJECTED = 'rejected',
}

export type GenericState<TData, TError = unknown> = {
  data: TData | null
  error: TError | null
  status: Status
}
