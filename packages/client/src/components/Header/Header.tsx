import React from 'react'
import Icon from '../../ui/Icon/Icon'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
  return (
    <div className="header">
      <div className="inner">
        <Link to="/game" className="header__item">
          Game
        </Link>
        <Link to="/forum" className="header__item">
          Forum
        </Link>
        <Link to="/leaders" className="header__item">
          Leaderboard
        </Link>
        <Link to={'/settings'} className="header__item">
          Settings
        </Link>
        <Link to={'/user'}>
          <Icon img="" />
        </Link>
      </div>
    </div>
  )
}

export default Header
