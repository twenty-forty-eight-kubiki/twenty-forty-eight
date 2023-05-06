import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, Theme } from './hooks/useTheme';
import { createStore } from './store/store';
import App from './App';
import './index.scss';

const initialState = window.__INITIAL_STATE__;
delete window.__INITIAL_STATE__;

export const store = createStore(initialState);

const startServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/sw.js')
      .then(registration => {
        console.log(
          'ServiceWorker registration successful with scope: ',
          registration.scope
        );
      })
      .catch((error: string) => {
        console.log('ServiceWorker registration failed: ', error);
      });
  }
};
startServiceWorker();

const Application = (
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  Application
);
