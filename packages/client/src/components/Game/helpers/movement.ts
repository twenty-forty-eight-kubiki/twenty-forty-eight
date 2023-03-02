import { Board } from '../common/allias'

export const moveTile = (board: Board, x: number, y: number, newX: number, newY: number) => {
  if (x !== newX || y !== newY) {
    board[newX][newY] = board[x][y]
    board[x][y] = 0
  }
}

export const mergeTile = (board: Board, x: number, y: number, mergeX: number, mergeY: number) => {
  if (board[x][y] === board[mergeX][mergeY]) {
    board[x][y] = board[x][y] * 2
    board[mergeX][mergeY] = 0
  }
}

export const canMoveUp = (board: Board): boolean => {
  for (let x = 0; x < board.length; x++) {
    for (let y = 1; y < board[x].length; y++) {
      if (board[x][y]) {
        if (!board[x][y - 1]) {
          return true
        }
        if (board[x][y] === board[x][y - 1]) {
          return true
        }
      }
    }
  }
  return false
}

export const canMoveDown = (board: Board): boolean => {
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length - 1; y++) {
      if (board[x][y]) {
        if (!board[x][y + 1]) {
          return true
        }
        if (board[x][y] === board[x][y + 1]) {
          return true
        }
      }
    }
  }

  return false
}

export const canMoveLeft = (board: Board): boolean => {
  for (let x = 1; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      if (board[x][y]) {
        if (!board[x - 1][y]) {
          return true
        }
        if (board[x][y] === board[x - 1][y]) {
          return true
        }
      }
    }
  }

  return false
}

export const canMoveRight = (board: Board): boolean => {
  for (let x = 0; x < board.length - 1; x++) {
    for (let y = 0; y < board[x].length; y++) {
      if (board[x][y]) {
        if (!board[x + 1][y]) {
          return true
        }
        if (board[x][y] === board[x + 1][y]) {
          return true
        }
      }
    }
  }

  return false
}

export const moveUp = (board: Board): Board => {
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      if (board[x][y]) {
        let bottomY = -1

        for (let bottom = 0; bottom < board[x].length; bottom++) {
          if (bottom <= y) {
            continue
          }

          if (bottomY === -1 && board[x][bottom]) {
            bottomY = bottom
          }
        }

        if (bottomY !== -1) {
          mergeTile(board, x, y, x, bottomY)
        }

        let topY = y

        for (let top = y; top >= 0; top--) {
          if (top < topY && !board[x][top]) {
            topY = top
          }
        }

        moveTile(board, x, y, x, topY)
      }
    }
  }

  return board
}

export const moveDown = (board: Board): Board => {
  for (let x = 0; x < board.length; x++) {
    for (let y = (board[x].length - 1); y >= 0; y--) {
      if (board[x][y]) {
        let topY = -1

        for (let bottom = board[x].length; bottom >= 0; bottom--) {
          if (bottom >= y) {
            continue
          }

          if (topY === -1 && board[x][bottom]) {
            topY = bottom
          }
        }

        let bottomY = y

        for (let top = 0; top < board[x].length; top++) {
          if (top > bottomY && !board[x][top]) {
            bottomY = top
          }
        }

        if (topY !== -1) {
          mergeTile(board, x, y, x, topY)
        }

        moveTile(board, x, y, x, bottomY)
      }
    }
  }

  return board
}

export const moveLeft = (board: Board): Board => {
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board.length; x++) {

      if (board[x][y]) {
        let leftX = -1

        for (let left = 0; left < board[x].length; left++) {
          if (left <= x) {
            continue
          }

          if (leftX === -1 && board[left][y]) {
            leftX = left
          }
        }

        if (leftX !== -1) {
          mergeTile(board, x, y, leftX, y)
        }

        let rightX = x

        for (let right = x; right >= 0; right--) {
          if (right < rightX && !board[right][y]) {
            rightX = right
          }
        }

        moveTile(board, x, y, rightX, y)
      }
    }
  }

  return board
}

export const moveRight = (board: Board): Board => {
  for (let y = 0; y < board.length; y++) {
    for (let x = (board.length - 1); x >= 0; x--) {
      console.log(x, y)
      if (board[x][y]) {
        let rightX = -1

        for (let left = board.length; left >= 0; left--) {
          if (left >= x) {
            continue
          }

          if (rightX === -1 && board[left][y]) {
            rightX = left
          }
        }

        let leftX = x

        for (let left = 0; left < board.length; left++) {
          if (left > leftX && !board[left][y]) {
            leftX = left
          }
        }

        if (rightX !== -1) {
          mergeTile(board, x, y, rightX, y)
        }

        moveTile(board, x, y, leftX, y)
      }
    }
  }

  return board
}


