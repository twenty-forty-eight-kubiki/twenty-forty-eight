import { useAppSelector } from '../hooks/store'
import { Switch, Route, Redirect, useHistory } from 'react-router-dom'
import { IRoute, routes } from './routerData'
import PrivateRoute from '../components/PrivateRoute/PrivateRoute'
import { RoutePath } from './RoutePath'
import {
  getAuthorizationStatus,
  getAuthCheckedStatus,
} from '../store/selectors'

const AppRouter = () => {
  const isAuth = useAppSelector(getAuthorizationStatus)
  const isAuthChecked = useAppSelector(getAuthCheckedStatus)

  if (!isAuthChecked) {
    return <p>Loading...</p>
  }

  return (
    <Switch>
      {routes.map((route: IRoute) =>
        route.private ? (
          <PrivateRoute
            key={route.id}
            path={route.path}
            exact={route.exact}
            isAuth={isAuth}
            component={route.component}
          />
        ) : (
          <Route
            key={route.id}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        )
      )}

      <Redirect to={RoutePath.Login} />
    </Switch>
  )
}

export default AppRouter
