import { createSlice } from '@reduxjs/toolkit';
import { GameState } from '../store.types';

import {
  directionMove,
  generateBoard,
  initBoard,
  randomNewTile,
  resetBoard
} from '../../helpers/board';

const initialState: GameState = {
  board: null,
  currentScore: 0,
  bestScore: 0,
  gameConfig: {
    padding: 15,
    tileSize: 0,
    countTiles: 4,
    boardSize: 500
  }
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setTileSize: state => {
      const { boardSize, countTiles, padding } = state.gameConfig;
      state.gameConfig.tileSize =
        (boardSize - padding * (countTiles + 1)) / countTiles;
    },
    createBoard: state => {
      const startBoard = initBoard(generateBoard(state.gameConfig.countTiles));
      state.board = startBoard;
    },
    resetBoardState: state => {
      if (state.board) {
        const resetedBoard = resetBoard(state.board);
        state.board = initBoard(resetedBoard);
      }
    },
    moveBoard: (state, action) => {
      const { board, direction } = action.payload;
      const newBoard = directionMove(board, direction);
      state.board = randomNewTile(newBoard);
    }
  }
});

export const { resetBoardState, createBoard, moveBoard, setTileSize } =
  gameSlice.actions;
