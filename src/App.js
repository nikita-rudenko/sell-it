import React, { Component } from 'react';
import './sass/main.scss';
import AuthPage from './pages/AuthPage';
import ProductList from './pages/ProductList/ProductList';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Default from './pages/Default/Default';
import Profile from './pages/Profile/Profile';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path='/' component={ProductList} />
          <Route path='/details/:productId' component={ProductDetails} />
          <Route exact path='/sign-in' component={AuthPage} />
          <Route exact path='/sign-up' component={AuthPage} />
          <Route exact path='/profile' component={Profile} />
          <Route component={Default} />
        </Switch>
      </>
    );
  }
}

export default App;
