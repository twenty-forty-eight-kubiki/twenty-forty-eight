import React, { FormEvent, ReactElement, useState } from 'react';
import GuiButton from '../../ui/GuiButton/GuiButton';
import restartIcon from '../../assets/icons/restart.svg';
import './GameControls.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import {
  getBoardCurrentScore,
  getBoardBestScore
} from '../../store/game-selectors';
import {
  resetBoardState,
  changeFieldSize,
  createBoard
} from '../../store/reducers/GameSlice';
import { getGameTileSizeState } from '../../store/selectors';

const GameControls = (): ReactElement => {
  const dispatch = useAppDispatch();

  const currentScore = useAppSelector(getBoardCurrentScore);
  const bestScore = useAppSelector(getBoardBestScore);
  const gameTileSize = useAppSelector(getGameTileSizeState);

  const onResetClick = () => {
    dispatch(resetBoardState());
  };

  const onSelectChange = (e: FormEvent) => {
    const value = Number((e.target as HTMLInputElement).value);

    dispatch(changeFieldSize({ value }));
    dispatch(resetBoardState());
    dispatch(createBoard());
  };

  return (
    <div className='game-controls'>
      <h2 className='game-controls__title'>2048</h2>
      <div className='game-controls__controls'>
        <div className='game-controls__select-wrap'>
          <label htmlFor='size' className='game-controls__select-label'>
            Размер поля
          </label>
          <select
            className='game-controls__select'
            id='size'
            onChange={onSelectChange}
            defaultValue={gameTileSize}
          >
            <option value='4'>4x4</option>
            <option value='5'>5x5</option>
            <option value='6'>6x6</option>
          </select>
        </div>
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
