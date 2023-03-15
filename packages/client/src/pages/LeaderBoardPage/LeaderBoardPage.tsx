import { useEffect, useState } from 'react'
import GamerItem from '../../components/GamerItem/GamerItem'
import { LeaderBoardApi, LeaderResponse } from '../../api/leaderBoardApi'
import './LeaderBoardPage.scss'

const LeaderBoardPage = () => {
  const [leaders, setLeaders] = useState<LeaderResponse[]>([])

  useEffect(() => {
    getLeaders()
  }, [])

  const getLeaders = (): void => {
    const response: Promise<LeaderResponse[]> = LeaderBoardApi.getAll()
    response.then(response => {
      if (Array.isArray(response)) {
        setLeaders(response)
      }
    })
  }

  return (
    <div className="leader-board-page">
      {Array.isArray(leaders) &&
        leaders.map(leader => (
          <GamerItem profile={leader} key={leader.userId} />
        ))}
    </div>
  )
}

export default LeaderBoardPage
