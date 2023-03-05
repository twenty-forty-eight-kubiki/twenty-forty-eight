import { Route, Redirect } from 'react-router-dom'
import React, { FC, ReactElement } from 'react'

type PrivateRouteProps = {
  component: any
  isAuth?: boolean
  key: number
  path: string
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
        isAuth === false ? <Redirect to="" /> : <Component {...props} />
      }
    />
  )
}

export default PrivateRoute
