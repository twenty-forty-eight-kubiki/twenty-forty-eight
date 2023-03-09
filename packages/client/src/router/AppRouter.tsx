import { Switch, Route, Redirect } from 'react-router-dom'
import { IRoute, routes } from './routerData'
import PrivateRoute from '../components/PrivateRoute/PrivateRoute'

const AppRouter = () => {
  return (
    <div>
      <Switch>
        {routes.map((route: IRoute) => {
          if (route.private) {
            return (
              <PrivateRoute
                key={route.id}
                path={route.path}
                exact={route.exact}
                isAuth={true}
                component={route.component}
              />
            )
          } else {
            return (
              <Route
                key={route.id}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            )
          }
        })}
        <Redirect to="/" />
      </Switch>
    </div>
  )
}

export default AppRouter
