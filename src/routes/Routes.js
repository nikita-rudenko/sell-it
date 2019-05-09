import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProductList from 'pages/ProductList/ProductList';
import ProductDetails from 'pages/ProductDetails/ProductDetails';
import AuthPage from 'pages/AuthPage/AuthPage';
import Profile from 'pages/Profile/Profile';
import Default from 'pages/Default/Default';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={ProductList} />
    <Route path='/details/:productId' component={ProductDetails} />
    <Route exact path='/sign-in' component={AuthPage} />
    <Route exact path='/sign-up' component={AuthPage} />
    <Route exact path='/profile' component={Profile} />
    <Route component={Default} />
  </Switch>
);

export default Routes;
