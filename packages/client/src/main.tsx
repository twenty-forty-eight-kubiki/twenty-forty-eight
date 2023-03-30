import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './store/store';
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import './index.scss';


const Application = (
  <Provider store={store}>
    <BrowserRouter>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </BrowserRouter>
  </Provider>
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  Application
);
