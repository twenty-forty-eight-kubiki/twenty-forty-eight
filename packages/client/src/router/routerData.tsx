import { FC } from 'react'
import { RoutePath } from './RoutePath'
import LoginPage from '../pages/LoginPage/LoginPage'
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage'
import ForumPage from '../pages/ForumPage/ForumPage'
import LeaderBoardPage from '../pages/LeaderBoardPage/LeaderBoardPage'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import ProfileSettings from '../pages/ProfileSettings/ProfileSettings'

export interface IRoute {
  id: number
  path: RoutePath | RoutePath[]
  exact: boolean
  component: FC
  private: boolean
}

export const routes: Array<IRoute> = [
  {
    id: 1,
    path: RoutePath.Login,
    exact: true,
    component: LoginPage,
    private: false,
  },
  {
    id: 2,
    path: RoutePath.Registration,
    exact: true,
    component: RegistrationPage,
    private: false,
  },
  {
    id: 3,
    path: RoutePath.Forum,
    exact: true,
    component: ForumPage,
    private: true,
  },
  {
    id: 4,
    path: RoutePath.Leaders,
    exact: true,
    component: LeaderBoardPage,
    private: true,
  },
  {
    id: 5,
    path: RoutePath.Settings,
    exact: true,
    component: ProfileSettings,
    private: true,
  },
  {
    id: 6,
    path: RoutePath.Game,
    exact: true,
    component: () => <>Game page in progress...</>,
    private: true,
  },
  {
    id: 7,
    path: RoutePath.User,
    exact: true,
    component: ProfilePage,
    private: true,
  },
]
