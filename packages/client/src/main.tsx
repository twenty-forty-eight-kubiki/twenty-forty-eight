import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.scss'
import Header from './components/Header/Header'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
)
