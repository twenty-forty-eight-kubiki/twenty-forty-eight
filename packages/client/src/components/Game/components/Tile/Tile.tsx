import React, { FC } from 'react'
import RoundedRectangle from '../RoundedRectangle/RoundedRectangle'
import { useGameConfig } from '../../hooks/useGameConfig'
import Text from '../Text/Text'

export type TileProps = {
  x: number;
  y: number;
  value: number;
}

const colorTile: any = {
  backgroundColor: {
    '2': '#eee4da',
    '4': '#ede0c8',
    '8': '#f2b179',
    '16': '#f59563',
    '32': '#f67c5f',
    '64': '#f65e3b',
    '128': '#edcf72',
    '256': '#edcc61',
    '512': '#edc850',
    '1024': '#edc53f',
    '2048': '#edc22e'
  },
  textColor: {
    '2': '#776e65',
    '4': '#776e65',
    '8': '#f9f6f2',
    '16': '#f9f6f2',
    '32': '#f9f6f2',
    '64': '#f9f6f2',
    '128': '#f9f6f2',
    '256': '#f9f6f2',
    '512': '#f9f6f2',
    '1024': '#f9f6f2',
    '2048': '#f9f6f2'
  }
}

const Tile: FC<TileProps> = ({ x, y, value }) => {
  const { tileSize } = useGameConfig()

  return (
    <>
      <RoundedRectangle x={x} y={y} width={tileSize} height={tileSize} radius={5}
        color={colorTile.backgroundColor[String(value)]} />
      <Text text={String(value)} x={x + tileSize / 2} y={y + tileSize / 2} color={colorTile.textColor[String(value)]} />
    </>
  )
}

export default Tile