import { Switch, Route, Redirect } from 'react-router-dom'
import { IRoute, routes } from './router/routerData'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import { withLayout } from './hocs/withLayout';

import { fetchUser } from './store/reducers/AuthSlice'
import { useAppSelector } from './hooks/store';
import { useEffect } from 'react';

function App() {
  const { user } = useAppSelector((state) => state.auth)

  useEffect(() => {
    fetchUser();
  }, [])

  return (
    <Switch>
      {routes.map((route: IRoute) => {
        if (route.private) {
          return (
            <PrivateRoute
              key={route.id}
              path={route.path}
              exact={route.exact}
              isAuth={!!user}
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
  )
}


export default withLayout(App);
