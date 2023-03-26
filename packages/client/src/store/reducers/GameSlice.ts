import { createSlice } from '@reduxjs/toolkit';
import { GameState } from '../store.types';
import { useGameConfig } from '../../components/Game/hooks/useGameConfig';
import {
  directionMove,
  generateBoard,
  initBoard,
  randomNewTile,
  resetBoard
} from '../../components/Game/helpers/board';

const initialState: GameState = {
  board: null,
  currentScore: 0,
  bestScore: 0
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    createBoard: state => {
      const { countTiles } = useGameConfig();
      const startBoard = initBoard(generateBoard(countTiles));
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

export const { resetBoardState, createBoard, moveBoard } = gameSlice.actions;
