import { createSelector } from '@reduxjs/toolkit';
import { State } from './store.types';

export const getBoardState = (state: State) => state.game.board;
export const getGameConfigState = (state: State) => state.game.gameConfig;

export const getBoardCurrentScore = (state: State) => state.game.currentScore;

export const getBoardBestScore = (state: State) => state.game.bestScore;

export const getTileSize = (state: State) => {
  const { boardSize, countTiles, padding } = state.game.gameConfig;
  return (boardSize - padding * (countTiles + 1)) / countTiles;
};

export const getBoard = createSelector(getBoardState, board => board);
export const getGameConfig = createSelector(
  getGameConfigState,
  config => config
);
