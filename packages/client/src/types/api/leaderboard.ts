export type LeaderboardUserParams = {
  id: number;
  firstName: string;
  secondName: string;
  displayName: string;
  avatar: string;
  score: number;
};

export type TeamLeadersRequest = {
  ratingFieldName: string;
  cursor: number;
  limit: number;
};

export type TeamLeadersResponse = LeaderboardUserParams[];

export type AddLeaderRequest = {
  data: LeaderboardUserParams;
  ratingFieldName: string | 'score';
  teamName: string;
};
