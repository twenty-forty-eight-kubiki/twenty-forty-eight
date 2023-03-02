import { Board } from '../common/allias'
import { randomInt } from './random'

export const getEmptyCell = (board: Board) => {
  const empties = []

  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      if (!board[x][y]) {
        empties.push({ x, y })
      }
    }
  }

  const randomCell = randomInt(0, empties.length - 1)

  return empties[randomCell]
}

export const randomNewTile = (board: Board) => {
  const { x, y } = getEmptyCell(board)
  board[x][y] = randomInt(1, 2) * 2

  return board;
}

export const resetBoard = (board: Board) => {
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      board[x][y] = 0
    }
  }

  return board
}

export const isGameEnd = (board: Board) => {
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      if (board[x][y] === 2048) {
        return true
      }
    }
  }
  return false;
}