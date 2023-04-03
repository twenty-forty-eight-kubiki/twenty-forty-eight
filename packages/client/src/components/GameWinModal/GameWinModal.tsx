import React, { ReactElement } from 'react';
import './GameWinModal.scss';
import GuiButton from '../../ui/GuiButton/GuiButton';
import { resetBoardState } from '../../store/reducers/GameSlice';
import { useAppDispatch } from '../../hooks/store';

type GameWinModalProps = {
  onClose: () => void;
}

const GameWinModal = (props: GameWinModalProps): ReactElement => {
  const dispatch = useAppDispatch();

  const onResetClick = () => {
    dispatch(resetBoardState());
    props.onClose();
  };

  return (
    <div className='game-win-modal'>
      <h2 className='game-win-modal__title'><span className="game-win-modal__title-text">Поздравляем!</span> Вы набрали 2048 очков!</h2>
      <p className='game-win-modal__subtitle'>Вы можете продолжить игру или начать заново</p>
      <div className="game-win-modal__btns">
        <GuiButton
          btnText='Продолжить'
          labelText='continue'
          className='game-win-modal__btn'
          onClick={props.onClose}
        />
        <GuiButton
          btnText='Начать заново'
          labelText='restart'
          className='game-win-modal__btn'
          onClick={onResetClick}
        />
      </div>
    </div>
  );
};

export { GameWinModal };
