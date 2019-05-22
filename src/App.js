import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, history } from './store/store';

import Routes from 'routes/routes';

import { authUser } from './actions/auth';

import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';

import 'sass/main.scss';

const token = localStorage.getItem('token');
if (token) {
  store.dispatch(authUser());
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <ErrorBoundary>
            <Routes />
          </ErrorBoundary>
        </Router>
      </Provider>
    );
  }
}

export default App;
