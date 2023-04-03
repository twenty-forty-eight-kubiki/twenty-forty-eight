import React, { ReactElement } from 'react';
import './GameOverModal.scss';
import GuiButton from '../../ui/GuiButton/GuiButton';
import { resetBoardState } from '../../store/reducers/GameSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { getBoardCurrentScore } from '../../store/game-selectors';

const GameOverModal = (): ReactElement => {
  const dispatch = useAppDispatch();
  const currentScore = useAppSelector(getBoardCurrentScore);
  const onResetClick = () => {
    dispatch(resetBoardState());
  };

  return (
    <div className='game-over-modal'>
      <h2 className='game-over-modal__title'>Вы проиграли</h2>
      <p className='game-over-modal__score'>Ваш счет: {currentScore}</p>
      <GuiButton
        btnText='Начать заново'
        labelText='restart'
        className='game-over-modal__restart'
        onClick={onResetClick}
      />
    </div>
  );
};

export { GameOverModal };
