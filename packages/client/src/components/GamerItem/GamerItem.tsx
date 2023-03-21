import React from 'react'
import './GamerItem.scss'
import Icon from '../../ui/Icon/Icon'
import { LeaderResponse } from '../../types/api/leaderbordApi'

interface GamerItemProps {
  name: string
  score: number
}

const GamerItem = (props: GamerItemProps) => {
  return (
    <div className="gamer-item">
      <div className="gamer-item__info">
        <p>{props.name}</p>
      </div>
      <div className="gamer-item__score">
        <p>{props.score}</p>
      </div>
    </div>
  )
}

export default GamerItem
