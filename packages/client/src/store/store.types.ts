import { store, rootReducer } from './store';
import { AuthorizationStatus } from '../constants/auth';
import { Board } from '../components/Game/common/types';

export type AuthState<TData, TError = unknown> = {
  data: TData | null;
  error: TError | null;
  authorizationStatus: AuthorizationStatus;
};

export type LeaderBoardState<TData, TError = unknown> = {
  data: TData | null;
  error: TError | null;
};

export type GameState = {
  board: Board | null;
  currentScore: number;
  bestScore: number;
};

export type RootState = ReturnType<typeof rootReducer>;
export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
