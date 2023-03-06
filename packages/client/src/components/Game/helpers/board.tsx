import { Board } from '../common/types'
import { getRandomInt } from './random'
import produce from 'immer'
import { GameState } from '../common/states'
import { Direction } from '../common/direction'
import {
  canMoveDown,
  canMoveLeft,
  canMoveRight,
  canMoveUp,
  moveDown,
  moveLeft,
  moveRight,
  moveUp,
} from './movement'

export const getEmptyCell = (board: Board) => {
  const empties = []

  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      if (!board[x][y]) {
        empties.push({ x, y })
      }
    }
  }

  const randomCell = getRandomInt(0, empties.length - 1)

  return empties[randomCell]
}

export const randomNewTile = (board: Board) => {
  return produce(board, draft => {
    const { x, y } = getEmptyCell(draft)
    draft[x][y] = getRandomInt(1, 2) * 2
  })
}

export const generateBoard = (size: number) => {
  return Array(size)
    .fill(1)
    .map(() => Array(size).fill(0))
}

export const initBoard = (board: Board) => {
  return produce(board, draft => {
    const startBoard = resetBoard(draft)

    const { x: firstX, y: firstY } = getEmptyCell(startBoard)
    startBoard[firstX][firstY] = getRandomInt(1, 2) * 2

    const { x: secondX, y: secondY } = getEmptyCell(startBoard)
    startBoard[secondX][secondY] = getRandomInt(1, 2) * 2
  })
}

export const resetBoard = (board: Board) => {
  return produce(board, draft => {
    for (let x = 0; x < draft.length; x++) {
      for (let y = 0; y < draft[x].length; y++) {
        draft[x][y] = 0
      }
    }
  })
}

export const isGameWin = (board: Board) => {
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      if (board[x][y] === 2048) {
        return true
      }
    }
  }

  return false
}

export const checkBoardStatus = (board: Board) => {
  if (isGameWin(board)) {
    return GameState.Win
  }

  return GameState.Continue
}

export const directionMove = (board: Board, direction: Direction) => {
  switch (direction) {
    case Direction.Up: {
      if (canMoveUp(board)) {
        return moveUp(board)
      }

      return board
    }

    case Direction.Down: {
      if (canMoveDown(board)) {
        return moveDown(board)
      }

      return board
    }

    case Direction.Left: {
      if (canMoveLeft(board)) {
        return moveLeft(board)
      }

      return board
    }

    case Direction.Right: {
      if (canMoveRight(board)) {
        return moveRight(board)
      }

      return board
    }

    default: {
      return board
    }
  }
}
