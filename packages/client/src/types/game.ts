export type Board = number[][];

export type GameConfig = {
  padding: number;
  countTiles: number;
  boardSize: number;
};

export type BoardWithScore = {
  board: Board;
  score: number;
};
