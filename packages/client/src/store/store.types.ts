import { store, rootReducer } from './store';
import { AuthorizationStatus } from '../constants/auth';
import { Board, GameConfig } from '../types/game';

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
  isFail: boolean;
  is2048: boolean;
  gameConfig: GameConfig;
};

export type RootState = ReturnType<typeof rootReducer>;
export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
