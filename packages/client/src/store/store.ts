import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/AuthSlice';
import leaderboardSlice from './reducers/LeaderboardSlice';
import { gameSlice } from './reducers/GameSlice';
import { RootState } from './store.types'

export const rootReducer = combineReducers({
  auth: authReducer,
  leaderboard: leaderboardSlice.reducer,
  game: gameSlice.reducer
});

export function createStore(initialState?: RootState) {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });
}
