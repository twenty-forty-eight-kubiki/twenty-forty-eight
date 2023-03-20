import { store, rootReducer } from './store';
import { AuthorizationStatus } from '../constants';

export type GenericState<TData, TError = unknown> = {
	data: TData | null;
	error: TError | null;
	authorizationStatus: AuthorizationStatus;
};

export type RootState = ReturnType<typeof rootReducer>;
export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
