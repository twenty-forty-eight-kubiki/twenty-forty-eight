import { BaseUrl } from '../utils/baseURL'

export interface LeadersProps {
  user_name: string
  avatar: string
  userId: number
  score: number
}

export interface LeadersError {
  reason: string
}

export const LeaderBoardApi = {
  async getAll(): Promise<LeadersProps[] | LeadersError> {
    return fetch(`${BaseUrl}/leaderboard/all`, {
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
