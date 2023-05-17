import { createSlice } from '@reduxjs/toolkit';
import { LeaderBoardState } from '../store.types';
import { TeamLeadersResponse } from '../../types/api/leaderboard';
import { fetchLeaders } from '../leaderboard-actions';

const initialState: LeaderBoardState<TeamLeadersResponse> = {
  error: null,
  data: null
};

export const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {
    clear: () => initialState
  },
  extraReducers: builder => {
    builder
      .addCase(fetchLeaders.pending, state => {
        state.error = null;
      })
      .addCase(fetchLeaders.fulfilled, (state, action) => {
        state.data = action.payload as TeamLeadersResponse;
      })
      .addCase(fetchLeaders.rejected, (state, action) => {
        state.error = action.payload as string;
        state.data = null;
      });
  }
});

export default leaderboardSlice;
