import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { StoreProvider } from './store';

import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <StoreProvider>
      <Route >
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </Route >
    </StoreProvider>
  </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
