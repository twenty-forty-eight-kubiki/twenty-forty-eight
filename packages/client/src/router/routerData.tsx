import { FC } from 'react'
import { RoutePath } from './RoutePath'
import LoginPage from '../pages/LoginPage/LoginPage'
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage'
import ForumPage from '../pages/ForumPage/ForumPage'
import LeaderBoardPage from '../pages/LeaderBoardPage/LeaderBoardPage'
import ProfilePage from '../pages/ProfilePage/ProfilePage'

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
    path: RoutePath.login,
    exact: true,
    component: LoginPage,
    private: false,
  },
  {
    id: 2,
    path: RoutePath.registration,
    exact: true,
    component: RegistrationPage,
    private: false,
  },
  {
    id: 3,
    path: RoutePath.forum,
    exact: true,
    component: ForumPage,
    private: true,
  },
  {
    id: 4,
    path: RoutePath.leaders,
    exact: true,
    component: LeaderBoardPage,
    private: true,
  },
  {
    id: 5,
    path: RoutePath.settings,
    exact: true,
    component: ProfilePage,
    private: true,
  },
  {
    id: 6,
    path: RoutePath.game,
    exact: true,
    component: () => <>Game page in progress...</>,
    private: true,
  },
  {
    id: 7,
    path: RoutePath.user,
    exact: true,
    component: () => <>User profile page in progress...</>,
    private: true,
  }
]
