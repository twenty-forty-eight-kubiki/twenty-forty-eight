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
import {
  createBoard,
  failGame,
  reach2048Points
} from '../../store/reducers/GameSlice';
import {
  getBoard,
  getIsGameFail,
  getIsGame2048
} from '../../store/game-selectors';
import { checkBoardStatus } from '../../helpers/board';
import { GameStates } from '../../constants/gameStates';
import { GameWinModal } from '../../components/GameWinModal/GameWinModal';

const GamePage = () => {
  const [fullscreenBtnText, setFullscreenBtnText] = useState(
    'Открыть на полный экран'
  );
  const [isRuleModal, setRuleModal] = useState(false);

  const boardPageRef: React.MutableRefObject<any> = useRef();
  const dispatch = useAppDispatch();
  const board = useAppSelector(getBoard);
  const isFail = useAppSelector(getIsGameFail);
  const is2048 = useAppSelector(getIsGame2048);
  const [isGameOverModal, setGameOverModal] = useState(isFail);
  const [is2048Modal, set2048Modal] = useState(false);

  useEffect(() => {
    if (!board) {
      return;
    }

    if (checkBoardStatus(board) === GameStates.Lose) {
      dispatch(failGame());
    }

    if (checkBoardStatus(board) === GameStates.Win && !is2048) {
      set2048Modal(true);
      dispatch(reach2048Points());
    }
  }, [board]);

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
      <Modal
        isVisible={is2048Modal}
        content={<GameWinModal onClose={() => set2048Modal(false)} />}
        onClose={() => set2048Modal(false)}
      />
    </div>
  );
};

export default withLayout(GamePage);
