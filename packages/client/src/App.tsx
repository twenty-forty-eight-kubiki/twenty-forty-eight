import { useEffect } from 'react'
import './App.scss'
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from './pages/ProfilePage/ProfilePage'
import ProfileSettings from './pages/ProfileSettings/ProfileSettings'
import RegistrationPage from './pages/RegistrationPage/RegistrationPage'

function App() {
  useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:${__SERVER_PORT__}`
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
    }

    fetchServerData()
  }, [])
  return (
    <div className="App">
      <ProfileSettings />
    </div>
  )
}

export default App
