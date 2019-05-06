import React, { Component } from 'react';
import './sass/main.scss';
import LoginPage from './pages/LoginPage/LoginPage';
import ProductList from './pages/ProductList/ProductList';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Default from './pages/Default/Default';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path='/' component={ProductList} />
          <Route path='/details/:productId' component={ProductDetails} />
          <Route exact path='/login' component={LoginPage} />
          <Route component={Default} />
        </Switch>
      </>
    );
  }
}

export default App;
