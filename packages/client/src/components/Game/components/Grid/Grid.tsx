import React, { FC } from 'react';
import RoundedRectangle from '../RoundedRectangle/RoundedRectangle';
import { useGameConfig } from '../../hooks/useGameConfig';

const Grid: FC = () => {
	const { boardSize, tileSize, countTiles, padding } = useGameConfig();

	let row = -tileSize;
	let column = -tileSize;

	return (
		<>
			{/*Board*/}
			<RoundedRectangle
				x={0}
				y={0}
				width={boardSize}
				height={boardSize}
				radius={5}
				color={'#BBADA0'}
			/>
			{/*Cell*/}
			{[...Array(countTiles * countTiles).keys()].map((_, index) => {
				row = row + padding + tileSize;

				if (index % countTiles === 0) {
					column = column + padding + tileSize;
					row = padding;
				}

				return (
					<RoundedRectangle
						x={row}
						y={column}
						width={tileSize}
						height={tileSize}
						radius={5}
						color={'#CDC1B4'}
					/>
				);
			})}
		</>
	);
};

export default Grid;
