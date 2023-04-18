import React, { ReactElement } from 'react';
import './GameRulesModal.scss';

const GameRulesModal = (): ReactElement => {
  return (
    <div className='game-rules-modal'>
      <h2 className='game-rules-modal__title'>Правила игры</h2>
      <ol className='game-rules-modal__list'>
        <li className='game-rules-modal__item'>
          В&nbsp;каждом раунде появляется плитка номинала &laquo;2&raquo; или
          &laquo;4&raquo;.
        </li>
        <li className='game-rules-modal__item'>
          Нажатием стрелки игрок может скинуть все плитки игрового поля
          в&nbsp;одну из&nbsp;4&nbsp;сторон. Если при сбрасывании две плитки
          одного номинала &laquo;налетают&raquo; одна на&nbsp;другую,
          то&nbsp;они превращаются в&nbsp;одну, номинал которой равен сумме
          соединившихся плиток. После каждого хода на&nbsp;свободной секции поля
          появляется новая плитка номиналом &laquo;2&raquo; или &laquo;4&raquo;.
          Если при нажатии кнопки местоположение плиток или их&nbsp;номинал
          не&nbsp;изменится, то&nbsp;ход не&nbsp;совершается.
        </li>
        <li className='game-rules-modal__item'>
          Если в&nbsp;одной строчке или в&nbsp;одном столбце находится более
          двух плиток одного номинала, то&nbsp;при сбрасывании они начинают
          соединяться с&nbsp;той стороны, в&nbsp;которую были направлены.
          Например, находящиеся в&nbsp;одной строке плитки (4, 4, 4) после хода
          влево превратятся&nbsp;в (8, 4), а&nbsp;после хода вправо&nbsp;&mdash;
          в&nbsp;(4, 8). Данная обработка неоднозначности позволяет более точно
          формировать стратегию игры.
        </li>
        <li className='game-rules-modal__item'>
          За&nbsp;каждое соединение игровые очки увеличиваются на&nbsp;номинал
          получившейся плитки.
        </li>
        <li className='game-rules-modal__item'>
          Игра заканчивается поражением, если после очередного хода невозможно
          совершить действие.
        </li>
      </ol>
    </div>
  );
};

export { GameRulesModal };
