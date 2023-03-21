export type LeaderResponse = {
  data: LeadersList
}

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

type Leader = {
  name: string
  score: number
  userId: number
}

export type LeadersList = {
  leader: Leader[]
}
