import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/AuthSlice'
import leaderboardSlice from './reducers/LeaderboardSlice'

export const rootReducer = combineReducers({
  auth: authReducer,
  leaderboard: leaderboardSlice,
})

export const store = configureStore({
  reducer: rootReducer,
})
