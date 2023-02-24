import { useEffect } from 'react'
import './App.scss'
import LoginPage from "./pages/LoginPage/LoginPage";

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

    </div>
  )
}

export default App
