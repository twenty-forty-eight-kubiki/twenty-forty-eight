import AppRouter from './router/AppRouter'
import { fetchUser } from './store/reducers/AuthSlice'
import { useAppDispatch } from './hooks/store'
import { useEffect } from 'react'

const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchUser())
  })

  return <AppRouter />
}

export default App
