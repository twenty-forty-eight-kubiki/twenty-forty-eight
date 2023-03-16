import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App'
import { store } from './store/store'
import './index.scss'
import { fetchUser } from './store/reducers/AuthSlice'

store.dispatch(fetchUser())

const Application = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  Application
)
