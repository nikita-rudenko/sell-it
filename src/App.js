import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, history } from './store/store';

import Routes from 'routes/Routes';

import { authUser } from './actions/auth';

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
          <Routes />
        </Router>
      </Provider>
    );
  }
}

export default App;
