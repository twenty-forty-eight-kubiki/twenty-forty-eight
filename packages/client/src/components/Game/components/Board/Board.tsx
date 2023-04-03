import React, { memo, useEffect, useLayoutEffect, useState } from 'react';
import { Canvas } from '../Canvas/Canvas';
import Grid from '../Grid/Grid';
import Tile from '../Tile/Tile';
import { checkBoardStatus } from '../../../../helpers/board';
import { GameStates } from '../../../../constants/gameStates';
import { directionByKey } from '../../../../types/direction';
import { useAppDispatch, useAppSelector } from '../../../../hooks/store';
import {
  moveBoard,
  resetBoardState,
  failGame
} from '../../../../store/reducers/GameSlice';
import {
  getBoard,
  getGameConfig,
  getTileSize
} from '../../../../store/game-selectors';

const Board = memo(() => {
  const dispatch = useAppDispatch();
  const board = useAppSelector(getBoard);
  const { boardSize, padding } = useAppSelector(getGameConfig);
  const tileSize = useAppSelector(getTileSize);

  useEffect(() => {
    const handleMove = (event: any) => {
      const direction = directionByKey[event.key];

      if (direction && board) {
        dispatch(moveBoard({ board, direction }));
      }
    };

    document.addEventListener('keyup', handleMove);

    return () => document.removeEventListener('keyup', handleMove);
  }, [board]);

  useEffect(() => {
    if (!board) {
      return;
    }
    switch (checkBoardStatus(board)) {
      case GameStates.Win: {
        console.log('Вы выиграли');

        dispatch(resetBoardState());
        break;
      }
      case GameStates.Lose: {
        console.log('Вы проиграли');

        dispatch(failGame());

        break;
      }
    }
  }, [board]);

  return (
    <Canvas height={boardSize} width={boardSize} dpr={1}>
      <Grid />
      {board &&
        board.map((row, rowIndex) =>
          row.map((column, columnIndex) => {
            if (!column) {
              return null;
            }
            return (
              <Tile
                key={`${columnIndex}${rowIndex}`}
                value={column}
                y={columnIndex * tileSize + columnIndex * padding + padding}
                x={rowIndex * tileSize + rowIndex * padding + padding}
              />
            );
          })
        )}
    </Canvas>
  );
});

export default Board;
