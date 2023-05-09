import {
  LeaderResponse,
  LeaderRequest,
  AddLeaderRequest
} from '../types/api/leaderbord';
import { API } from './api';

export const LeaderBoardApi = {
  async getAll(data: LeaderRequest): Promise<LeaderResponse> {
    return API.post<LeaderRequest, LeaderResponse>(
      'leaderboard/dev-kubiki',
      data
    );
  },

  async addUser(data: AddLeaderRequest) {
    return API.post<AddLeaderRequest, void>('leaderboard', data);
  }
};
