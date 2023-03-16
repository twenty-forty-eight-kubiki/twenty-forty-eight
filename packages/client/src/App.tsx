import AppRouter from './router/AppRouter'
import { fetchUser } from './store/reducers/AuthSlice'
import { useAppDispatch, useAppSelector } from './hooks/store'
import { useEffect } from 'react'
import { getAuthCheckedStatus, getAuthorizationStatus } from './store/selectors'

const App = () => {
  const isAuthChecked = useAppSelector(getAuthCheckedStatus)

  if (!isAuthChecked) {
    return <p>Loading...</p>
  }

  return <AppRouter />
}

export default App
