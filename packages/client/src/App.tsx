import ForumPage from './pages/ForumPage/ForumPage'
import AppRouter from './router/AppRouter'
import LoginPage from './pages/LoginPage/LoginPage'
import { Route } from 'react-router-dom'
import LeaderBoardPage from './pages/LeaderBoardPage/LeaderBoardPage'
import './App.scss'

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  )
}

export default App
