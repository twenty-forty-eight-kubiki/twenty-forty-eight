import { BASE_URL } from '../constants'

export interface LeaderResponse {
  user_name: string
  avatar: string
  userId: number
  score: number
}

export interface LeadersError {
  reason: string
}

export const LeaderBoardApi = {
  async getAll(): Promise<LeaderResponse[] | LeadersError> {
    return fetch(`${BASE_URL}/leaderboard/all`, {
      body: '',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .catch(err => console.log(err))
  },
}
