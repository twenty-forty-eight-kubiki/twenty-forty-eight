export type LeaderResponse = LeadersList[]

export type LeaderRequest = {
  ratingFieldName: string
  cursor: number
  limit: number
}

export type AddLeaderRequest = {
  data: LeadersList
  cursor: number
  limit: number
}

type LeaderItem = {
  name: string
  score: number
  userId: number
}

export type LeadersList = {
  data: LeaderItem
}
