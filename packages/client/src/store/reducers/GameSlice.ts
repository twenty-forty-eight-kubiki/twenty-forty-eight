import { createSlice } from '@reduxjs/toolkit';
import { GameState } from '../store.types';

import {
  directionMove,
  generateBoard,
  initBoard,
  randomNewTile,
  resetBoard
} from '../../helpers/board';
import { getBestScore } from '../../helpers/game-score';

const initialState: GameState = {
  board: null,
  currentScore: 0,
  bestScore: 0,
  isFail: false,
  is2048: false,
  gameConfig: {
    padding: 15,
    countTiles: 4,
    boardSize: 500
  }
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    createBoard: state => {
      if (!state.board) {
        const startBoard = initBoard(
          generateBoard(state.gameConfig.countTiles)
        );
        state.board = startBoard;
      }
    },
    resetBoardState: state => {
      if (state.board) {
        const resetedBoard = resetBoard(state.board);
        state.board = initBoard(resetedBoard);
        state.currentScore = 0;
        state.isFail = false;
        state.is2048 = false;
      }
    },
    moveBoard: (state, action) => {
      const { board, direction } = action.payload;
      const boardWithScore = directionMove(
        board,
        direction,
        state.currentScore
      );
      state.board = boardWithScore.board;
      if (boardWithScore.wasMoved) {
        state.board = randomNewTile(boardWithScore.board);
      }
      state.currentScore = boardWithScore.score;
      state.bestScore = getBestScore(state.bestScore, state.currentScore);
    },
    failGame: state => {
      state.isFail = true;
    },
    get2048Points: state => {
      state.is2048 = true;
    }
  }
});

export const {
  resetBoardState,
  createBoard,
  moveBoard,
  failGame,
  get2048Points
} = gameSlice.actions;
