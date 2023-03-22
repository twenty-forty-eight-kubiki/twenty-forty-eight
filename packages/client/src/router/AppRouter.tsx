import { useAppSelector } from '../hooks/store';
import { Switch, Route, Redirect } from 'react-router-dom';
import { IRoute, routes } from './routerData';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import { RoutePath } from './RoutePath';
import { getAuthorizationStatus } from '../store/selectors';
import PublicRoute from '../components/PublicRoute/PublicRoute';

const AppRouter = () => {
  const isAuth = useAppSelector(getAuthorizationStatus);

  return (
    <Switch>
      {routes.map((route: IRoute) => {
        if (route.private) {
          return (
            <PrivateRoute
              key={route.id}
              path={route.path}
              exact={route.exact}
              isAuth={isAuth}
              component={route.component}
            />
          );
        } else {
          if (route.public) {
            return (
              <PublicRoute
                key={route.id}
                path={route.path}
                exact={route.exact}
                component={route.component}
                isAuth={isAuth}
              />
            );
          }

          return (
            <Route
              key={route.id}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          );
        }
      })}

      <Redirect to={RoutePath.Login} />
    </Switch>
  );
};

export default AppRouter;
