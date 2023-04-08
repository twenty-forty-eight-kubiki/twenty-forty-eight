import App from './src/App';
import { renderToString } from 'react-dom/server';
import { store } from './src/store/store';
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import React from 'react';

export function render() {
  return renderToString(
    <Provider store={store}>
      <StaticRouter>
        <App />
      </StaticRouter>
    </Provider>
  );
}
