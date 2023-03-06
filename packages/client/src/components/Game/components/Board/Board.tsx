import React, { memo, useEffect, useState } from 'react'
import { Canvas } from '../Canvas/Canvas'
import Grid from '../Grid/Grid'
import Tile from '../Tile/Tile'
import {
  checkBoardStatus,
  directionMove,
  generateBoard,
  initBoard,
  randomNewTile,
  resetBoard,
} from '../../helpers/board'

import { useGameConfig } from '../../hooks/useGameConfig'
import { GameState } from '../../common/states'
import { directionByKey } from '../../common/direction'

const Board = memo(() => {
  const { boardSize, countTiles, tileSize, padding } = useGameConfig()

  const [board, setBoard] = useState(generateBoard(countTiles))

  useEffect(() => {
    const handleMove = (event: any) => {
      const direction = directionByKey[event.key]

      if (direction) {
        const newBoard = directionMove(board, direction)
        setBoard(randomNewTile(newBoard))
      }
    }

    document.addEventListener('keyup', handleMove)

    return () => document.removeEventListener('keyup', handleMove)
  }, [board])

  useEffect(() => {
    const startBoard = initBoard(board)

    setBoard(startBoard)
  }, [])

  useEffect(() => {
    switch (checkBoardStatus(board)) {
      case GameState.Win: {
        console.log('Вы выиграли')

        setBoard(resetBoard(board))
        break
      }
    }
  }, [board])

  return (
    <Canvas height={boardSize} width={boardSize} dpr={1}>
      <Grid />
      {board.map((row, rowIndex) =>
        row.map((column, columnIndex) => {
          if (!column) {
            return null
          }
          return (
            <Tile
              key={`${columnIndex}${rowIndex}`}
              value={column}
              y={columnIndex * tileSize + columnIndex * padding + padding}
              x={rowIndex * tileSize + rowIndex * padding + padding}
            />
          )
        })
      )}
    </Canvas>
  )
})

export default Board
