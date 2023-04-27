import { memo, useState } from 'react';
import Icon from '../../ui/Icon/Icon';
import { Link } from 'react-router-dom';
import './Header.scss';
import { RoutePath } from '../../router/RoutePath';
import { useAppSelector } from '../../hooks/store';
import { getUserAvatar } from '../../store/selectors';
import { getAvatar } from '../../helpers/getAvatar';

const Header = memo(() => {
  const avatarPath = useAppSelector(getUserAvatar);
  const [avatar] = useState(getAvatar(avatarPath));

  return (
    <div className='header'>
      <div className='header__inner'>
        <Link to={RoutePath.Game} className='header__item header__item--button'>
          Game
        </Link>
        <Link to={RoutePath.Forum} className='header__item'>
          Forum
        </Link>
        <Link to={RoutePath.Leaders} className='header__item'>
          Leaderboard
        </Link>
        <Link to={RoutePath.Settings} className='header__item'>
          Settings
        </Link>
        <Link to={RoutePath.User} className='header__icon'>
          <Icon img={avatar} />
        </Link>
      </div>
    </div>
  );
});

export default Header;
