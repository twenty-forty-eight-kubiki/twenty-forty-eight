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
  id: number | undefined;
  login: string | undefined;
  score: number;
  avatar: string | undefined;
  name: string | undefined;
  surname: string | undefined;
};

export type LeadersList = {
  data: LeaderItem;
};

export const LeaderBoardApi = {
  async getAll(data: LeadersRequest): Promise<LeadersResponse> {
    return API.post<LeadersRequest, LeadersResponse>(
      'leaderboard/dev-kubiki',
      data
    );
  },

  async addUser(payload: LeaderItem) {
    const requestParams: ReqParams = {
      ratingFieldName: 'score',
      teamName: 'dev-kubiki'
    };

    return API.post<AddLeaderRequest, void>('leaderboard', {
      data: payload,
      ...requestParams
    });
  }
};
