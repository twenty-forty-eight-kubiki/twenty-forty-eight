import App from './src/App';
import { renderToString } from 'react-dom/server';
import { createStore } from './src/store/store';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';

async function render() {
  const store = createStore();
 //  const initialState = store.getState();

  const renderResult = renderToString(
    <Provider store={store}>
      <StaticRouter>
        <App />
      </StaticRouter>
    </Provider>
  );

  return [createStore, renderResult]
}

export { render }
