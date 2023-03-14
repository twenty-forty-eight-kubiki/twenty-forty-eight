import React from 'react'
import { useAppSelector } from '../../hooks/store'
import Header from '../Header/Header'

const Layout = ({ children }: React.PropsWithChildren) => {
  const { user } = useAppSelector(state => state.auth)

  return (
    <div className="layout">
      {user && <Header />}
      <div className="layout__main">{children}</div>
    </div>
  )
}

export default Layout
