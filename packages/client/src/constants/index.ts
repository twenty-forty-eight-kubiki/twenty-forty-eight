export const BASE_URL = 'https://ya-praktikum.tech/api/v2'

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const leaderBoardData = {
  ratingFieldName: 'leader',
  cursor: 0,
  limit: 100,
}
