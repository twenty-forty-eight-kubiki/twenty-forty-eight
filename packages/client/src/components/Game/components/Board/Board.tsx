import React, { memo, useEffect, useState } from 'react'
import { Canvas } from '../Context/Context'
import Grid from '../Grid/Grid'
import { useGameValue } from '../../../../hooks/useGameValue'
import Tile from '../Tile/Tile'
import { getEmptyCell, isGameEnd, randomNewTile, resetBoard } from '../../helpers/board'
import { randomInt } from '../../helpers/random'
import {
  canMoveDown,
  canMoveLeft,
  canMoveRight,
  canMoveUp,
  moveDown,
  moveLeft,
  moveRight,
  moveUp
} from '../../helpers/movement'

const Board = memo(() => {
  const { boardSize, countTiles, tileSize, padding } = useGameValue()

  const [board, setBoard] = useState(Array(countTiles).fill(1).map(() => Array(countTiles).fill(0)))

  useEffect(() => {
    const directionControls = (event: any) => {
      switch (event.key) {
        case 'ArrowUp': {
          if (canMoveUp(board)) {
            setBoard([...moveUp(board)])
            setBoard([...randomNewTile(board)])
          }
          break
        }
        case 'ArrowLeft': {
          if (canMoveLeft(board)) {
            setBoard([...moveLeft(board)])
            setBoard([...randomNewTile(board)])
          }
          break
        }
        case 'ArrowDown': {
          if (canMoveDown(board)) {
            setBoard([...moveDown(board)])
            setBoard([...randomNewTile(board)])
          }
          break
        }
        case 'ArrowRight': {
          if (canMoveRight(board)) {
            setBoard([...moveRight(board)])
            setBoard([...randomNewTile(board)])
          }
          break
        }
      }

    }

    document.addEventListener('keyup', directionControls)

    return () => document.removeEventListener('keyup', directionControls)
  }, [])

  useEffect(() => {
    const startBoard = resetBoard(board)

    const { x: firstX, y: firstY } = getEmptyCell(startBoard)
    startBoard[firstX][firstY] = randomInt(1, 2) * 2

    const { x: secondX, y: secondY } = getEmptyCell(startBoard)
    startBoard[secondX][secondY] = randomInt(1, 2) * 2

    setBoard([...startBoard])
  }, [])

  useEffect(() => {
    if (isGameEnd(board)) {
      console.log('Вы выиграли')

      setBoard([...resetBoard(board)])
    }
  }, [board])

  return (
    <Canvas height={boardSize} width={boardSize} dpr={1} isAnimating={true}>
      <Grid />
      {board.map((row, rowIndex) => row.map((column, columnIndex) => {
        if (!column) {
          return null
        }
        return <Tile key={`${columnIndex}${rowIndex}`} value={column}
                     y={columnIndex * tileSize + (columnIndex * padding) + padding}
                     x={rowIndex * tileSize + (rowIndex * padding) + padding} />
      }))}
    </Canvas>
  )
})

export default Board