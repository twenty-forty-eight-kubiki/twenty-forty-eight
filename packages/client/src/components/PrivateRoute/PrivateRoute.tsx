import { Route, Redirect, RouteProps } from 'react-router-dom'
import { FC, ReactElement } from 'react'
import { RoutePath } from '../../router/RoutePath'

type PrivateRouteProps = {
  component: FC
  isAuth?: boolean
  path: RouteProps['path']
  exact: boolean
}

const PrivateRoute: FC<PrivateRouteProps> = ({
  component: Component,
  isAuth,
  ...rest
}): ReactElement => {
  return (
    <Route
      {...rest}
      render={(props: any) =>
        isAuth ? <Component {...props} /> : <Redirect to={RoutePath.Login} />
      }
    />
  )
}

export default PrivateRoute
