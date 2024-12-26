import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './Redux/Store';

const container=ReactDOM.createRoot(document.getElementById("root"));
container.render(
  <Provider store={store}>
    <App />
  </Provider>
);
