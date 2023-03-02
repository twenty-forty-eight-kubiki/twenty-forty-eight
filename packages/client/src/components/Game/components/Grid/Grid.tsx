import React, { FC } from 'react'
import RoundedRectangle from '../RoundedRectangle/RoundedRectangle'
import { useGameValue } from '../../../../hooks/useGameValue'

const Grid: FC = () => {
  const { boardSize, tileSize, countTiles } = useGameValue();

  let row = -tileSize;
  let column = -tileSize;

  return(
    <>
      {/*Board*/}
      <RoundedRectangle x={0} y={0} width={boardSize} height={boardSize} radius={5} color={'#BBADA0'} />
      {/*Cell*/}
      {[...Array(countTiles * countTiles).keys()].map((qwe, index) => {
        row = row + 15 + tileSize;

        if (index % countTiles === 0) {
          column = column + 15 + tileSize;
          row = 15;
        }

        return <RoundedRectangle x={row} y={column} width={tileSize} height={tileSize} radius={5} color={'#CDC1B4'} />
      })}
    </>
  )

}

export default Grid;