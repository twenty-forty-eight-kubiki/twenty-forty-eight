import React from 'react';
import './GamerItem.scss';
import Icon from '../../ui/Icon/Icon';
import { LeaderResponse } from '../../api/leaderBoardApi';

interface GamerItemProps {
  profile: LeaderResponse;
}

const GamerItem = (props: GamerItemProps) => {
  return (
    <div className='gamer-item'>
      <div className='gamer-item__icon'>
        <Icon img={props.profile.avatar} />
      </div>
      <div className='gamer-item__info'>
        <p>{props.profile.user_name}</p>
      </div>
      <div className='gamer-item__score'>
        <p>{props.profile.score}</p>
      </div>
    </div>
  );
};

export default GamerItem;
