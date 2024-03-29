import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAPIError } from '../utils/isAPIError';
import { LeaderResponse, LeaderBoardApi } from '../api/leaderboard';
import { leaderBoardData } from '../constants/leaderboard';

export const fetchLeaders = createAsyncThunk<LeaderResponse, undefined>(
  'leaderboard/fetchLeaders',
  async (_, thunkApi) => {
    try {
      return await LeaderBoardApi.getAll(leaderBoardData);
    } catch (error: unknown) {
      const reason = isAPIError(error) ? error.reason : 'Неизвестная ошибка';
      return thunkApi.rejectWithValue(reason);
    }
  }
);
