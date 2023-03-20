import Board from '../../components/Game/components/Board/Board';
import { withLayout } from '../../hocs/withLayout';
import './GamePage.scss';

const GamePage = () => {
	return (
		<div className='board-page'>
			<Board />
		</div>
	);
};

export default withLayout(GamePage);
