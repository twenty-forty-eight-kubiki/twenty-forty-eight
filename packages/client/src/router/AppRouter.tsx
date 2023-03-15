import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/store'
import { Switch, Route, Redirect } from 'react-router-dom'
import { fetchUser } from '../store/reducers/AuthSlice'
import { IRoute, routes } from './routerData'
import PrivateRoute from '../components/PrivateRoute/PrivateRoute'
import { HEADER_PATHS, RoutePath } from './RoutePath'
import Header from '../components/Header/Header'
import { Status } from '../store/store.types'

const AppRouter = () => {
  const dispatch = useAppDispatch()
  const { data: user } = useAppSelector(state => state.auth)
  const isAuth = !!user

  useEffect(() => { dispatch(fetchUser()) }, [])

  return (
    <>
      <PrivateRoute exact path={RoutePath.root} component={() => <Redirect to={RoutePath.settings} />} />

      {isAuth ? <Route path={HEADER_PATHS} component={Header} /> : null}

      <Switch>
        {routes.map((route: IRoute) =>
          route.private
            ? <PrivateRoute
              key={route.id}
              path={route.path}
              exact={route.exact}
              isAuth={isAuth}
              component={route.component}
            />
            : <Route
              key={route.id}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
        )}

        <Redirect to={RoutePath.login} />
      </Switch>
    </>
  )
}

export default AppRouter
