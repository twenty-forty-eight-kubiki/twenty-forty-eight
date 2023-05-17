import {
  TeamLeadersRequest,
  TeamLeadersResponse,
  AddLeaderRequest
} from '../types/api/leaderboard';
import { API } from './api';

export const LeaderBoardApi = {
  async getTeamLeaders(teamName: string, data: TeamLeadersRequest): Promise<TeamLeadersResponse> {
    return API.post<TeamLeadersRequest, TeamLeadersResponse>(`leaderboard/${teamName}`, data);
  },

  async addUser(data: AddLeaderRequest) {
    return API.post<AddLeaderRequest, void>('leaderboard', data);
  }
};
