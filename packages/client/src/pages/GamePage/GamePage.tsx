import Board from '../../components/Game/components/Board/Board';
import { withLayout } from '../../hocs/withLayout';
import './GamePage.scss';
import GuiButton from '../../ui/GuiButton/GuiButton';
import { Fullscreen } from '../../helpers/fullscreen';
import { useState } from 'react';

const GamePage = () => {
  const [fullscreenBtnText, setFullscreenBtnText] = useState(
    'Открыть на полный экран'
  );
  const onFullscreenBtnClick = () => {
    if (Fullscreen.check()) {
      Fullscreen.exit();
      setFullscreenBtnText('Открыть на полный экран');
    } else {
      const page = document.querySelector('.board-page') as HTMLDivElement;
      if (!page) return;
      Fullscreen.enter(page);
      setFullscreenBtnText('Закрыть полный экран');
    }
  };

  return (
    <div className='board-page'>
      <div className='container'>
        <div className='board-page__wrapper'>
          <Board />
          <GuiButton
            className='board-page__fullscreen-btn'
            btnText={fullscreenBtnText}
            onClick={onFullscreenBtnClick}
          />
        </div>
      </div>
    </div>
  );
};

export default withLayout(GamePage);
