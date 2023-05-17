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
            name={leader.firstName}
            score={leader.score}
            key={leader.id}
            userId={leader.id}
            login={leader.displayName}
          />
        ))}
    </div>
  );
};

export default withLayout(LeaderBoardPage);
