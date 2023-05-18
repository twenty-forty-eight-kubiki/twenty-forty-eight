import { BASE_URL } from '../constants';
import { API } from './api';

type ReqParams = {
  ratingFieldName: string;
  teamName: string;
};

export type LeadersResponse = LeadersList[];

export type LeadersRequest = {
  ratingFieldName: string;
  cursor: number;
  limit: number;
};

export type AddLeaderRequest = {
  data: LeaderItem;
  ratingFieldName: string;
  teamName: string;
};

type LeaderItem = {
  userId?: number;
  login?: string;
  score?: number;
  name?: string;
};

export type LeadersList = {
  data: LeaderItem;
};

export const LeaderBoardApi = {
  async getAll(data: LeadersRequest): Promise<LeadersResponse> {
    return API.post<LeadersRequest, LeadersResponse>(
      `${BASE_URL}/leaderboard/dev-kubiki-prod`,
      data
    );
  },

  async addUser(payload: LeaderItem) {
    const requestParams: ReqParams = {
      ratingFieldName: 'score',
      teamName: 'dev-kubiki-prod'
    };

    return API.post<AddLeaderRequest, void>(`${BASE_URL}/leaderboard/`, {
      data: payload,
      ...requestParams
    });
  }
};

export class LeaderResponse {}
