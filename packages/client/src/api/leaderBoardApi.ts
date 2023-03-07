import {BaseUrl} from '../utils/baseURL'

export const LeaderBoardApi = {
  async getAll() {
    return fetch(`${BaseUrl}/leaderboard/all`, {
      body: '',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .catch(err => console.log(err));
  },
}
