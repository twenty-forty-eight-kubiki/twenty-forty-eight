import { State } from './store.types';
import { AuthorizationStatus } from '../constants/auth';
import { createSelector } from '@reduxjs/toolkit';

export const getAuthorizationStatus = (state: State) =>
  state.auth.authorizationStatus;

export const getAuthCheckedStatus = (state: State): boolean =>
  state.auth.authorizationStatus !== AuthorizationStatus.Unknown;

const getUserState = (state: State) => state.auth.data;

export const getUserAvatar = (state: State) => state.auth.data?.avatar;

const getLeadersState = (state: State) => state.leaderboard.data;
export const getGameTileSizeState = (state: State) =>
  state.game.gameConfig.countTiles;

export const getLeaders = createSelector(getLeadersState, leaders => leaders);
export const getUserData = createSelector(getUserState, users => users);
