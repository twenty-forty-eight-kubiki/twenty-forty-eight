import { FC } from 'react';
import { RoutePath } from './RoutePath';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import ForumPage from '../pages/ForumPage/ForumPage';
import LeaderBoardPage from '../pages/LeaderBoardPage/LeaderBoardPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import ProfileSettings from '../pages/ProfileSettings/ProfileSettings';
import GamePage from '../pages/GamePage/GamePage';
import TopicPage from '../pages/TopicPage/TopicPage';

export interface IRoute {
  id: number;
  path: RoutePath | RoutePath[];
  exact: boolean;
  component: FC;
  private: boolean;
  public?: boolean;
}

export const routes: Array<IRoute> = [
  {
    id: 1,
    path: RoutePath.Login,
    exact: true,
    component: LoginPage,
    private: false,
    public: true
  },
  {
    id: 2,
    path: RoutePath.Registration,
    exact: true,
    component: RegistrationPage,
    private: false,
    public: true
  },
  {
    id: 3,
    path: RoutePath.Forum,
    exact: true,
    component: ForumPage,
    private: true
  },
  {
    id: 4,
    path: RoutePath.Leaders,
    exact: true,
    component: LeaderBoardPage,
    private: true
  },
  {
    id: 5,
    path: RoutePath.Settings,
    exact: true,
    component: ProfileSettings,
    private: true
  },
  {
    id: 6,
    path: RoutePath.Game,
    exact: true,
    component: GamePage,
    private: true
  },
  {
    id: 7,
    path: RoutePath.User,
    exact: true,
    component: ProfilePage,
    private: true
  },
  {
    id: 8,
    path: RoutePath.Post,
    exact: true,
    component: TopicPage,
    private: true
  }
];
