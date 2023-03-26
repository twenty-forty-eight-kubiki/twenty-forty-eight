import Board from '../../components/Game/components/Board/Board';
import { withLayout } from '../../hocs/withLayout';
import './GamePage.scss';
import GuiButton from '../../ui/GuiButton/GuiButton';
import { Fullscreen } from '../../helpers/fullscreen';
import { useRef, useState } from 'react';
import GameControls from '../../components/GameControls/GameControls';
import GameOnboarding from '../../components/GameOnboarding/GameOnboarding';

const GamePage = () => {
  const [fullscreenBtnText, setFullscreenBtnText] = useState(
    'Открыть на полный экран'
  );
  const boardPageRef = useRef();
  const onFullscreenBtnClick = () => {
    if (Fullscreen.check()) {
      Fullscreen.exit();
      setFullscreenBtnText('Открыть на полный экран');
    } else {
      const page = boardPageRef.current;
      if (!page) return;
      Fullscreen.enter(page);
      setFullscreenBtnText('Закрыть полный экран');
    }
  };

  return (
    <div className='board-page' ref={boardPageRef}>
      <div className='container'>
        <div className='board-page__wrapper'>
          <GameOnboarding />
          <div className='board-page__game'>
            <GameControls currentScore={0} bestScore={0} />
            <Board />
            <GuiButton
              className='board-page__fullscreen-btn'
              btnText={fullscreenBtnText}
              onClick={onFullscreenBtnClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withLayout(GamePage);
