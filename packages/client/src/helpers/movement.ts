import { Board, BoardWithScore } from '../types/game';
import produce from 'immer';
export const moveTile = (
  board: Board,
  x: number,
  y: number,
  newX: number,
  newY: number
) => {
  if (x !== newX || y !== newY) {
    return produce(board, draft => {
      draft[newX][newY] = draft[x][y];
      draft[x][y] = 0;
    });
  }

  return board;
};

export const mergeTile = (
  board: Board,
  x: number,
  y: number,
  mergeX: number,
  mergeY: number
) => {
  if (board[x][y] === board[mergeX][mergeY]) {
    return produce(board, draft => {
      draft[x][y] = draft[x][y] * 2;
      draft[mergeX][mergeY] = 0;
    });
  }

  return board;
};

export const setScore = (
  currentScore: number,
  board: Board,
  x: number,
  y: number,
  mergeX: number,
  mergeY: number
) => {
  let score = currentScore;
  if (board[x][y] === board[mergeX][mergeY]) {
    score += board[x][y] * 2;
  }

  return score;
};

export const canMoveUp = (board: Board): boolean => {
  for (let x = 0; x < board.length; x++) {
    for (let y = 1; y < board[x].length; y++) {
      if (board[x][y]) {
        if (!board[x][y - 1]) {
          return true;
        }
        if (board[x][y] === board[x][y - 1]) {
          return true;
        }
      }
    }
  }
  return false;
};

export const canMoveDown = (board: Board): boolean => {
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length - 1; y++) {
      if (board[x][y]) {
        if (!board[x][y + 1]) {
          return true;
        }
        if (board[x][y] === board[x][y + 1]) {
          return true;
        }
      }
    }
  }

  return false;
};

export const canMoveLeft = (board: Board): boolean => {
  for (let x = 1; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      if (board[x][y]) {
        if (!board[x - 1][y]) {
          return true;
        }
        if (board[x][y] === board[x - 1][y]) {
          return true;
        }
      }
    }
  }

  return false;
};

export const canMoveRight = (board: Board): boolean => {
  for (let x = 0; x < board.length - 1; x++) {
    for (let y = 0; y < board[x].length; y++) {
      if (board[x][y]) {
        if (!board[x + 1][y]) {
          return true;
        }
        if (board[x][y] === board[x + 1][y]) {
          return true;
        }
      }
    }
  }

  return false;
};

export const moveUp = (board: Board, currentScore: number): BoardWithScore => {
  let newBoard = board;
  let gameScore = currentScore;

  for (let x = 0; x < newBoard.length; x++) {
    for (let y = 0; y < newBoard[x].length; y++) {
      if (newBoard[x][y]) {
        let bottomY = -1;

        for (let bottom = 0; bottom < newBoard[x].length; bottom++) {
          if (bottom <= y) {
            continue;
          }

          if (bottomY === -1 && newBoard[x][bottom]) {
            bottomY = bottom;
          }
        }

        if (bottomY !== -1) {
          gameScore = setScore(gameScore, newBoard, x, y, x, bottomY);
          newBoard = mergeTile(newBoard, x, y, x, bottomY);
        }

        let topY = y;

        for (let top = y; top >= 0; top--) {
          if (top < topY && !newBoard[x][top]) {
            topY = top;
          }
        }

        newBoard = moveTile(newBoard, x, y, x, topY);
      }
    }
  }

  const result = {
    board: newBoard,
    score: gameScore
  };

  return result;
};

export const moveDown = (
  board: Board,
  currentScore: number
): BoardWithScore => {
  let newBoard = board;
  let gameScore = currentScore;

  for (let x = 0; x < newBoard.length; x++) {
    for (let y = newBoard[x].length - 1; y >= 0; y--) {
      if (newBoard[x][y]) {
        let topY = -1;

        for (let bottom = newBoard[x].length; bottom >= 0; bottom--) {
          if (bottom >= y) {
            continue;
          }

          if (topY === -1 && newBoard[x][bottom]) {
            topY = bottom;
          }
        }

        let bottomY = y;

        for (let top = 0; top < newBoard[x].length; top++) {
          if (top > bottomY && !newBoard[x][top]) {
            bottomY = top;
          }
        }

        if (topY !== -1) {
          gameScore = setScore(gameScore, newBoard, x, y, x, topY);
          newBoard = mergeTile(newBoard, x, y, x, topY);
        }

        newBoard = moveTile(newBoard, x, y, x, bottomY);
      }
    }
  }

  const result = {
    board: newBoard,
    score: gameScore
  };

  return result;
};

export const moveLeft = (
  board: Board,
  currentScore: number
): BoardWithScore => {
  let newBoard = board;
  let gameScore = currentScore;

  for (let y = 0; y < newBoard.length; y++) {
    for (let x = 0; x < newBoard.length; x++) {
      if (newBoard[x][y]) {
        let leftX = -1;

        for (let left = 0; left < newBoard[x].length; left++) {
          if (left <= x) {
            continue;
          }

          if (leftX === -1 && newBoard[left][y]) {
            leftX = left;
          }
        }

        if (leftX !== -1) {
          gameScore = setScore(gameScore, newBoard, x, y, leftX, y);
          newBoard = mergeTile(newBoard, x, y, leftX, y);
        }

        let rightX = x;

        for (let right = x; right >= 0; right--) {
          if (right < rightX && !newBoard[right][y]) {
            rightX = right;
          }
        }

        newBoard = moveTile(newBoard, x, y, rightX, y);
      }
    }
  }

  const result = {
    board: newBoard,
    score: gameScore
  };

  return result;
};

export const moveRight = (
  board: Board,
  currentScore: number
): BoardWithScore => {
  let newBoard = board;
  let gameScore = currentScore;

  for (let y = 0; y < newBoard.length; y++) {
    for (let x = newBoard.length - 1; x >= 0; x--) {
      if (newBoard[x][y]) {
        let rightX = -1;

        for (let left = newBoard.length; left >= 0; left--) {
          if (left >= x) {
            continue;
          }

          if (rightX === -1 && newBoard[left][y]) {
            rightX = left;
          }
        }

        let leftX = x;

        for (let left = 0; left < newBoard.length; left++) {
          if (left > leftX && !newBoard[left][y]) {
            leftX = left;
          }
        }

        if (rightX !== -1) {
          gameScore = setScore(gameScore, newBoard, x, y, rightX, y);
          newBoard = mergeTile(newBoard, x, y, rightX, y);
        }

        newBoard = moveTile(newBoard, x, y, leftX, y);
      }
    }
  }

  const result = {
    board: newBoard,
    score: gameScore
  };

  return result;
};
