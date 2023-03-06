export enum Direction {
  Up = 'up',
  Down = 'down',
  Left = 'left',
  Right = 'right',
}

export const directionByKey: { [key: string]: Direction } = {
  ['ArrowUp']: Direction.Up,
  ['ArrowLeft']: Direction.Left,
  ['ArrowDown']: Direction.Down,
  ['ArrowRight']: Direction.Right
}