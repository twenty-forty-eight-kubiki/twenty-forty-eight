import { memo } from 'react'
import Icon from '../../ui/Icon/Icon'
import { Link } from 'react-router-dom'
import './Header.scss'
import { RoutePath } from '../../router/RoutePath'

const Header = memo(() => {
  return (
    <div className="header">
      <div className="inner">
        <Link to={RoutePath.Game} className="header__item">
          Game
        </Link>
        <Link to={RoutePath.Forum} className="header__item">
          Forum
        </Link>
        <Link to={RoutePath.Leaders} className="header__item">
          Leaderboard
        </Link>
        <Link to={RoutePath.Settings} className="header__item">
          Settings
        </Link>
        <Link to={RoutePath.User}>
          <Icon img="" />
        </Link>
      </div>
    </div>
  )
})

export default Header
