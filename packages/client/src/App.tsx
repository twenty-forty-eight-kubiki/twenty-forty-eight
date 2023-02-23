import { useEffect } from 'react'
import './App.scss'
import GuiButton from './components/ui/GuiButton/GuiButton'

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
      <span>Вот тут будет жить ваше приложение :)</span>
      <GuiButton />
    </div>
  )
}

export default App
