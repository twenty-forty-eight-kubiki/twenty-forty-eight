import React, { ReactElement, useState } from 'react';
import './GameControls.scss';
import GuiButton from '../../ui/GuiButton/GuiButton';
import restartIcon from '../../assets/icons/restart.svg';

const GameControls = (): ReactElement => {
  const [currentScore] = useState('0');
  const [bestScore] = useState('0');

  return (
    <div className='game-controls'>
      <h2 className='game-controls__title'>2048</h2>
      <div className='game-controls__controls'>
        <GuiButton
          btnText=''
          labelText='restart'
          icon={restartIcon}
          className='game-controls__restart'
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
