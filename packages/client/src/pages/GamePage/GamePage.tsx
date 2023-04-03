import Board from '../../components/Game/components/Board/Board';
import { withLayout } from '../../hocs/withLayout';
import './GamePage.scss';
import GuiButton from '../../ui/GuiButton/GuiButton';
import { Fullscreen } from '../../helpers/fullscreen';
import React, { useEffect, useRef, useState } from 'react';
import GameControls from '../../components/GameControls/GameControls';
import GameOnboarding from '../../components/GameOnboarding/GameOnboarding';
import Modal from '../../components/Modal/Modal';
import { GameRulesModal } from '../../components/GameRulesModal/GameRulesModal';
import { GameOverModal } from '../../components/GameOverModal/GameOverModal';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { createBoard } from '../../store/reducers/GameSlice';
import { getIsGameFail } from '../../store/game-selectors';

const GamePage = () => {
  const [fullscreenBtnText, setFullscreenBtnText] = useState(
    'Открыть на полный экран'
  );
  const [isRuleModal, setRuleModal] = useState(false);

  const boardPageRef: React.MutableRefObject<any> = useRef();
  const dispatch = useAppDispatch();

  const isFail = useAppSelector(getIsGameFail);
  const [isGameOverModal, setGameOverModal] = useState(isFail);

  useEffect(() => {
    dispatch(createBoard());
  }, []);

  useEffect(() => {
    setGameOverModal(isFail);
  }, [isFail]);

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

  const onRulesBtnClick = () => {
    setRuleModal(true);
  };

  return (
    <div className='board-page' ref={boardPageRef}>
      <div className='container'>
        <div className='board-page__wrapper'>
          <div className='board-page__rules'>
            <GameOnboarding />
            <GuiButton
              className='board-page__fullscreen-btn'
              btnText={fullscreenBtnText}
              onClick={onFullscreenBtnClick}
            />
            <GuiButton
              className='board-page__rules-btn'
              btnText='Правила игры'
              onClick={onRulesBtnClick}
            />
          </div>
          <div className='board-page__game'>
            <GameControls />
            <Board />
          </div>
        </div>
      </div>
      <Modal
        isVisible={isRuleModal}
        content={<GameRulesModal />}
        onClose={() => setRuleModal(false)}
      />
      <Modal
        isVisible={isGameOverModal}
        content={<GameOverModal />}
        onClose={() => setGameOverModal(false)}
      />
    </div>
  );
};

export default withLayout(GamePage);
