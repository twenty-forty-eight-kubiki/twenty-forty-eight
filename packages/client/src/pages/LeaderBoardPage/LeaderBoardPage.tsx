import { useEffect, useState } from 'react'
import GamerItem from '../../components/GamerItem/GamerItem'
import { withLayout } from '../../hocs/withLayout'
import './LeaderBoardPage.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/store'
import { fetchLeaders } from '../../store/leaderborad-actions'
import { getSortedLeaders, getLeaders } from '../../store/selectors'

const LeaderBoardPage = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchLeaders())
  }, [])
  const sortedList = useAppSelector(getSortedLeaders)

  return (
    <div className="leader-board-page">
      {sortedList &&
        sortedList.map(leader => (
          <GamerItem
            name={leader.name}
            score={leader.score}
            key={leader.userId}
          />
        ))}
    </div>
  )
}

export default withLayout(LeaderBoardPage)
