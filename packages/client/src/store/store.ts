import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/AuthSlice';
import leaderboardSlice from './reducers/LeaderboardSlice';
import { gameSlice } from './reducers/GameSlice';

export const rootReducer = combineReducers({
  auth: authReducer,
  leaderboard: leaderboardSlice.reducer,
  game: gameSlice.reducer
});

export const store = configureStore({
  reducer: rootReducer
});
