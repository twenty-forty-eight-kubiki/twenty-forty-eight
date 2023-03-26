import React, { ReactElement, useState } from 'react';
import GuiButton from '../../ui/GuiButton/GuiButton';
import restartIcon from '../../assets/icons/restart.svg';
import './GameControls.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import {
  getBoardCurrentScore,
  getBoardBestScore
} from '../../store/game-selectors';
import { resetBoardState } from '../../store/reducers/GameSlice';

const GameControls = (): ReactElement => {
  const dispatch = useAppDispatch();

  const currentScore = useAppSelector(getBoardCurrentScore);
  const bestScore = useAppSelector(getBoardBestScore);

  const onResetClick = () => {
    dispatch(resetBoardState());
  };

  return (
    <div className='game-controls'>
      <h2 className='game-controls__title'>2048</h2>
      <div className='game-controls__controls'>
        <GuiButton
          btnText=''
          labelText='restart'
          icon={restartIcon}
          className='game-controls__restart'
          onClick={onResetClick}
        />
        <div className='game-controls__item'>
          <span className='game-controls__text'>Счет</span>
          <span className='game-controls__score'>{currentScore}</span>
        </div>
        <div className='game-controls__item'>
          <span className='game-controls__text'>Рекорд</span>
          <span className='game-controls__score'>{bestScore}</span>
        </div>
      </div>
    </div>
  );
};

export default GameControls;
