import React, { useEffect, useState } from 'react'
import GamerItem from '../../components/GamerItem/GamerItem'
import { LeaderBoardApi } from '../../api/leaderBoardApi'
import './LeaderBoardPage.scss'

export interface GamerItemProps {
  user_name: string
  avatar: string
  userId: number
  score: number
}

const LeaderBoardPage = () => {
  const [leaders, setLeaders] = useState<GamerItemProps[]>([])

  useEffect(() => {
    getLeaders()
  }, [])

  const getLeaders = () => {
    LeaderBoardApi.getAll().then(response => {
      if (!response.reason) {
        setLeaders(response)
      }
    })
  }

  return (
    <div className="lieder-board-page">
      {leaders.map(leader => (
        <GamerItem profile={leader} key={leader.userId} />
      ))}
    </div>
  )
}

export default LeaderBoardPage
