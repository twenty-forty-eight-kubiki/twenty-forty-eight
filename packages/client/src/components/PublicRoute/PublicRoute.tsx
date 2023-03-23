import { Route, Redirect, RouteProps } from 'react-router-dom'
import { FC, ReactElement } from 'react'
import { RoutePath } from '../../router/RoutePath'
import { AuthorizationStatus } from '../../constants/auth'

type PublicRouteProps = {
  component: FC
  isPublic?: boolean
  path: RouteProps['path']
  exact: boolean
  isAuth: AuthorizationStatus
}

const PublicRoute: FC<PublicRouteProps> = ({
  component: Component,
  isAuth,
  ...rest
}): ReactElement => {
  return (
    <Route
      {...rest}
      render={(props: any) =>
        isAuth === AuthorizationStatus.NoAuth ? (
          <Component {...props} />
        ) : (
          <Redirect to={RoutePath.User} />
        )
      }
    />
  )
}

export default PublicRoute
