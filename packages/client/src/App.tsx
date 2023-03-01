import { useEffect } from 'react'
import './App.scss'

import RegistrationPage from './pages/RegistrationPage/RegistrationPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import ProfileSettings from './pages/ProfileSettings/ProfileSettings'
import LoginPage from './pages/LoginPage/LoginPage'

function App() {

  return (
    <div className="App">
      <LoginPage />
    </div>
  )
}

export default App
