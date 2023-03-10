import LoginPage from '../pages/LoginPage/LoginPage'
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage'
import ForumPage from '../pages/ForumPage/ForumPage'
import { ReactElement } from 'react'
import LeaderBoardPage from '../pages/LeaderBoardPage/LeaderBoardPage'

export interface IRoute {
  id: number
  path: string
  exact: boolean
  component: () => ReactElement
  private: boolean
}

export const routes: Array<IRoute> = [
  {
    id: 1,
    path: '/',
    exact: true,
    component: LoginPage,
    private: false,
  },
  {
    id: 2,
    path: '/registration',
    exact: true,
    component: RegistrationPage,
    private: false,
  },
  {
    id: 3,
    path: '/forum',
    exact: true,
    component: ForumPage,
    private: false,
  },
  {
    id: 4,
    path: '/leaders',
    exact: true,
    component: LeaderBoardPage,
    private: false,
  },
]
