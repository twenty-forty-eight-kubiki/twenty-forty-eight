import React, { ReactElement } from 'react';
import './GameOnboarding.scss';
import arrowsIcon from '../../assets/icons/arrows.svg';

const GameOnboarding = (): ReactElement => {
  return (
    <div className='game-onboarding'>
      <h2 className='game-onboarding__title'>Управление</h2>
      <img
        className='game-onboarding__img'
        alt='управление стрелками'
        src={arrowsIcon}
      />
    </div>
  );
};

export default GameOnboarding;
