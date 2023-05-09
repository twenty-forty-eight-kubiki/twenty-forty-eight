import { useEffect, useState } from 'react';
import GamerItem from '../../components/GamerItem/GamerItem';
import { withLayout } from '../../hocs/withLayout';
import './LeaderBoardPage.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { fetchLeaders } from '../../store/leaderboard-actions';
import { getLeaders } from '../../store/selectors';

const LeaderBoardPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchLeaders());
  }, []);
  const sortedList = useAppSelector(getLeaders);

  return (
    <div className='leader-board-page'>
      {sortedList &&
        sortedList.map(leader => (
          <GamerItem
            name={leader.data.name}
            score={leader.data.score}
            key={leader.data.userId}
          />
        ))}
    </div>
  );
};

export default withLayout(LeaderBoardPage);
