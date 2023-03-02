import { useEffect } from 'react';
import './App.css';
import GamePage from './pages/GamePage/GamePage';

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
  return <GamePage />
}

export default App;
