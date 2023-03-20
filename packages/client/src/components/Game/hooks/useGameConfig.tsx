const BOARD_SIZE = 500;
const COUNT_TILES = 4;
const BOARD_PADDING = 15;

export const useGameConfig = () => {
	const tileSize =
		(BOARD_SIZE - BOARD_PADDING * (COUNT_TILES + 1)) / COUNT_TILES;

	return {
		padding: BOARD_PADDING,
		tileSize,
		countTiles: COUNT_TILES,
		boardSize: BOARD_SIZE
	};
};
